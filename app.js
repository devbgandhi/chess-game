const gameBoard = document.querySelector("#gameboard");
const playerTurn = document.querySelector("#player");
const infoDisplay = document.querySelector("#info-display");


const width = 8;
//array of my game board
const startPieces = [
    //8 X 8
    rook, knight, bishop, queen, king, bishop, knight, rook,
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    '','','','','','','','',
    '','','','','','','','',
    '','','','','','','','',
    '','','','','','','','',
    PAWN,PAWN,PAWN,PAWN,PAWN,PAWN,PAWN,PAWN,
    ROOK, KNIGHT, BISHOP, QUEEN, KING, BISHOP, KNIGHT, ROOK
]; 

//function to create a board
function createBoard(){
    startPieces.forEach((startPiece, i) => {
        const square = document.createElement('div');
        square.classList.add('square');
        square.innerHTML = startPiece;
        square.firstChild?.setAttribute('draggable', true);
        square.setAttribute('square-id', i)
        const row = Math.floor((63 - i) / 8) + 1;
        if(row % 2 === 0){
            square.classList.add(i % 2 === 0 ? "beige" : "brown");
        } else {
            square.classList.add(i % 2 === 0 ? "brown" : "beige");
        }
        gameBoard.append(square);
    })
}
createBoard();
