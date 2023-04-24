/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
달리기 경주

[테스트 날짜]
23.04.24

[링크]
https://school.programmers.co.kr/learn/courses/30/lessons/178871
*/

// 첫번째 풀이 -----------------------------------------------------------------------------------------------

function solution(players, callings) {
    const nameByRank = new Map()
    const rankByName = new Map()
    
    players.forEach((item, index) => {
        nameByRank.set(index, item)
        rankByName.set(item, index)
    })
    
    callings.forEach((item) => {
        const currentRank = rankByName.get(item) // calling된 사람의 현재 등수
        const catchMan = nameByRank.get(currentRank-1) // calling된 사람이 따라잡은 사람
        rankByName.set(item, currentRank-1)
        rankByName.set(catchMan, currentRank)
        nameByRank.set(currentRank, catchMan)
        nameByRank.set(currentRank-1, item)
    })
    
    var answer = [];
    nameByRank.forEach((value) => answer.push(value))
    return answer;
}