/*
[�÷���]
���α׷��ӽ�

[���̵�]
���� 1

[����]
2021 īī�� ä�뿬���� ���Ͻ�

[�׽�Ʈ ��¥]
23.11.22

[��ũ]
https://school.programmers.co.kr/learn/courses/30/lessons/81301?language=javascript
*/

// ù��° Ǯ�� -----------------------------------------------------------------------------------------------

function solution(s) {
  const table = {};
  const word = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  
  word.forEach((item, index) => table[item] = index);
  word.forEach((item) => {
      s = s.replaceAll(item, table[item])
  });
  
  return +s;
}

// �ι�° Ǯ�� -----------------------------------------------------------------------------------------------

function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    numbers.forEach((item, index) => {
        let newArray = s.split(item)
        s = newArray.join(index)
    })

    return Number(s);
}

/*
�ڡڡ� ��� �� �ڡڡ�
- ���� word�� ������ ���� �� �ֱ� ������ replace�� �ƴ� replaceAll�� ����ؾ��Ѵ�.
- split�� join���� �ڵ尡 �ξ� ���������� ���� �ӵ��� 2�� ��������.
*/
