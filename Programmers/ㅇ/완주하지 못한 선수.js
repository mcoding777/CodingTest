/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
완주하지 못한 선수

[테스트 날짜]
22.04.16

[링크]
https://programmers.co.kr/learn/courses/30/lessons/42576
*/

// 첫번째 풀이 -----------------------------------------------------------------------------------------------

function solution(participant, completion) {
  let list = {};
  participant.forEach((item) =>
    list[item] ? (list[item] += 1) : (list[item] = 1)
  );
  completion.forEach((item) => (list[item] -= 1));

  for (let key in list) {
    if (list[key]) return key;
  }
}

// 두번째 풀이 -----------------------------------------------------------------------------------------------

function solution(participant, completion) {
  return participant.find(
    (name) => !completion[name]--,
    completion.map((name) => (completion[name] = (completion[name] | 0) + 1))
  );
}

// 세번째 풀이 -----------------------------------------------------------------------------------------------

function solution(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i],
      b = completion[i];

    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);
  }

  for (let [k, v] of map) {
    if (v > 0) return k;
  }
}

/*
★★★ 배운 점 ★★★
- Array.find()의 두번째 파라미터는 this 값으로 사용할 수 있다.
- 세번째 풀이가 가독성이 가장 좋고 속도가 빠르다. 거의 2배 차이가 난다...!
*/
