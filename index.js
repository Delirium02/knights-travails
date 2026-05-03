const moves = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]];

function knightMoves(start, end) {

}

function getPossibleMoves(position) {
  if (!position) return;

  const possibleMoves = [];

  for (const move of moves) {
    const newPosition = [position[0] + move[0], position[1] + move[1]];

    if (newPosition[0] >= 0 && newPosition[0] <= 7 && newPosition[1] >= 0 && newPosition[1] <= 7) {
      possibleMoves.push(newPosition);
    }
  }

  return possibleMoves;
}

