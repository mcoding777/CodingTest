/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
하샤드 수

[테스트 날짜]
22.04.21

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12947
*/

// 첫번째 풀이 -----------------------------------------------------------------------------------------------

function solution(x) {
  let list = [];
  let number = x;

  while (number > 0) {
    list.push(number % 10);
    number = Math.floor(number / 10);
  }

  let sum = list.reduce((prev, curr) => prev + curr, 0);

  return !(x % sum);
}
