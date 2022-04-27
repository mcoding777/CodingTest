/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
부족한 금액 계산하기

[테스트 날짜]
22.04.27

[링크]
https://programmers.co.kr/learn/courses/30/lessons/82612
*/

// 첫번째 풀이 -----------------------------------------------------------------------------------------------

function solution(price, money, count) {
  let re_count = 1;

  let want = Array(count)
    .fill(price)
    .reduce((prev, curr) => {
      let result = prev + curr * re_count;
      re_count++;
      return result;
    }, 0);

  return want > money ? want - money : 0;
}

// 두번째 풀이 -----------------------------------------------------------------------------------------------

function solution(price, money, count) {
  const tmp = (price * count * (count + 1)) / 2 - money;
  return tmp > 0 ? tmp : 0;
}

// 세번째 풀이 -----------------------------------------------------------------------------------------------

function solution(price, money, count) {
  let answer = 0;

  for (let i = 1; i <= count; i++) {
    answer += price * i;
  }

  return answer > money ? answer - money : 0;
}

/*
★★★ 배운 점 ★★★
- for문으로 한번만 돌아도 됐을 것을 fill과 reduce로 쓸데없는 탐색이 이루어졌다...
- 가우스 공식을 사용하면 가장 빠르게 해결할 수 있다. (1 부터 n까지의 합 = n (n + 1))
*/
