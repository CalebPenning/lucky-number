const getCoords = (grid) => {
    for (let g in grid) {
        for (let i in grid[g]) {
            if (grid[g][i] == '*') {
                let outIdx = g;
                let inIdx = i;
                return [outIdx, inIdx]
            }
        }
    }
}

const checkForStars = (grid) => {
    for (let g in grid) {
        for (let i in grid[g]) {
            if (grid[g][i] == '*') {
                return true;
            }
        }
    }
}
function starOutGrid(grid) {
    // Check first to see if there are no stars
    // Return grid unchanged if not
    // if (grid.every((spot) => spot != '*')) {
    //     return grid;
    // }
    let coords = getCoords(grid);
    let x = parseFloat(coords[0])
    let y = parseFloat(coords[1])
    console.log(x, y)
    if (checkForStars(grid)) {
        if (x == 0 && y == 0) {
            if (y == 0) {
                grid[x][y + 1] = '*';
                grid[x][y + 2] = '*';
                grid[x + 1][y] = '*';
                grid[x + 2][y] = '*';
                return grid;
            }
            else if (y == 1) {
                grid[x][y - 1] = '*';
                grid[x][y + 1] = '*';
                grid[x + 1][y] = '*';
                grid[x + 2][y] = '*';
                return grid;
            }
            else {
                grid[x][y - 1] = '*';
                grid[x][y - 2] = '*';
                grid[x + 1][y] = '*';
                grid[x + 2][y] = '*';
                return grid;
            }
        }
        else if (x == 1) {
            if (y == 0) {
                grid[x][y + 1] = '*';
                grid[x][y + 2] = '*';
                grid[x - 1][y] = '*';
                grid[x + 1][y] = '*';
                return grid;
            }
            else if (y == 1) {
                grid[x][y - 1] = '*';
                grid[x][y + 1] = '*';
                grid[x - 1][y] = '*';
                grid[x + 1][y] = '*';
                return grid;
            }
            else {
                grid[x][y - 1] = '*';
                grid[x][y - 2] = '*';
                grid[x - 1][y] = '*';
                grid[x + 1][y] = '*';
                return grid;
            }
        }
        else {
            if (y == 0) {
                grid[x][y + 1] = '*';
                grid[x][y + 2] = '*';
                grid[x - 1][y] = '*';
                grid[x - 2][y] = '*';
                return grid;
            }
            else if (y == 1) {
                grid[x][y - 1] = '*';
                grid[x][y + 1] = '*';
                grid[x - 1][y] = '*';
                grid[x - 2][y] = '*';
                return grid;
            }
            else {
                grid[x][y - 1] = '*';
                grid[x][y - 2] = '*';
                grid[x - 1][y] = '*';
                grid[x - 2][y] = '*';
                return grid;
            }
        }
    }
    else if (!checkForStars(grid)) {
        return grid
    }
}

