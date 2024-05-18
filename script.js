const container = document.querySelector(".container");
const cells = document.querySelectorAll(".cells");
const winner = document.querySelector(".winner")
const restartGame = document.createElement("button")

const playGame = (function() {
    let gameOver= false
    let currentPlayer = "Player1";

    function switchPlayer() {
        currentPlayer = currentPlayer === "Player1" ? "Player2" : "Player1";
    }

    function buttonClick(callback) {
        
        container.addEventListener('click', function(event) {
            //button is not clicked if someone won the game
            if(gameOver) return

            //if not then do this:
            //make sure the div is not already clicked by checking datatset
            if (event.target.classList.contains('cells')&& !event.target.dataset.clicked) {
                var clickedIndex = Array.from(event.target.parentNode.children).indexOf(event.target);
                console.log("Element " + (clickedIndex + 1) + " clicked");

                callback(clickedIndex);   
                //once clicked turn dataset true for that particular div
                event.target.dataset.clicked = true;
            }
        });
    }
    //arrays to keep track of div clicked by players
    const arr1 = []
    const arr2 = []

    function player(name) {
        const playerName = name;
        const playerMove = function(index) {
            console.log(playerName);
            cells[index].style.backgroundColor = playerName === "Player1" ? "blue" : "green";
            playerName === 'Player1' ? arr1.push(index) : arr2.push(index)
        };
        return playerMove;
    }
    function checkWinner(arr1, arr2){
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
            
        ];
    
        for (const combination of winningCombinations) {
            
            // Check if any of the winning combinations are present in arr1

            if (combination.every(index => arr1.includes(index))) {
                return `Player1`;
            }

            //check if they're available in arr2
            if(combination.every(index =>arr2.includes(index))){
                return `Player2`
            }
            //check for tie
            if(arr1.length==5 && arr2.length==4 &&combination.every(index => arr1.includes(index))==false){
                return `tie`
            }
        }
        return

    }
    restartGame.innerText="restart game"

    restartGame.addEventListener("click", ()=> {
            // Reset game state
            gameOver = false;
            currentPlayer = "Player1";
            arr1.length = 0;
            arr2.length = 0;    
            // Reset the cells
            cells.forEach(cell => {
                cell.style.backgroundColor = "";
                delete cell.dataset.clicked;
            });
    
            // Clear the winner message
            winner.innerText = "";
            winner.removeChild(restartGame);
        }
    
)
    return function() {
        buttonClick(function(index) {
            const currentPlayerMove = player(currentPlayer);
            currentPlayerMove(index);
            switchPlayer();
            if(checkWinner(arr1, arr2)=='Player1'){
                winner.innerText = "Player1 won"
                winner.appendChild(restartGame)
                gameOver=true
            }
            if(checkWinner(arr1, arr2)=='Player2'){
                winner.innerText='Player2 won'
                winner.appendChild(restartGame)
                gameOver=true
            }
            if(checkWinner(arr1,arr2)=='tie'){
                winner.innerText=`it's a tie`
                winner.appendChild(restartGame)
                gameOver=true

            }
        });
    };
})();

playGame();