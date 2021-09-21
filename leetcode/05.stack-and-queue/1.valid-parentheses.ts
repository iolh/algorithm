// 20: https://leetcode-cn.com/problems/valid-parentheses/

function isValid(s: string): boolean {
  const stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i]);
    } else {
      if (stack.length === 0) return false;

      const c = stack.pop();
      let match: string;
      switch (c) {
        case '(':
          match = ')';
          break;
        case '[':
          match = ']';
          break;
        case '{':
          match = '}';
          break;
        default:
          throw new Error('invalid input');
      }

      if (match !== s[i]) {
        return false;
      }
    }
  }

  if (stack.length !== 0) return false;
  return true;
}
