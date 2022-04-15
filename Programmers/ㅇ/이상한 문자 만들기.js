/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
이상한 문자 만들기

[테스트 날짜]
22.04.12

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12930
*/

// 첫번째 풀이 -----------------------------------------------------------------------------------------------

function solution(s) {
  var answer = "";

  let s_list = s.split("");
  let index = 0;

  s_list.forEach((item) => {
    if (item !== " ") {
      // item이 공백이 아니라면
      if (index % 2 === 0) {
        answer += item.toUpperCase();
      } else {
        answer += item.toLowerCase();
      }
      index++;
    } else {
      // item이 공백이라면
      answer += item;
      index = 0;
    }
  });

  return answer;
}

// 두번째 풀이 -----------------------------------------------------------------------------------------------

function solution(s) {
  function changeWord(word) {
    return word.length === 2
      ? word[0].toUpperCase() + word[1].toLowerCase()
      : word[0].toUpperCase();
  }

  return s.replace(/(\w)(\w?)/g, changeWord);
}

/*
- 문제의 함정에 빠지지 말자. 하나 '이상'의 공백!!!
- 인덱스 기준으로 짝홀이다. 문제를 제대로 읽자
- replace를 사용하는 방법은 속도가 느리다 (두번 반복하니까)
- 정규식 /(\w)(\w?)/g은 연속되는 두 문자를 의미하는데, 두번째 자리에는 문자가 있을수도 있고 없을수도 있다는 뜻
*/
