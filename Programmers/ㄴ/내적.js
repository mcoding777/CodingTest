/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
내적

[테스트 날짜]
23.11.27

[링크]
https://school.programmers.co.kr/learn/courses/30/lessons/70128
*/

// 첫번째 풀이 -----------------------------------------------------------------------------------------------

function solution(a, b) {
  let index = 0;
  return a.reduce((prev, curr) => prev + (curr * b[index++]), 0);
}

// 두번째 풀이 -----------------------------------------------------------------------------------------------

function solution(a, b) {
  return a.reduce((prev, curr, index) => prev + (curr * b[index]), 0);
}

/*
★★★ 배운 점 ★★★
- Array.reduce에도 index prop이 존재한다.
*/
