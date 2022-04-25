/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
행렬의 덧셈

[테스트 날짜]
22.04.25

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12954
*/

// 첫번째 풀이 -----------------------------------------------------------------------------------------------

function solution(x, n) {
  var answer = [];
  let number = x;

  while (n > 0) {
    answer.push(x);
    x += number;
    n--;
  }

  return answer;
}

// 두번째 풀이 -----------------------------------------------------------------------------------------------

function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((item, index) => (index + 1) * item);
}

/*
★★★ 배운 점 ★★★
- 성능을 고려해서 while문을 사용해봤는데 역시 다른 풀이에 비해 빠르다.
- Array(n).fill(x) 대신에 [...Array(n).keys()] 를 사용해도 된다.
*/
