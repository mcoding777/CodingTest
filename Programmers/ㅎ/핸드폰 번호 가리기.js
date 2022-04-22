/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
핸드폰 번호 가리기

[테스트 날짜]
22.04.22

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12948
*/

// 첫번째 풀이 -----------------------------------------------------------------------------------------------

function solution(phone_number) {
  return phone_number.slice(-4).padStart(phone_number.length, "*");
}
