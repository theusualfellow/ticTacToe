const container = document.querySelector(".container");
const cells = document.querySelectorAll(".cells");

const playGame = (function() {
    let currentPlayer = "sandeep";

    function switchPlayer() {
        currentPlayer = currentPlayer === "sandeep" ? "harman" : "sandeep";
    }

    function buttonClick(callback) {
        container.addEventListener('click', function(event) {
            if (event.target.classList.contains('cells')) {
                var clickedIndex = Array.from(event.target.parentNode.children).indexOf(event.target);
                console.log("Element " + (clickedIndex + 1) + " clicked");
                callback(clickedIndex);
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

    
        // Check if any of the winning combinations are present in arr1
        for (const combination of winningCombinations) {
            if (combination.every(index => arr1.includes(index))) {
                return `sandeep won`;
            }
            if(combination.every(index =>arr2.includes(index))){
                return `harman won`
            }

        }
        return `no winner`

    }

    return function() {
        buttonClick(function(index) {
            const currentPlayerMove = player(currentPlayer);
            currentPlayerMove(index);
            switchPlayer();
            console.log(checkWinner(arr1, arr2))
        });
    };
})();

playGame();