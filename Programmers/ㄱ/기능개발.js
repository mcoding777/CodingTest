/*
[플랫폼]
프로그래머스

[난이도]
레벨 2

[문제]
기능 개발

[테스트 날짜]
22.04.23

[링크]
https://programmers.co.kr/learn/courses/30/lessons/42586
*/

// 첫번째 풀이 -----------------------------------------------------------------------------------------------

function solution(progresses, speeds) {
  let answer = [];

  let days = progresses.map((item, index) =>
    Math.ceil((100 - item) / speeds[index])
  );

  let day = days[0];
  let day_map = new Map();

  days.forEach((item) => {
    if (item > day) {
      day = item;
    }
    day_map.set(day, day_map.get(day) + 1 || 1);
  });

  // map에서 value만 뽑기
  for (let [key, value] of day_map) {
    answer.push(value);
  }

  return answer;
}

// 두번째 풀이 -----------------------------------------------------------------------------------------------

function solution(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );
  let maxDay = days[0];

  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = days[i];
      answer[++j] = 1;
    }
  }

  return answer;
}

// 세번째 풀이 -----------------------------------------------------------------------------------------------

function solution(progresses, speeds) {
  const length = progresses.length;
  let answer = [],
    i = 0,
    t = 0,
    numberOfReleases = 0;

  while (i < length) {
    numberOfReleases = 1;
    t = Math.ceil((100 - progresses[i]) / speeds[i++]);

    while (progresses[i] + speeds[i] * t > 99) {
      numberOfReleases++;
      i++;
    }

    answer.push(numberOfReleases);
  }

  return answer;
}

/*
★★★ 배운 점 ★★★
- 자바스크립트에서 Array 인덱스 범위를 벗어나도 런타임 에러가 발생하지 않는다.
- 세번째 풀이가 가장 빠르다.
- 앞의 기능이 완료되는 시점에 뒤에서도 함께 완료되는 기능들을 한번에 찾으면 좀 더 빠르게 해결할 수 있다.
*/
