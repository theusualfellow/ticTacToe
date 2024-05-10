 let board = [
    ['-','-','-'],
    ['-','-','-'],
    ['-','-','-']
]

function player(name){
    const rowPrompt = ()=>{
        let row = prompt(`${name} choose your row`)
        return row
    }
    const colPrompt= ()=>{
        let column = prompt(`${name} choose your column`)
        return column
    }
    const playerMove = function(row,column){
        if(board[column-1][row-1]  == '-'){
            board[column-1][row-1]  = "X"
            return board
        }
        return "error"
    }         
    return{rowPrompt, colPrompt, playerMove}
    }

const player1 = player("sandeep")
const row1 = player1.rowPrompt()
const col1 = player1.colPrompt()
player1.playerMove(row1, col1)
const player2= player("harman")
const row2 = player2.rowPrompt()
const col2 = player2.colPrompt()
player2.playerMove(row2,col2)
  



