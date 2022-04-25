/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
직사각형 별찍기

[테스트 날짜]
22.04.25

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12969?language=javascript
*/

// 첫번째 풀이 -----------------------------------------------------------------------------------------------

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const input = data.split(" ");
  const n = Number(input[0]),
    m = Number(input[1]);
  console.log("*".repeat(n).concat("\n").repeat(m).slice(0, -1));
});
