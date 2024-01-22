const currentPlayerText = document.querySelector('.player');
const boxes = document.querySelectorAll('.box');
const newGameButton = document.querySelector('.btn');

let currentPlayer;
let gameGrid = [];

const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function init() {
    currentPlayer = 'X';
    gameGrid = ["", "", "", "", "", "", "", "", ""];
    boxes.forEach((box, index) => {
        box.innerText = '';
        boxes[index].style.pointerEvents = 'all';
        boxes[index].classList.remove('win');
    });

    newGameButton.classList.remove('active')
    currentPlayerText.innerText = `Current Player- ${currentPlayer}`;
}

init();

function swapCurrentPlayer() {
    currentPlayer === "X" ? currentPlayer = "O" : currentPlayer = "X";
    currentPlayerText.innerText = `Current Player- ${currentPlayer}`;
}

function checkGameOver() {
    let winner = "";
    newGameButton.classList.add('active');
    // console.log(gameGrid)

    wins.forEach((position) => {
        if((gameGrid[position[0]] != "" || gameGrid[position[1]] != "" || gameGrid[position[2]] != "") && (gameGrid[position[0]] === gameGrid[position[1]]) && (gameGrid[position[1]] === gameGrid[position[2]])){

            if(gameGrid[position[0]] === 'X'){
                winner = 'X';
            } else{
                winner = 'O'
            }

            boxes.forEach((box) => {
                box.style.pointerEvents = "none";
            })

            boxes[position[0]].classList.add('win');
            boxes[position[1]].classList.add('win');
            boxes[position[2]].classList.add('win');
        }
    })

    if(winner != ""){
        currentPlayerText.innerText = `Winner is ${winner}`;   
    }

    let fillCount = 0;
    gameGrid.forEach((grid) => {
        if(grid != ""){
            fillCount++;
        }
    })

    if(fillCount === 9){
        currentPlayerText.innerText = `Game Tied!!!`;
    }

}

function clickHandler(index) {
    if(gameGrid[index] === ""){
        boxes[index].innerText = `${currentPlayer}`;
        gameGrid[index] = `${currentPlayer}`;
        boxes[index].style.pointerEvents = 'none';

        // update currentPlayer 
        swapCurrentPlayer();

        // check if someone wins or not 
        checkGameOver();
    }
}

boxes.forEach((box, index) => {
    box.addEventListener('click', (e) => {
        clickHandler(index);
    })
})

newGameButton.addEventListener('click', init)