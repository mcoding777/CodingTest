/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
정수 내림차순으로 배치하기

[테스트 날짜]
22.04.13

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12931
*/

// 첫번째 풀이 -----------------------------------------------------------------------------------------------

function solution(n) {
  var answer = [];

  do {
    answer.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);

  for (let i = 0; i < answer.length; i++) {
    let index = i;
    while (index > 0 && answer[index - 1] < answer[index]) {
      // index가 0보다 크고 이전 숫자가 현재 숫자보다 작으면
      let current = answer[index];
      answer[index] = answer[index - 1];
      answer[index - 1] = current;
      index--;
    }
  }

  return 1 * answer.join("");
}

// 두번째 풀이 -----------------------------------------------------------------------------------------------

function solution(n) {
  return +(n + "")
    .split("")
    .sort((a, b) => b - a)
    .join("");
}

/*
- 삽입 정렬 구현 코드 잊지말기!!
- while 문과 do-while 문의 성능 차이는 크게 없다. 상황에 맞게 사용하자.
- 논리 연산에서 숫자로 된 문자열을 연산하는 것보다 숫자끼리 연산하는게 더 빠르다.
- sort는 문자열 유니코드 기준으로 정렬해줌
- sort의 알고리즘은 브라우저마다 다름
- 숫자로 된 문자열에 + 기호를 붙이면 숫자형으로 바뀐다
*/
