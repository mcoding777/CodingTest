/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
평균 구하기

[테스트 날짜]
22.04.21

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12944
*/

// 첫번째 풀이 -----------------------------------------------------------------------------------------------

function solution(arr) {
  return arr.reduce((prev, curr) => prev + curr, 0) / arr.length;
}
