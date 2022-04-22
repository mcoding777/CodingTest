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

// 두번째 풀이 -----------------------------------------------------------------------------------------------

function solution(phone_number) {
  return phone_number.replace(/\d(?=\d{4})/g, "*");
}

// 세번째 풀이 -----------------------------------------------------------------------------------------------

function solution(phone_number) {
  return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}

/*
★★★ 배운 점 ★★★
- replace 메서드는 확실히 느리다. (첫번째 풀이와 세번째 풀이는 0.0X 속도였지만, 두번째 풀이는 0.X 속도)
*/
