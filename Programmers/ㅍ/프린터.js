/*
[플랫폼]
프로그래머스

[난이도]
레벨 2

[문제]
프린터

[테스트 날짜]
22.04.23

[링크]
https://programmers.co.kr/learn/courses/30/lessons/42587
*/

// 첫번째 풀이 -----------------------------------------------------------------------------------------------

function solution(priorities, location) {
  var answer = 0;
  const new_priorities = priorities.map((item, index) => [item, index]);
  const printed = [];

  for (let i = 0; i < new_priorities.length; ) {
    const temp = new_priorities.shift();
    if (new_priorities.some((item) => temp[0] < item[0]))
      new_priorities.push(temp);
    else {
      printed.push(temp);
      if (printed[answer][1] === location) break;
      else answer++;
    }
  }

  return answer + 1;
}

/*
★★★ 배운 점 ★★★
- for 문에서 증감식을 제외해도 무방하다.
- sort를 사용해서 priorities의 내림차순 배열을 만들고 인덱스로 비교하려고 했는데, sort는 원본 배열을 수정해버린다...
*/
