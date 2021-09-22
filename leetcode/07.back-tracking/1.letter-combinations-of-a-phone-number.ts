// 17: https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/

const letterMap = [
  '', // 0
  '', // 1
  'abc', // 2
  'def', // 3
  'ghi', // 4
  'jkl', // 5
  'mno', // 6
  'pqrs', // 7
  'tuv', // 8
  'wxyz', // 9
];

function letterCombinations(digits: string): string[] {
  const res: string[] = [];
  
  if (digits === '') return res;

  findCombination(digits, 0, '', res);

  return res;
}

function findCombination(
  digits: string,
  index: number,
  s: string,
  res: string[]
) {
  if (index === digits.length) {
    res.push(s);
    return;
  }

  let c = digits[index];

  const letters = letterMap[parseInt(c)];

  for (let i = 0; i < letters.length; i++) {
    findCombination(digits, index + 1, s + letters[i], res);
  }
}
