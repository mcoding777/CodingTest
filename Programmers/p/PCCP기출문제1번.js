/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
PCCP기출문제 1번

[테스트 날짜]
23.11.26

[링크]
https://school.programmers.co.kr/learn/courses/30/lessons/250137?language=javascript
*/

// 첫번째 풀이 -----------------------------------------------------------------------------------------------

function solution(bandage, health, attacks ) {
  let [시전시간, 초당회복량, 추가회복량] = bandage;

  let score = Array.from({length: attacks.at(-1)[0]});
  attacks.forEach((item) => (score[item[0]] = -item[1]));

  let 연속공격성공횟수 = 0;
  let 연속공격성공시추가회복 = 초당회복량 + 추가회복량;

  let isDie = false;

  score.some((item, index) => {
      // 현재 점수 = 이전 점수 + 몬스터 공격(공격이 없으면 0)
      let current = index === 0 ? health : score[index-1] + (item || 0);

      // 죽음
      if (current <= 0) {
          isDie = true;
          return true;
      }

      // 몬스터 공격이 있을 때
      if (item < 0) {
          연속공격성공횟수 = 0;
          score[index] = current;
          return false;
      }

      // 몬스터 공격이 없을 때
      연속공격성공횟수 += 1;
      if (연속공격성공횟수 === 시전시간) {
          score[index] = Math.min(health, current + 연속공격성공시추가회복);
          연속공격성공횟수 = 0;
      } else {
          score[index] = Math.min(health, current + 초당회복량);
      }   
  });

  return isDie ? -1 : score.at(-1);
}

// 두번째 풀이 -----------------------------------------------------------------------------------------------

function solution(bandage, health, attacks) {
  var maxTime = attacks.at(-1)[0];
  var [시전시간, 초당회복량, 추가회복량] = bandage;
  
  var attackIndex = 0;
  var duration = 0;
  var healthIndex = health;
  
  for (var i = 0; i <= maxTime; i++) {
      
      // 지금 공격 타임이면
      if (i == attacks[attackIndex][0]) {
          duration = 0;
          health -= attacks[attackIndex++][1];
          if (health <= 0) return -1;
      }
      // 지금 회복 타임이면
      else {
          duration += 1;
          health = Math.min(duration == 시전시간 ? health + 초당회복량 + 추가회복량 : health + 초당회복량, healthIndex);
          if (duration == 시전시간) duration = 0;

      }
  }
  return health;
}

/*
★★★ 배운 점 ★★★
- 두번째 풀이처럼 attackIndex를 사용했다면 연산 속도가 2배는 빨라졌을 것이다.
- Array.some 대신에 for 문을 사용해서 죽음시 -1을 바로 리턴하는게 더 깔끔하다.
*/