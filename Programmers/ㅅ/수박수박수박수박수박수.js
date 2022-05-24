/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
수박수박수박수박수박수

[테스트 날짜]
22.05.24

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12922
*/

// 첫번째 풀이 -----------------------------------------------------------------------------------------------

function solution(n) {
  var answer = "";
  return answer.padStart(n, "수박");
}

// 두번째 풀이 -----------------------------------------------------------------------------------------------

function solution(n) {
  var answer = "수박";
  return answer.repeat(n).substring(0, n);
}

/*
★★★ 배운 점 ★★★
- String.substring(a, b)는 String의 a부터 b-1까지 부분 문자열을 반환한다.
- 첫번째 풀이가 빠르다.
*/
