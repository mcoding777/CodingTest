/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
나머지가 1이 되는 수 찾기

[테스트 날짜]
22.04.26

[링크]
https://programmers.co.kr/learn/courses/30/lessons/87389
*/

// 첫번째 풀이 -----------------------------------------------------------------------------------------------

function solution(n) {
  var answer = 0;

  while (true) {
    if (n % answer === 1) break;
    answer++;
  }

  return answer;
}
