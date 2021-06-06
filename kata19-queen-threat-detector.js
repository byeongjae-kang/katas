const generateBoard = function(whiteQueen, blackQueen) {
  const board = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ];
  const occupied = 1;
  
  board[whiteQueen[0]][whiteQueen[1]] = occupied;
  board[blackQueen[0]][blackQueen[1]] = occupied;

  // const test = board.join('\n')
  // console.log(test);
  return board.join('\n');
};

const queenThreat = function(input) {
  let threat = false;
  let queens = [];
  
  for (let y = 0; y < input.length; y++) {
    for (let x = 0; x < input[y].length; x++) {
      if (input[y][x] === 1) {
        queens.push(y, x);
      }
    }
  }

  if (queens[0] === queens[2] || queens[1] === queens[3]) {
    threat = true;
  } else if (Math.abs(queens[2] - queens[0]) === Math.abs(queens[3] - queens[1])) {
    threat = true;
  }
  
  return threat;
};


let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
whiteQueen = [0, 0];
blackQueen = [5, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));