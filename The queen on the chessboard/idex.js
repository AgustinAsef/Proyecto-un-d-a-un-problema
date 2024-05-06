/* The queen can be moved any number of unoccupied squares in a straight line vertically, horizontally, or diagonally, thus combining the moves of the rook and bishop. The queen captures by occupying the square on which an enemy piece sits. (wikipedia: https://en.wikipedia.org/wiki/Queen_(chess)).

Task:
Write a function availableMoves(position) which returns possibly moves of chess queen. Returned value should be an array with possible moves sorted alphabetically, exluded starting position.

For example when input position is A1 return value should be:

["A2", "A3", "A4", "A5", "A6", "A7", "A8", "B1", "B2", "C1", "C3", "D1", "D4", "E1", "E5", "F1", "F6", "G1", "G7", "H1", "H8"]

     A   B   C   D   E   F   G   H
   + - + - + - + - + - + - + - + - +
1  | Q | x | x | x | x | x | x | x |
   + - + - + - + - + - + - + - + - +
2  | x | x |   |   |   |   |   |   |
   + - + - + - + - + - + - + - + - +
3  | x |   | x |   |   |   |   |   |
   + - + - + - + - + - + - + - + - +
4  | x |   |   | x |   |   |   |   |
   + - + - + - + - + - + - + - + - +
5  | x |   |   |   | x |   |   |   |
   + - + - + - + - + - + - + - + - +
6  | x |   |   |   |   | x |   |   |
   + - + - + - + - + - + - + - + - +
7  | x |   |   |   |   |   | x |   |
   + - + - + - + - + - + - + - + - +
8  | x |   |   |   |   |   |   | x |
   + - + - + - + - + - + - + - + - +
   
Q = queen
x = available move */

function availableMoves(position) {
  let x = ["A", "B", "C", "D", "E", "F", "G", "H"];
  let y = [1, 2, 3, 4, 5, 6, 7, 8];

  if (
    typeof position == "string" &&
    position.length < 3 &&
    position != null &&
    x.findIndex((e) => e == position.charAt(0)) != -1 &&
    y.findIndex((e) => e == position.charAt(1)) != -1
  ) {
    console.log(position);
    let posiblesP = [];
    let qXposition = position.charAt(0);
    let qXindex = x.findIndex((e) => e == qXposition);

    let qYposition = Math.floor(position.charAt(1));
    let qYindex = y.findIndex((e) => e == qYposition);

    for (let i = qXindex + 1; i < x.length; i++) {
      if (x[i] != undefined && qYposition != undefined) {
        posiblesP.push(`${x[i]}` + `${qYposition}`);
      }
    }

    for (let i = 0; i < qXindex; i++) {
      if (x[i] != undefined && qYposition != undefined) {
        posiblesP.push(`${x[i]}` + `${qYposition}`);
      }
    }

    for (let i = 0; i < qYindex; i++) {
      if (qXposition != undefined && y[i] != undefined) {
        posiblesP.push(`${qXposition}` + `${y[i]}`);
      }
    }

    for (let i = qYindex + 1; i < y.length; i++) {
      if (qXposition != undefined && y[i] != undefined) {
        posiblesP.push(`${qXposition}` + `${y[i]}`);
      }
    }

    for (let i = 1; i < y.length; i++) {
      if (x[qXindex + i] != undefined && y[qYindex - i] != undefined) {
        posiblesP.push(`${x[qXindex + i]}` + `${y[qYindex - i]}`);
      }
    }

    for (let i = 1; i < y.length; i++) {
      if (x[qXindex + i] != undefined && y[qYindex + i] != undefined) {
        posiblesP.push(`${x[qXindex + i]}` + `${y[qYindex + i]}`);
      }
    }

    for (let i = 1; i < x.length; i++) {
      if (x[qXindex - i] != undefined && y[qYindex - i] != undefined) {
        posiblesP.push(`${x[qXindex - i]}` + `${y[qYindex - i]}`);
      }
    }

    for (let i = 1; i < x.length; i++) {
      if (x[qXindex - i] != undefined && y[qYindex + i] != undefined) {
        posiblesP.push(`${x[qXindex - i]}` + `${y[qYindex + i]}`);
      }
    }

    posiblesP = posiblesP.sort();
    return posiblesP;
  } else {
    return [];
  }
}
