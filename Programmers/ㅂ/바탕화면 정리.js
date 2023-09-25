/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
바탕화면 정리

[테스트 날짜]
23.09.26

[링크]
https://school.programmers.co.kr/learn/courses/30/lessons/161990?language=javascript
*/

// 첫번째 풀이 -----------------------------------------------------------------------------------------------

function solution(wallpaper) {
  const xSet = new Set()
  const ySet = new Set()
  
  wallpaper.forEach((x, xIndex) => {  
      for (let yIndex=0; yIndex < x.length; yIndex++) {
          if (x[yIndex] === '#') {
              xSet.add(xIndex)
              ySet.add(yIndex)
          }
      }
  })
  
  return [Math.min(...xSet), Math.min(...ySet), Math.max(...xSet)+1, Math.max(...ySet)+1]
}

// 두번째 풀이 -----------------------------------------------------------------------------------------------

function solution(wallpaper) {
  let [minX, minY, maxX, maxY] = [wallpaper.length, wallpaper[0].length, 0, 0];
  wallpaper.forEach((paper, i) => {
    if (paper.includes('#')) {
      minX = Math.min(minX, i);
      minY = Math.min(minY, paper.indexOf('#'));
      maxX = Math.max(maxX, i);
      maxY = Math.max(maxY, paper.lastIndexOf('#'));
    }
  });
  return [minX, minY, maxX + 1, maxY + 1];
}

/*
★★★ 배운 점 ★★★
*/
