/*
[플랫폼]
프로그래머스

[난이도]
레벨 2

[문제]
가장 큰 수

[테스트 날짜]
22.04.30

[링크]
https://programmers.co.kr/learn/courses/30/lessons/42746
*/

// 첫번째 풀이 (실패 : 53.3점) -----------------------------------------------------------------------------------------------

function solution(numbers) {
  if (numbers.length === 1) return numbers[0].toString();

  let words = numbers.map((item, index) => {
    let number = item.toString();
    if (number.length !== 4)
      number = number.padEnd(4, number[number.length - 1]); // 모든 숫자를 4자리로 맞추기
    return { index, number };
  });

  words.sort((a, b) => b.number - a.number);

  return words.map((item) => numbers[item.index]).join("");
}

// 두번째 풀이 (첫번째 풀이 보완) -----------------------------------------------------------------------------------------------

function solution(numbers) {
  if (numbers.length === 1) return numbers[0].toString();

  let words = numbers.map((item, index) => {
    let number = item.toString();
    if (number.length !== 4) number = number.repeat(4).slice(0, 4); // 모든 숫자를 4자리로 맞추기
    return { index, number };
  });

  words.sort((a, b) => b.number - a.number);

  let answer = words.map((item) => numbers[item.index]).join("");

  return answer[0] === "0" ? "0" : answer;
}

// 세번째 풀이 (첫번째 풀이 보완) -----------------------------------------------------------------------------------------------

function solution(numbers) {
  var answer = numbers
    .map((item) => item + "")
    .sort((a, b) => (b + a) * 1 - (a + b) * 1)
    .join("");

  return answer[0] === "0" ? "0" : answer;
}

/*
★★★ 배운 점 ★★★
- 나는 숫자의 끝자리를 4자리가 될 때까지 반복했는데 해당 숫자 전체를 반복해야 한다.
- sort의 특성을 이용하면 쉽게 풀 수 있다.
*/
