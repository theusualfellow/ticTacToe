const container = document.querySelector(".container");
const cells = document.querySelectorAll(".cells");
const winner = document.querySelector(".winner")

const playGame = (function() {
    let currentPlayer = "sandeep";

    function switchPlayer() {
        currentPlayer = currentPlayer === "sandeep" ? "harman" : "sandeep";
    }

    function buttonClick(callback) {
        container.addEventListener('click', function(event) {
            if (event.target.classList.contains('cells')) {
                var clickedIndex = Array.from(event.target.parentNode.children).indexOf(event.target);
                const usedButtons = []
                usedButtons.push(clickedIndex)
                console.log(usedButtons)
                
                console.log("Element " + (clickedIndex + 1) + " clicked");
                callback(clickedIndex);
                if(usedButtons.includes(clickedIndex)){
                    return
                }
            }
        });
    }
    const arr1 = []
    const arr2 = []

    function player(name) {
        const playerName = name;
        const playerMove = function(index) {
            console.log(playerName);
            cells[index].style.backgroundColor = playerName === "sandeep" ? "blue" : "green";
            playerName === 'sandeep' ? arr1.push(index) : arr2.push(index)
            console.log(arr1)
            console.log(arr2)
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
                return `sandeep`;
            }

            //check if they're available in arr2
            if(combination.every(index =>arr2.includes(index))){
                return `harman won`
            }
            //check for tie
            if(arr1.length==5 && arr2.length==4 &&combination.every(index => arr1.includes(index))==false){
                return `it's a tie`
            }
        }
        return `no winner`

    }

    return function() {
        buttonClick(function(index) {
            const currentPlayerMove = player(currentPlayer);
            currentPlayerMove(index);
            switchPlayer();
            if(checkWinner(arr1, arr2)=='sandeep'){
                winner.innerText = "sandeep won"
            }
        });
    };
})();

playGame();