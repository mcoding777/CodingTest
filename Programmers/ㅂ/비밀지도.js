/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
비밀 지도

[테스트 날짜]
22.04.16

[링크]
https://programmers.co.kr/learn/courses/30/lessons/17681
*/

// 첫번째 풀이 -----------------------------------------------------------------------------------------------

function solution(n, arr1, arr2) {
  if (n === 1) {
    // 한 변의 길이가 1이면 x는 0 또는 1
    let number = 1 - arr1[0] - arr2[0];
    return number === 1 ? [" "] : ["#"];
  }

  let arr12 = [];

  [...arr1, ...arr2].forEach((item, index) => {
    let arr = []; // 2로 나눈 나머지 넣기

    while (item > 1) {
      // item이 1보다 큰 동안은 계속 2로 나누기
      arr.push(item % 2);
      item = Math.floor(item / 2);
    }

    (item === 1 && arr.push(1)) || (item === 0 && arr.push(0));

    let arr_reverse = arr.reverse(); // 이진수니까 뒤집어서 넣기
    let arr_len = arr_reverse.length; // 길이가 n만큼 안나오면 0으로 채우기
    if (arr_len < n) {
      arr_reverse = Array(n - arr_len)
        .fill(0)
        .concat(arr_reverse);
    }

    arr12.push(arr_reverse);
  });

  let map = []; // 최종 지도

  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j < n; j++) {
      let number = 1 - arr12[i][j] - arr12[i + n][j]; // 1이면 공백, 나머지는 벽
      if (number === 1) {
        row = row.concat(" ");
      } else {
        row = row.concat("#");
      }
    }

    map.push(row);
  }

  return map;
}

// 두번째 풀이 -----------------------------------------------------------------------------------------------

function solution(n, arr1, arr2) {
  return arr1.map((item, index) => {
    return (item | arr2[index])
      .toString(2)
      .padStart(n, 0)
      .replace(/0/g, " ")
      .replace(/1/g, "#");
  });
}

// 세번째 풀이 -----------------------------------------------------------------------------------------------

function solution(n, arr1, arr2) {
  return arr1
    .map((item, index) => {
      return ("0".repeat(n) + (item | arr2[index]).toString(2)).slice(-n);
    })
    .map((item) => item.replace(/0/g, " ").replace(/1/g, "#"));
}

/*
  ★ 배운 점
  - 비트 연산자(&, ^, |)를 사용하면 이진수 계산이 가능하다
  - Number.toString(진수)는 Number를 진수로 바꿔준다.
  - padStart를 쓴 두번째 풀이보다 repeat, slice를 사용한 세번째 풀이가 더 빠르다.
  */
