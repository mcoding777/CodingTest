/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
K번째수

[테스트 날짜]
22.04.30

[링크]
https://programmers.co.kr/learn/courses/30/lessons/42748
*/

// 첫번째 풀이 -----------------------------------------------------------------------------------------------

function solution(array, commands) {
  var answer = [];

  for (let i = 0; i < commands.length; i++) {
    let sorting = array.slice(commands[i][0] - 1, commands[i][1]);
    sorting = insertion(sorting);
    answer.push(sorting[commands[i][2] - 1]);
  }

  return answer;
}

function insertion(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    let current = array[j];
    while (j > 0 && current < array[j - 1]) {
      array[j] = array[j - 1];
      array[j - 1] = current;
      j--;
    }
  }

  return array;
}

// 두번째 풀이 -----------------------------------------------------------------------------------------------

function solution(array, commands) {
  return commands.map((item) => {
    return array
      .slice(item[0] - 1, item[1])
      .sort((a, b) => a - b)
      .slice(item[2] - 1, item[2])[0];
  });
}

// 세번째 풀이 -----------------------------------------------------------------------------------------------

function solution(array, commands) {
  return commands.map((command) => {
    const [sPosition, ePosition, position] = command;
    const newArray = array
      .filter(
        (value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1
      )
      .sort((a, b) => a - b);

    return newArray[position - 1];
  });
}

/*
★★★ 배운 점 ★★★
- 연습 삼아 삽입정렬을 사용했지만, array의 길이가 100 이하라서 성능은 큰 차이가 없다.
*/
