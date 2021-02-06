function starOutGrid(grid) {
    const starIdx = {}
	const firstPass = grid.map((row) => {
    const i = row.findIndex((el) => el === '*')
    if (i !== -1 && !starIdx[i]) {
      starIdx[i] = '*';
      return row.map((el) => (el = '*'));
    }
    return row;
  })
  return firstPass.map((row) => {
    return row.map((el, i) => {
      if (starIdx[i] === '*') {
        return '*';
      }
      return el;
    })
  })
}