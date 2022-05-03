/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
다트 게임

[테스트 날짜]
22.05.03

[링크]
https://programmers.co.kr/learn/courses/30/lessons/17682
*/

// 첫번째 풀이 -----------------------------------------------------------------------------------------------

function solution(dartResult) {
  var answer = [];

  let dart = dartResult.split("");
  let number = 0; // 이전 숫자 저장
  let bonus = {
    S: 1,
    D: 2,
    T: 3,
  };
  let option = {
    "*": (number) => number * 2,
    "#": (number) => number * -1,
  };

  for (let i = 0; i < dart.length; i++) {
    let answer_last = answer[answer.length - 1];

    if (Number(dart[i]) >= 0) {
      // 현재 값이 숫자이면 number에 저장
      if (dart[i] === "0" && dart[i - 1] === "1") {
        number = 10;
      } else {
        number = Number(dart[i]);
      }
    } else if (bonus[dart[i]]) {
      // 현재 값이 S,D,T 중 하나이면 number에 제곱해서 answer에 저장
      answer.push(number ** bonus[dart[i]]);
    } else if (option[dart[i]]) {
      if (dart[i] === "*") {
        answer[answer.length - 2] = option[dart[i]](answer[answer.length - 2]);
      }
      answer[answer.length - 1] = option[dart[i]](answer_last);
    }
  }

  return answer.reduce((prev, curr) => prev + curr, 0);
}

// 두번째 풀이 -----------------------------------------------------------------------------------------------

function solution(dartResult) {
  const bonus = { S: 1, D: 2, T: 3 },
    options = { "*": 2, "#": -1, undefined: 1 };

  let darts = dartResult.match(/\d\d?.?\D/g);

  for (let i = 0; i < darts.length; i++) {
    let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
      score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];
    darts[i] = score;

    if (split[3] === "*" && darts[i - 1]) darts[i - 1] *= options["*"];
  }

  return darts.reduce((a, b) => a + b);
}

/*
★★★ 배운 점 ★★★
- dartResult.match(/\d\d?.?\D/g);는 숫자 + (S, D, T) + (*, #) 묶음으로 나눠서 배열로 반환한다.
- darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/)는 숫자 / SDT / *# 를 나눠서 배열로 반환한다.
- 성능은 첫번째 풀이가 더 좋다.
*/
