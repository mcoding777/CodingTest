/*
[플랫폼]
프로그래머스

[난이도]
레벨 2

[문제]
위장

[테스트 날짜]
22.04.16

[링크]
https://programmers.co.kr/learn/courses/30/lessons/42578
*/

// 첫번째 풀이 -----------------------------------------------------------------------------------------------

function solution(clothes) {
  var answer = 0;

  let clothes_number = new Map(); // 옷의 종류 : 갯수
  let kinds = new Set(); // 옷의 종류

  clothes.forEach((item) => {
    let kind = item[1];

    answer++; // 하나만 입는 경우의 수를 더하기
    kinds.add(kind);

    clothes_number.has(kind)
      ? clothes_number.set(kind, clothes_number.get(kind) + 1)
      : clothes_number.set(kind, 1);
  });

  let number = 1;
  if (kinds.size === 1) return answer;

  for (let item of kinds) {
    number *= clothes_number.get(item) + 1;
  }

  return number - 1;
}

// 두번째 풀이 -----------------------------------------------------------------------------------------------

function solution(clothes) {
  let clothes_object = clothes.reduce((prev, curr) => {
    prev[curr[1]] = prev[curr[1]] ? prev[curr[1]] + 1 : 1;
    return prev;
  }, {});

  return (
    Object.values(clothes_object).reduce((prev, curr) => prev * (curr + 1), 1) -
    1
  );
}

/*
- 속도는 첫번째 풀이가 더 빠르다.
- number *= clothes_number.get(item) + 1; 에서 +1 하는 이유 => 최소한 1가지의 옷을 입으면 되므로 모든 종류의 옷을 입을 필요는 없다. 즉, 각각의 옷을 입지 않는 경우를 +1 해줘야 한다.
- 최종적으로 number - 1 하는 이유 => 모든 옷을 입지 않는 경우는 없어야 하므로 -1
- 조합을 사용한다.
*/
