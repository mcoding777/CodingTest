/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
가운데 글자 가져오기

[테스트 날짜]
22.04.28

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12903
*/

// 첫번째 풀이 -----------------------------------------------------------------------------------------------

function solution(s) {
  let len = s.length;

  return len % 2 === 0 ? s[len / 2 - 1] + s[len / 2] : s[Math.floor(len / 2)];
}

// 두번째 풀이 -----------------------------------------------------------------------------------------------

function solution(s) {
  let mid = Math.floor(s.length / 2);

  return s.length % 2 === 0 ? s[mid - 1] + s[mid] : s[mid];
}

/*
★★★ 배운 점 ★★★
- length보다 mid를 변수로 정하는 것이 좀 더 가독성이 좋은 것 같다.
- Array.prototype.slice()와 유사한 String.prototype.substr() 메서드도 있다. 하지만 MDN 에서는 사용하지 않을 것을 권장한다.
*/
