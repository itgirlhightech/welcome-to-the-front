document.addEventListener("DOMContentLoaded", () => {
    const state = {
        view: {
            squares: document.querySelectorAll(".square"),
            timeLeft: document.querySelector("#time-left"),
            score: document.querySelector("#score"),
            lives: document.querySelector("#lives"), // Referência ao elemento de vidas
        },
        values: {
            timerId: null,
            score: 0,
            timeLeft: 40,
            lives: 3, 
        },
    };

    function randomSquare() {
        if (state.view.squares.length === 0) return;

        // biome-ignore lint/complexity/noForEach: <explanation>
        state.view.squares.forEach((square) => {
            square.classList.remove("enemy");
        });

        const randomNumber = Math.floor(Math.random() * state.view.squares.length);
        const selectedSquare = state.view.squares[randomNumber];
        selectedSquare.classList.add("enemy");

    
        // biome-ignore lint/complexity/noForEach: <explanation>
                state.view.squares.forEach((square) => {
            square.onclick = () => {
                if (square.classList.contains("enemy")) {
                    state.values.score++;
                    state.view.score.textContent = state.values.score;
                    square.classList.remove("enemy"); 
                } else {
                    state.values.lives--; 
                    state.view.lives.textContent = `x${state.values.lives}`; 
                    if (state.values.lives <= 0) {
                        clearInterval(state.values.timerId);
                        // biome-ignore lint/style/useTemplate: <explanation>
                        alert("Game Over! Pontuação final: " + state.values.score);
                        
                    }
                }
            };
        });
    }

    function moveEnemy() {
        state.values.timerId = setInterval(randomSquare, 1000);
    }

    function startGame() {
        state.values.score = 0;
        state.values.timeLeft = 40;
        state.values.lives = 3; 
        state.view.score.textContent = state.values.score;
        state.view.timeLeft.textContent = state.values.timeLeft;
        state.view.lives.textContent = `x${state.values.lives}`; 

        moveEnemy();

        const countdown = setInterval(() => {
            state.values.timeLeft--;
            state.view.timeLeft.textContent = state.values.timeLeft;

            if (state.values.lives <= 0) {
                clearInterval(state.values.timerId);
                const endMessage = document.createElement("h2");
                endMessage.innerHTML = `Game Over! Pontuação final: <span class="score">${state.values.score}</span>`;
                endMessage.classList.add("end-message"); 
                document.body.appendChild(endMessage); 
            }
            
        }, 1000);
    }

    startGame();
});
