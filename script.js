 let board = [
    ['-','-','-'],
    ['-','-','-'],
    ['-','-','-']
]

function player(name1){

    const playerName = name1

    const rowPrompt = ()=>{
        let row
        do{row = prompt(`${name1} choose your row`)}
        while (row<0 || row>3)
        console.log(row)
        return row
    }
    const colPrompt= ()=>{
        let column
        do{column = prompt(`${name1} choose your column`)}
        while (column<0 || column>3)
        return column
    }
    const playerMove = function(row,column){
        console.log(row)
        if(board[row-1][column-1]  == '-'){
            if(playerName=="sandeep"){
                board[row-1][column-1]  = "X"
            }
            else{
                board[row-1][column-1]  = "O"

            }
            return board
        }
        return "error"
    }         
    return{rowPrompt, colPrompt, playerMove}
    }

function playGame(){
    do{
        const player1 = player("sandeep")
        const row1 = player1.rowPrompt()
        const col1 = player1.colPrompt()
        console.log(player1.playerMove(row1, col1))
        const player2= player("harman")
        const row2 = player2.rowPrompt()
        const col2 = player2.colPrompt()
        console.log(player2.playerMove(row2,col2))
    }
    while(checkWinner()==false)

    return `winner is player 1`
    
    
}
function checkWinner(){
    if(
        board[0][0]=='X' && board[0][1]=='X' && board[0][2] == 'X'
    ){
        return true
    }

    return false
}


console.log(playGame())
