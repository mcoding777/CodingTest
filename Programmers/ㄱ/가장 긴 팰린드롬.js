/*
[플랫폼]
프로그래머스

[난이도]
레벨 3

[문제]
가장 긴 팰린드롬

[테스트 날짜]
22.04.28

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12904
*/

// 첫번째 풀이 (실패 : 23.1점) -----------------------------------------------------------------------------------------------

function solution(s) {
  var answer = 0;

  for (let i = 0; i < s.length; i++) {
    let fix = s[i];
    let current = i; // fix의 인덱스

    let word = "";
    for (let j = s.length - 1; j >= i; j--) {
      // s의 뒤에서부터 fix와 같은 글자가 나오는지 확인 (i가 같아질때까지)
      word += s[j];

      if (word === fix) {
        // 같으면 answer를 바꾸고 fix에 다음 글자 추가
        fix += s[++current];
      } else {
        // 다르면 word와 fix 초기화
        word = "";
        fix = s[i];
      }

      if (j === i && word.length > answer) answer = word.length;
    }
  }

  return answer;
}

// 두번째 풀이 -----------------------------------------------------------------------------------------------

function solution(s) {
  let answer = 1;
  const SIZE = s.length;
  const cache = Array.from(Array(SIZE), () => new Array(SIZE).fill(false));

  for (let i = 0; i < SIZE; i++) {
    cache[i][i] = true;
  }

  for (let i = 0; i < SIZE - 1; i++) {
    if (s[i] === s[i + 1]) {
      cache[i][i + 1] = true;
    }
  }

  for (let i = 3; i <= SIZE; i++) {
    for (let j = 0; j <= SIZE - i; j++) {
      if (s[j] === s[j + i - 1] && cache[j + 1][j + i - 2] === true) {
        cache[j][j + i - 1] = true;
        answer = i;
      }
    }
  }

  return answer;
}

// 세번째 풀이 -----------------------------------------------------------------------------------------------

function solution(s) {
  var answer = 1;
  let pivot = (s.length - 1) / 2;
  const visited = {};
  const check = (pivot) => {
    let flag = true;
    let start = pivot - (pivot % 1);
    let end = pivot + (pivot % 1);
    visited[pivot] = true;
    let len = 0;
    if (start === end) {
      len = 1;
      start--;
      end++;
    }
    while (start >= 0 && end < s.length) {
      if (s[start] !== s[end]) {
        flag = false;
        break;
      }
      len += 2;
      start--;
      end++;
    }
    answer = Math.max(answer, len);
    if (answer < (pivot - 0.5) * 2 && !visited[pivot - 0.5]) {
      check(pivot - 0.5);
    }
    if (answer < (s.length - 1 - pivot + 0.5) * 2 && !visited[pivot + 0.5]) {
      check(pivot + 0.5);
    }
  };
  check(pivot);
  return answer;
}

/*
★★★ 배운 점 ★★★
*/
