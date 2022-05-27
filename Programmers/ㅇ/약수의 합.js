/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
약수의 합

[테스트 날짜]
22.05.27

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12928
*/

// 첫번째 풀이 -----------------------------------------------------------------------------------------------

function solution(n) {
  let measure = 0;
  let count = n;

  while (count > 0) {
    if (n % count === 0) measure += count;
    count--;
  }

  return measure;
}

// 두번째 풀이 -----------------------------------------------------------------------------------------------

function solution(n) {
  // 테스트 케이스 : 12의 약수는 1, 2, 3, 4, 6, 12 => 합은 28
  var answer = 0; // 13 + 8 + 7 = 28
  let i;
  for (i = 1; i <= Math.sqrt(n); i++) {
    if (!(n % i)) {
      // 나머지가 0이면
      answer += i + n / i;
    }
  }
  i--; // 2
  return i === n / i ? answer - i : answer;
}
