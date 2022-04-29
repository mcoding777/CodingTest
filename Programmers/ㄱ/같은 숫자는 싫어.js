/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
같은 숫자는 싫어

[테스트 날짜]
22.04.29

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12906
*/

// 첫번째 풀이 -----------------------------------------------------------------------------------------------

function solution(arr) {
  var answer = [];
  let number = -1;
  arr.forEach((item) => {
    if (item !== number) {
      number = item;
      answer.push(item);
    }
  });

  return answer;
}

// 두번째 풀이 -----------------------------------------------------------------------------------------------

function solution(arr) {
  return arr.filter((item, index) => item !== arr[index + 1]);
}

/*
★★★ 배운 점 ★★★
- filter를 어떻게 사용해야하는지 제대로 생각이 안났는데 index를 활용하면 된다...!
- 속도는 첫번째 풀이가 더 빠르다.
- forEach문과 filter의 차이를 비교한 글 : https://velog.io/@leyuri/for-each-v퍼포먼스-함수-변수-이름-팁
*/
