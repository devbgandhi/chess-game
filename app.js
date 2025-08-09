const gameBoard = document.querySelector("#gameboard");
const playerTurn = document.querySelector("#player");
const infoDisplay = document.querySelector("#info-display");

let playerGo = "white";

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

        //if first child exist draggable == true
        square.firstChild?.setAttribute('draggable', true);
        square.setAttribute('square-id', i)
        const row = Math.floor((63 - i) / 8) + 1;

        //add square colors 
        if(row % 2 === 0){
            square.classList.add(i % 2 === 0 ? "beige" : "brown");
        } else {
            square.classList.add(i % 2 === 0 ? "brown" : "beige");
        }
        gameBoard.append(square);
    })
}


//Board Created
createBoard();

//select all the squares 
const allSquares = document.querySelectorAll("#gameboard .square");

allSquares.forEach(square => {
    square.addEventListener('dragstart', dragStart);
    square.addEventListener('dragover', dragOver);
    square.addEventListener('drop', dragDrop);
});


function dragStart(e){
    startPostionId = e.target.parentNode.getAttribute('square-id');
    draggedElement = e.target;
}

function dragOver(e){
    e.preventDefault();

}

function dragDrop(e){
    
    //??
    e.stopPropagation();


    //if it contains piece then it would have piece class

    const correctGo = draggedElement.firstChild.classList.contains(playerGo);
    const taken = e.target.classList.contains('peice');
    const opponentGo = playerGo === 'white' ? 'black' : 'white';
    const takenByOpponent = e.target.firstChild?.classList.contains(opponentGo);
    
    //if the square has a peice
    e.target.parentNode.append(draggedElement);
    

    //if the square doesnt have a peice
    e.target.append(draggedElement)


    changePlayer();

}

let startPostionId = null;
let draggedElement = null;

function changePlayer(){
    if(playerGo === "white"){
        reverseIds();
        playerGo = "black";
        playerTurn.innerHTML = "black";
    } else {
        revertIds();
        playerGo = "white";
        playerTurn.innerHTML = "white";
    }
}


function reverseIds(){
    const allSquares = document.querySelectorAll(".square");
    allSquares.forEach((square, i) => square.setAttribute('square-id', (width*width -1) - i));
}

function revertIds(){
    const allSquares = document.querySelectorAll(".square");
    allSquares.forEach((square, i) => square.setAttribute('square-id', i));

}

