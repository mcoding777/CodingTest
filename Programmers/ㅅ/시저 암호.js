/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
2022 KAKAO BLIND RECRUITMENT 신고 결과 받기

[테스트 날짜]
22.05.26

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12926
*/

// 첫번째 풀이 -----------------------------------------------------------------------------------------------

function solution(s, n) {
  let re = /[a-zA-Z]/g;
  let changeRe = (word) => {
    let uni = word.charCodeAt(0);
    let changeUni = uni + n;
    if ((uni <= 90 && changeUni > 90) || changeUni > 122) {
      changeUni = changeUni - 26;
    }
    return String.fromCharCode(changeUni);
  };

  return s.replace(re, changeRe);
}
