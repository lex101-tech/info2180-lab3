"use strict";

document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll("#board > div");

    const gameState = new Array(9).fill(null);

    for (let i =0 ; i < squares.length; i++) {
        squares[i].classList.add("square");

        squares[i].addEventListener("click", function() {
            if (gameState[i] !== null) {
                return;
            }
        
            squares[i].textContent = currentPlayer;
            squares[i].classList.add(currentPlayer);
            gameState[i] = currentPlayer;

            currentPlayer = currentPlayer === "X" ? "O" : "X";
        });
    }
});

