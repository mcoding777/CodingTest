/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
2016년

[테스트 날짜]
22.04.26

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12901
*/

// 첫번째 풀이 -----------------------------------------------------------------------------------------------

function solution(a, b) {
  let day = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  let month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // 월일을 일로 바꾼 뒤 7로 나눈 나머지
  let month_to_day =
    month.slice(0, a - 1).reduce((prev, curr) => prev + curr, b) % 7;

  return month_to_day ? day[month_to_day - 1] : day[day.length - 1];
}

// 두번째 풀이 -----------------------------------------------------------------------------------------------

function solution(a, b) {
  let weekday = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  let month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  for (i = 0; i < a - 1; i++) {
    b += month[i];
  }

  return b % 7 ? weekday[(b % 7) - 1] : weekday[weekday.length - 1];
}

/*
★★★ 배운 점 ★★★
- Date 생성자를 사용하는 풀이도 있는데 매우 느리다.
*/
