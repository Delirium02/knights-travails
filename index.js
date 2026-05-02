const moves = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]];

function knightMoves(start, end) {
  if (start[0] < 0 || start[0] > 7 || start[1] < 0 || start[1] > 7) return 'Invalid start position';
  if (end[0] < 0 || end[0] > 7 || end[1] < 0 || end[1] > 7) return 'Invalid end position';

  const queue = [start, end];

  if (start[0] === end[0] && start[1] === end[1]) return `Already at position: ${queue}`;

  while (queue.length > 0) {

  }
}

