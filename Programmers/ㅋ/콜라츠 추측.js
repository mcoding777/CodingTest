/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
콜라츠 추측

[테스트 날짜]
22.04.15

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12943
*/

// 첫번째 풀이 -----------------------------------------------------------------------------------------------

function solution(num) {
  let answer = 0;
  let result = calculation(num);

  function calculation(n) {
    if (n === 1) return answer;

    if (answer === 500) return -1;

    answer++;

    if (n % 2) {
      // 홀수라면
      return calculation(n * 3 + 1);
    } else {
      // 짝수라면
      return calculation(n / 2);
    }
  }

  return result;
}

// 두번째 풀이 -----------------------------------------------------------------------------------------------

function solution(num) {
  let answer = 0;

  if (num === 1) return 0;

  while (answer !== 500 && num !== 1) {
    answer++;
    num = num % 2 ? num * 3 + 1 : num / 2;
  }

  return (num === 1 && answer) || (answer === 500 && -1);
}

/*
★★★ 배운 점 ★★★
- return num === 1 && 0 은 0이 아니라 false로 반환되니까 주의가 필요함
- 재귀함수보다 while 문이 빠르다 (재귀함수는 최악의 속도 0.18ms / while 문은 최악의 속도 0.11ms)
*/
