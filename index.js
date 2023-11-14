var playerSym = "o"
var p1Win = 0
var p2Win = 0
var pTie = 0
var turns = 0;
function onclickCells(cell)
{
    let x = document.getElementById("player-turn").innerHTML = `Player's Turn: ${playerSym}`
    if(playerSym == "x")
    {
        playerSym = "o"
    }
    else
    {
        playerSym = "x"
    }
    cell.innerHTML = playerSym
    cell.style.pointerEvents = "none"
    let cell1 = document.getElementById('1')
    let cell2 = document.getElementById('2')
    let cell3 = document.getElementById('3')
    let cell4 = document.getElementById('4')
    let cell5 = document.getElementById('5')
    let cell6 = document.getElementById('6')
    let cell7 = document.getElementById('7')
    let cell8 = document.getElementById('8')
    let cell9 = document.getElementById('9')

// horizontal winning combos
    if(cell1.innerHTML == 'x' || cell1.innerHTML == 'o' && (cell1.innerHTML == cell2.innerHTML && cell2.innerHTML == cell3.innerHTML))
    {
        if(cell1.innerHTML == 'x'){
            p1Win += 1 
            document.getElementById('score-player1').innerHTML = p1Win
        }
        else{
            p2Win += 1
            document.getElementById('score-player2').innerHTML = p2Win
        }
    }
    else if(cell4.innerHTML == 'x' || cell4.innerHTML == 'o' && (cell4.innerHTML == cell5.innerHTML && cell5.innerHTML == cell6.innerHTML))
    {
        if(cell4.innerHTML == 'x'){
            p1Win += 1 
            document.getElementById('score-player1').innerHTML = p1Win
        }
        else{
            p2Win += 1
            document.getElementById('score-player2').innerHTML = p2Win
        }
    }
    else if(cell7.innerHTML == 'x' || cell7.innerHTML == 'o' && (cell7.innerHTML == cell8.innerHTML && cell8.innerHTML == cell9.innerHTML))
    {
        if(cell7.innerHTML == 'x'){
            p1Win += 1 
            document.getElementById('score-player1').innerHTML = p1Win
        }
        else{
            p2Win += 1
            document.getElementById('score-player2').innerHTML = p2Win
        }
    }
    // vertical winning combos
    else if(cell1.innerHTML == 'x' || cell1.innerHTML == 'o' && (cell1.innerHTML == cell4.innerHTML && cell4.innerHTML == cell7.innerHTML))
    {
        if(cell1.innerHTML == 'x'){
            p1Win += 1 
            document.getElementById('score-player1').innerHTML = p1Win
        }
        else{
            p2Win += 1
            document.getElementById('score-player2').innerHTML = p2Win
        }
    }
    else if(cell2.innerHTML == 'x' || cell2.innerHTML == 'o' && (cell2.innerHTML == cell5.innerHTML && cell5.innerHTML == cell8.innerHTML))
    {
        if(cell2.innerHTML == 'x'){
            p1Win += 1 
            document.getElementById('score-player1').innerHTML = p1Win
        }
        else{
            p2Win += 1
            document.getElementById('score-player2').innerHTML = p2Win
        }
    }
     else if(cell3.innerHTML == 'x' || cell3.innerHTML == 'o' && (cell3.innerHTML == cell6.innerHTML && cell6.innerHTML == cell9.innerHTML))
    {
        if(cell3.innerHTML == 'x'){
            p1Win += 1 
            document.getElementById('score-player1').innerHTML = p1Win
        }
        else{
            p2Win += 1
            document.getElementById('score-player2').innerHTML = p2Win
        }
    }
    // Diagonal winning combos
    else if(cell1.innerHTML == 'x' || cell1.innerHTML == 'o' && (cell1.innerHTML == cell5.innerHTML && cell5.innerHTML == cell9.innerHTML))
    {
        if(cell1.innerHTML == 'x'){
            p1Win += 1 
            document.getElementById('score-player1').innerHTML = p1Win
        }
        else{
            p2Win += 1
            document.getElementById('score-player2').innerHTML = p2Win
        }
    }
    else if(cell3.innerHTML == 'x' || cell3.innerHTML == 'o' && (cell3.innerHTML == cell5.innerHTML && cell5.innerHTML == cell7.innerHTML))
    {
        if(cell3.innerHTML == 'x'){
            p1Win += 1 
            document.getElementById('score-player1').innerHTML = p1Win
        }
        else{
            p2Win += 1
            document.getElementById('score-player2').innerHTML = p2Win
        }
    }
}

    // ties? how to change
    turns += 1
    if(turns == 9){
        x = document.getElementById("player-turn").innerHTML = `No Turns left.`
    }


var winContainer = [winPosition.length]
function winCheck(){
    if (playerX() == [0,1,2]){
        alert("Player X wins!")
    }
}
// function check_win(){
//     var win = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]

// }


