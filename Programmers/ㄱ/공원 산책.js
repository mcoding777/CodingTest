/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
공원 산책

[테스트 날짜]
23.04.24

[링크]
https://school.programmers.co.kr/learn/courses/30/lessons/172928?language=javascript
*/

// 첫번째 풀이 -----------------------------------------------------------------------------------------------

function solution(park, routes) {
  const direction = { E: [0, 1], W: [0, -1], S: [1, 0], N: [-1, 0] };
  let [x, y] = [0, 0]; // 로봇의 위치

  // 최초 로봇의 위치 등록
  for (let i = 0; i < park.length; i++) {
    if (park[i].includes('S')) {
      [x, y] = [i, park[i].indexOf('S')];
      break;
    }
  }

  routes.forEach((route) => {
    const [r, n] = route.split(' '); // r: 방향, n: 거리
    let [nx, ny] = [x, y];
    let count = 0;
    while (count < n) {
      [nx, ny] = [nx + direction[r][0], ny + direction[r][1]];
       // 공원을 벗어나거나 장애물이 있으면 패스
      if (!park[nx] || !park[nx][ny] || park[nx][ny] === 'X') break;
      count++;
    }
    if (count == n) [x, y] = [nx, ny];
  });

  return [x, y];
}

/*
★★★ 배운 점 ★★★
- 나는 방향별 계산을 switch case문으로 일일이 적용했는데, 객체로 만들어두니 훨씬 좋다.
- 어차피 자바스크립트는 Array 인덱스 범위 참조 에러가 발생하지 않으니, !park[nx]와 같이 참조하면 쉽고 빠르게 예외처리를 할 수 있다.
*/
