const moves = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]];

function knightMoves(start, end) {
  const queue = [[start]];
  const visited = new Set();
  visited.add(start.toString());

  while (queue.length > 0) {
    let path = queue.shift();
    let position = path[path.length - 1];

    if (position[0] === end[0] && position[1] === end[1]) {
      return `You made it in ${path.length - 1} moves!  Here's your path:\n${path.map(([x, y]) => `[${x}, ${y}]`).join('\n')}`;
    }

    let nextMoves = getPossibleMoves(position);

    for (const move of nextMoves) {
      const key = move.toString();

      if (!visited.has(key)) {
        queue.push([...path, move]);
        visited.add(key);
      }
    }
  }

  return "No path found.";
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

  return `Possible moves from ${position}: ${possibleMoves.map(([x, y]) => `[${x}, ${y}]`).join(', ')}`;
}

// Example usage of the knightMoves function:
console.log(knightMoves([0, 0], [7, 7]));
console.log(knightMoves([0, 0], [1, 2]));

// Example usage of the getPossibleMoves function:
console.log(getPossibleMoves([0, 0]));
console.log(getPossibleMoves([4, 4]));

