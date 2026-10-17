"use strict";

document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll("#board > div");
    const status = document.getElementById("status");
    const newGameButton = document.querySelector(".btn");

    const originalMessage = status.textContent;

    const gameState = new Array(9).fill(null);

    const winningCombinations = [
        [0,1,2],[3,4,5],[6,7,8]
        [0,3,6],[1,4,7],[2,5,8]
        [0,4,8],[2,4,6]
    ];

    let CurrentPlayer = "X";
    let gameOver = "false";

    function checkWinner(){
        for (let i=0; i < winningCombinations.length; i++){
            const[a,b,c] = winningCombinations[i];
            if(gameState[a] !== null &&
                gameState[a] === gameState[b]&&
                gameState[a] === gameState[c]){
                    return gameState[a];
                }
        }
        return null;
    }

    for (let i =0 ; i < squares.length; i++) {
        squares[i].classList.add("square");

        squares[i].addEventListener("click", function() {
            if (gameState[i] !== null) {
                return;
            }
        
            squares[i].textContent = currentPlayer;
            squares[i].classList.add(currentPlayer);
            gameState[i] = currentPlayer;


            const winner = checkWinner();
            if (winner !== null) {
                status.textContent = `Player ${winner} wins!`;
                status.classList.add("winner");
                gameOver = true;
                return;
            }
            
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        });

        squares[i].addEventListener("mouseover", function(){
            squares[i].classList.add("hover");
        });

        squares[i].addEventListener("mouseout", function(){
            squares[i].classList.remove("hover");
        });
    }

    newGameButton.addEventListener("click", function() {
        for (let i = 0; i < squares.length; i++) {
            squares[i].textContent = "";
            squares[i].classList.remove("X", "O");
            gameState[i] = null;
        }

        status.textContent = originalMessage;
        status.classList.remove("winner");
        
        currentPlayer = "X";
        gameOver = false;
    });
});

