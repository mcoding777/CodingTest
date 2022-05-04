/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
문자열 내 p와 y의 갯수

[테스트 날짜]
22.05.04

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12916
*/

// 첫번째 풀이 -----------------------------------------------------------------------------------------------

function solution(s) {
  var answer = s.split("").reduce(
    (prev, curr) => {
      if (curr === "p" || curr === "P") prev[0] += 1;
      if (curr === "y" || curr === "Y") prev[1] += 1;
      return prev;
    },
    [0, 0]
  );

  return answer[0] === answer[1] ? true : false;
}

// 두번째 풀이 -----------------------------------------------------------------------------------------------

function solution(s) {
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}

// 세번째 풀이 -----------------------------------------------------------------------------------------------

function solution(s) {
  return (s.match(/p/gi) || []).length === (s.match(/y/gi) || []).length;
}

/*
★★★ 배운 점 ★★★
- String.toUpperCase()나 String.toLowerCase()를 사용할 생각은 했지만, 'p'와 'y'를 기준으로 split 해서 길이를 비교할 생각은 못했다. 기발하다...
- String.match(정규식)는 정규식에 맞는 문자열을 찾지 못하면 null을 반환한다.
*/
