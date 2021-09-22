// 79: https://leetcode-cn.com/problems/word-search/

{
  const d: number[][] = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  let m: number, n: number, visited: boolean[][];

  function exist(board: string[][], word: string): boolean {
    m = board.length; // 3
    n = board[0].length; // 4
    visited = new Array(m).fill(0).map((_) => new Array(n).fill(false));

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (searchWord(board, word, 0, i, j)) {
          return true;
        }
      }
    }

    return false;
  }

  function searchWord(
    board: string[][],
    word: string,
    index: number,
    startx: number,
    starty: number
  ): boolean {
    if (index === word.length - 1) {
      return board[startx][starty] === word[index];
    }

    if (board[startx][starty] === word[index]) {
      visited[startx][starty] = true;

      for (let i = 0; i < 4; i++) {
        const newx = startx + d[i][0]; // 0 0
        const newy = starty + d[i][1]; // 0 1

        console.log('inArea', inArea(newx, newy));
        debugger;
        console.log('visited', visited);

        if (inArea(newx, newy) && !visited[newx][newy]) {
          if (searchWord(board, word, index + 1, newx, newy)) {
            return true;
          }
        }
      }

      visited[startx][starty] = false;
    }

    return false;
  }

  function inArea(x: number, y: number): boolean {
    return x >= 0 && x < m && y >= 0 && y < n;
  }

  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'ABCCED'
  );
}

// [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
// "ABCCED"
