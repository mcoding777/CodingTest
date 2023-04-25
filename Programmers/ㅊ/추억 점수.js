/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
추억 점수

[테스트 날짜]
23.04.25

[링크]
https://school.programmers.co.kr/learn/courses/30/lessons/176963
*/

// 첫번째 풀이 -----------------------------------------------------------------------------------------------

function solution(name, yearning, photo) {
  const score = new Map(name.map((item, index) => ([item, yearning[index]])))
                        
  var answer = photo.map((item) => {
      return item.reduce((prev, curr) => (score.get(curr) || 0) + prev, 0);
  })
  return answer;
}

/*
★★★ 배운 점 ★★★
- Map.prototype.get()에 대한 값이 없으면 undefined가 뜬다.
*/