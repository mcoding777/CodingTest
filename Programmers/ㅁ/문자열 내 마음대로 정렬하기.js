/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
문자열 내 마음대로 정렬하기

[테스트 날짜]
22.05.04

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12915
*/

// 첫번째 풀이 -----------------------------------------------------------------------------------------------

function solution(strings, n) {
    return strings.sort((a, b) => {
        if (a[n] === b[n]) {
            // 인덱스 n의 문자가 같으면 사전순으로 정렬
            for (let i = 0; i < a.length; i++) {
                let number = a.charCodeAt(i) - b.charCodeAt(i);
                if (number !== 0) return number;
            }
        }
        return a.charCodeAt(n) - b.charCodeAt(n);
    });
}

// 두번째 풀이 -----------------------------------------------------------------------------------------------

function solution(strings, n) {
    return strings.sort((s1, s2) => (s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])));
}

// 세번째 풀이 -----------------------------------------------------------------------------------------------

function solution(strings, n) {
    return strings.sort((a, b) => {
        const chr1 = a.charAt(n);
        const chr2 = b.charAt(n);

        if (chr1 === chr2) {
            return (a > b) - (a < b);
        } else {
            return (chr1 > chr2) - (chr1 < chr2);
        }
    });
}

/*
★★★ 배운 점 ★★★
- String.localeCompare(비교 값)은 비교 값과 String의 유니코드 값을 비교하여, 비교 값이 크면 -1 작으면 1 같으면 0을 반환한다.
- String.localCompare() 참고 : https://opentutorials.org/course/50/91
- 단, 두번째 풀이는 속도가 매우 느리다.
- 세번째 풀이는 true - false = 1인 점을 이용한다.
*/
