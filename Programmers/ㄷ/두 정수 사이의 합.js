/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
두 정수 사이의 합

[테스트 날짜]
22.04.29

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12912
*/

// 첫번째 풀이 -----------------------------------------------------------------------------------------------

function solution(a, b) {
  if (a === b) return a;

  var answer = 0;
  if (a > b) answer = solution(b, a);

  while (a <= b) answer += b--;

  return answer;
}

// 두번째 풀이 -----------------------------------------------------------------------------------------------

function solution(a, b) {
  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}

/*
★★★ 배운 점 ★★★
- 가우스 공식... 양 끝의 합 * 양 끝의 사이에 있는 숫자 갯수
*/
