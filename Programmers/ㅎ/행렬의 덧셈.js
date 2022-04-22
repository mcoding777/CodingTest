/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
행렬의 덧셈

[테스트 날짜]
22.04.22

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12950
*/

// 첫번째 풀이 -----------------------------------------------------------------------------------------------

function solution(arr1, arr2) {
  var answer = [];
  arr1.forEach((item, index) => {
    let element = [];
    item.forEach((item1, index1) => {
      element.push(item1 + arr2[index][index1]);
    });
    answer.push(element);
  });
  return answer;
}

// 두번째 풀이 -----------------------------------------------------------------------------------------------

function solution(arr1, arr2) {
  return arr1.map((item, index) =>
    item.map((item1, index1) => item1 + arr2[index][index1])
  );
}

// 세번째 풀이 -----------------------------------------------------------------------------------------------

function solution(arr1, arr2) {
  return arr1.reduce(
    (prev, curr, i) => [
      ...prev,
      curr.map((item, index) => item + arr2[i][index]),
    ],
    []
  );
}

/*
★★★ 배운 점 ★★★
- forEach보다 map이나 reduce가 더 빨랐다.
*/
