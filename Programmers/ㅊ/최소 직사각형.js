/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
최소 직사각형

[테스트 날짜]
22.04.27

[링크]
https://programmers.co.kr/learn/courses/30/lessons/86491
*/

// 첫번째 풀이 -----------------------------------------------------------------------------------------------

function solution(sizes) {
  const cards = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h]));

  let answer = [0, 0];

  cards.forEach(([w, h]) => {
    if (w > answer[0]) answer[0] = w;
    if (h > answer[1]) answer[1] = h;
  });
  return answer[0] * answer[1];
}

// 두번째 풀이 -----------------------------------------------------------------------------------------------

function solution(sizes) {
  for (let card of sizes) {
    if (card[0] < card[1]) [card[0], card[1]] = [card[1], card[0]];
  }

  const maxWidth = Math.max(...sizes.map((card) => card[0]));
  const maxHeight = Math.max(...sizes.map((card) => card[1]));

  return maxWidth * maxHeight;
}

// 세번째 풀이 -----------------------------------------------------------------------------------------------

function solution(sizes) {
  const [hor, ver] = sizes.reduce(
    ([h, v], [a, b]) => [
      Math.max(h, Math.max(a, b)),
      Math.max(v, Math.min(a, b)),
    ],
    [0, 0]
  );
  return hor * ver;
}
