/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
자릿수 더하기

[테스트 날짜]
22.04.12

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12931
*/

// 첫번째 풀이 -----------------------------------------------------------------------------------------------

function solution(n) {
  var answer = 0;

  String(n)
    .split("")
    .forEach((item) => (answer += Number(item)));

  return answer;
}

// 두번째 풀이 -----------------------------------------------------------------------------------------------

function solution(n) {
  return (n + "").split("").reduce((prev, curr) => prev + Number(curr), 0);
}

// 세번째 풀이 -----------------------------------------------------------------------------------------------

function solution(n) {
  var sum = 0;

  do {
    sum += n % 10;
    n = Math.floor(n / 10);
  } while (n > 0);

  return sum;
}

/*
- 숫자를 배열로 바꾸는 방법에는 (n + "").split과 do while 문을 사용하는 방법이 있다.
- String()보다 위의 방법이 훨씬 더 빠르다.
- Array.prototype.reduce() 라는 누산기 함수가 존재한다.
- 숫자의 '자릿수'를 활용하는 문제는 나머지 연산자와 Math 함수들을 활용해보자.
*/
