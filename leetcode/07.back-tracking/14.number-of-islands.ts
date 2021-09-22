// 200: https://leetcode-cn.com/problems/number-of-islands/
{
  const d: number[][] = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  let m: number, n: number, visited: boolean[][];

  function numIslands(grid: string[][]): number {
    m = grid.length;
    if (m === 0) return 0;
    n = grid[0].length;
    visited = new Array(m).fill(0).map((_) => new Array(n).fill(false));

    let res = 0;
    for (let i = 0; i < m; i++) {
      for (let j = 0; i < n; j++) {
        if (grid[i][j] === '1' && !visited[i][j]) {
          res++;
          dfs(grid, i, j);
        }
      }
    }

    return res;
  }

  function dfs(grid: string[][], x: number, y: number): void {
    visited[x][y] = true;
    for (let i = 0; i < 4; i++) {
      const newx = x + d[i][0];
      const newy = y + d[i][1];
      debugger;
      if (
        inArea(newx, newy) &&
        !visited[newx][newy] &&
        grid[newx][newy] === '1'
      ) {
        dfs(grid, newx, newy);
      }
    }
    return;
  }

  function inArea(x: number, y: number): boolean {
    return x >= 0 && x < m && y >= 0 && y < n;
  }

  const xxx = numIslands([
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
  ]);
}
