/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
개인정보 수집 유효기간

[테스트 날짜]
23.09.26

[링크]
https://school.programmers.co.kr/learn/courses/30/lessons/150370
*/

// 첫번째 풀이 -----------------------------------------------------------------------------------------------

function solution(today, terms, privacies) {
  var answer = [];
  
  const [오늘연도, 오늘월, 오늘일] = today.split('.')
  const 오늘시간초 = (오늘연도 * 12 * 28) + (오늘월 * 28) + +오늘일
  
  const 약관별보관기한 = {}
  terms.forEach((item) => {
      const [약관, 보관기한] = item.split(' ')
      약관별보관기한[약관] = 보관기한
  })
  
  privacies.forEach((item, index) => {
          const 약관 = item.at(-1)
          let [연도, 월, 일] = item.slice(0,10).split(".")
          let 시간초 = (연도 * 12 * 28) + ((+월 + +약관별보관기한[약관]) * 28) + +일
          
          // 오늘시간초가 시간초보다 크면 기한 지남!
          if (오늘시간초 >= 시간초) answer.push(index+1)
      })
  
  return answer;
}

// 두번째 풀이 -----------------------------------------------------------------------------------------------

function solution(today, terms, privacies) {
  const map = new Map();
  terms.forEach((item) => {
      const [type, term] = item.split(' ');
      map.set(type, term * 28);
  })
  
  const [ty, tm, td] = today.split('.');
  const todayDays = +ty * 12 * 28 + +tm * 28 + +td;

  return privacies.reduce((acc, curr, i) => {
      const [date, type] = curr.split(' ');
      const [cy, cm, cd] = date.split('.');
      const currentDays = +cy * 12 * 28 + +cm * 28 + +cd;
      
      if (todayDays - currentDays >= map.get(type)) acc.push(i + 1);
      return acc;
  }, []);
}

/*
★★★ 배운 점 ★★★
*/
