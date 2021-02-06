function starOutGrid(grid) {
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
          if (grid[i + 1] != undefined && grid[i + 1][j] === '*' 
            || grid[i + 2] != undefined && grid[i + 2][j] === '*') {
            grid[i][j] = '*'
          }
          if (grid[j + 2] != undefined && grid[i][j + 2] === '*') {
            grid[i][j] = '*'
          }
          if (grid[j + 1] != undefined && grid[i][j + 1] === '*') {
            grid[i][j] = '*'
          }
          if (grid[j - 1] != undefined && grid[i][j - 1] === '*' && grid[i][j - 2] == '*') {
            grid[i][j] = '*'
          }
          if (grid[i - 2] != undefined && grid[i - 2][j] === '*') {
            grid[i][j] = '*'
          }
          if (grid[i][j] === '*' && grid[i]) {

          }
      }
    }
    return grid
  }
