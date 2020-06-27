var board = [
    ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],

    ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],

    ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],

    ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],

    ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],

    ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],

    ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],

    ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"]];




let queen = {
    position: { x: 4, y: 4 }  // this is default current position of queen that is 4,4 ==> e4
};

console.log("Queen Position " + board[queen.position.x][queen.position.y]);  // printing current position
let direction = 'ne';  // input for Direction
let steps = 2;  // input for step


changedirection(direction, steps);      // calling method for movements

function changedirection(direction, steps) {
    switch (direction) {
        case 'n': {                   // if movement is north then this case will works
            let temp = queen.position.x - steps;
            if (temp < 8 && temp < 0) {
                console.log("Boundery Outside")
            }
            else {
                queen.position.x = temp;
                console.log("Current position is " + board[queen.position.x][queen.position.y])
            }
            break;
        }
        case 's': {                   // if movement is South then this case will works
            let temp = queen.position.x + steps;
            if (temp < 8 && temp < 0) {
                console.log("Boundery Outside")
            }
            else {
                queen.position.x = temp;
                console.log("Current position is " + board[queen.position.x][queen.position.y])
            }
            break;
        }
        case 'e': {                   // if movement is South then this case will works
            let temp = queen.position.y + steps;
            if (temp < 8 && temp < 0) {
                console.log("Boundery Outside")
            }
            else {
                queen.position.y = temp;
                console.log("Current position is " + board[queen.position.x][queen.position.y])
            }
            break;
        }
        case 'w': {                   // if movement is South then this case will works
            let temp = queen.position.y - steps;
            if (temp < 8 && temp < 0) {
                console.log("Boundery Outside")
            }
            else {
                queen.position.y = temp;
                console.log("Current position is " + board[queen.position.x][queen.position.y])
            }
            break;
        }

        case 'nw': {                   // if movement is north then this case will works
            let temp = queen.position.x - steps;
            let temp1 = queen.position.y - steps;
            if (temp < 8 && temp < 0) {
                console.log("Boundery Outside")
            }
            else {
                queen.position.x = temp;
                queen.position.y = temp1;

                console.log("Current position is " + board[queen.position.x][queen.position.y])
            }
            break;
        }
        case 'ne': {                   // if movement is north then this case will works
            let temp = queen.position.x - steps;
            let temp1 = queen.position.y + steps;
            if (temp < 8 && temp < 0) {
                console.log("Boundery Outside")
            }
            else {
                queen.position.x = temp;
                queen.position.y = temp1;

                console.log("Current position is " + board[queen.position.x][queen.position.y])
            }
            break;
        }
        case 'sw': {                   // if movement is north then this case will works
            let temp = queen.position.x + steps;
            let temp1 = queen.position.y - steps;
            if (temp < 8 && temp < 0) {
                console.log("Boundery Outside")
            }
            else {
                queen.position.x = temp;
                queen.position.y = temp1;

                console.log("Current position is " + board[queen.position.x][queen.position.y])
            }
            break;
        }
        case 'se': {                   // if movement is north then this case will works
            let temp = queen.position.x + steps;
            let temp1 = queen.position.y + steps;
            if (temp < 8 && temp < 0) {
                console.log("Boundery Outside")
            }
            else {
                queen.position.x = temp;
                queen.position.y = temp1;

                console.log("Current position is " + board[queen.position.x][queen.position.y])
            }
            break;
        }
    }

}


