 let board = [
    ['-','-','-'],
    ['-','-','-'],
    ['-','-','-']
]

function player(name1){

    const playerName = name1

    const rowPrompt = ()=>{
        let row = prompt(`${name1} choose your row`)
        return row
    }
    const colPrompt= ()=>{
        let column = prompt(`${name1} choose your column`)
        return column
    }
    const playerMove = function(row,column){
        console.log(row)
        if(board[column-1][row-1]  == '-'){
            if(playerName=="sandeep"){
                board[column-1][row-1]  = "X"
            }
            else{
                board[column-1][row-1]  = "O"

            }
            return board
        }
        return "error"
    }         
    return{rowPrompt, colPrompt, playerMove}
    }

const player1 = player("sandeep")
const row1 = player1.rowPrompt()
const col1 = player1.colPrompt()
console.log(player1.playerMove(row1, col1))
const player2= player("harman")
const row2 = player2.rowPrompt()
const col2 = player2.colPrompt()
console.log(player2.playerMove(row2,col2))
  



