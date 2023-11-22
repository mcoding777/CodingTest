/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
2021 카카오 채용연계형 인턴십

[테스트 날짜]
23.11.22

[링크]
https://school.programmers.co.kr/learn/courses/30/lessons/81301?language=javascript
*/

// 첫번째 풀이 -----------------------------------------------------------------------------------------------

function solution(s) {
  const table = {};
  const word = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  
  word.forEach((item, index) => table[item] = index);
  word.forEach((item) => {
      s = s.replaceAll(item, table[item])
  });
  
  return +s;
}

// 두번째 풀이 -----------------------------------------------------------------------------------------------

function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    numbers.forEach((item, index) => {
        let newArray = s.split(item)
        s = newArray.join(index)
    })

    return Number(s);
}

/*
★★★ 배운 점 ★★★
- 같은 word가 여러개 나올 수 있기 때문에 replace가 아닌 replaceAll을 사용해야한다.
- split과 join으로 코드가 훨씬 간결해지고 연산 속도가 2배 빨라졌다.
*/
