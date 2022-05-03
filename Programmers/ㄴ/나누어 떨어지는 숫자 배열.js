/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
나누어 떨어지는 숫자 배열

[테스트 날짜]
22.05.03

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12910
*/

// 첫번째 풀이 -----------------------------------------------------------------------------------------------

function solution(arr, divisor) {
  var answer = arr.filter((item) => item % divisor === 0);
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}
