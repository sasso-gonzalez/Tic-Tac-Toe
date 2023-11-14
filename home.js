var playerSym = "o";
var pTie = 0;
var p1Win = 0;
var p2Win = 0;
var turns = 0;

function onclickCells(cell)
{
    turns += 1
    let cell1 = document.getElementById('1')
    let cell2 = document.getElementById('2')
    let cell3 = document.getElementById('3')
    let cell4 = document.getElementById('4')
    let cell5 = document.getElementById('5')
    let cell6 = document.getElementById('6')
    let cell7 = document.getElementById('7')
    let cell8 = document.getElementById('8')
    let cell9 = document.getElementById('9')

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
    // horizontal winning combos
    if(cell1.innerHTML != '' && (cell1.innerHTML == cell2.innerHTML && cell2.innerHTML == cell3.innerHTML))
    {
        if(cell1.innerHTML == 'x'){
            p1Win += 1 
            document.getElementById('score-player1').innerHTML = p1Win
        }
        else if(cell1.innerHTML == 'o'){
            p2Win += 1
            document.getElementById('score-player2').innerHTML = p2Win
        }
        reset()
    }
    else if(cell4.innerHTML != '' && cell4.innerHTML == cell5.innerHTML && cell5.innerHTML == cell6.innerHTML)
    {
        if(cell4.innerHTML == 'x'){
            p1Win += 1 
            document.getElementById('score-player1').innerHTML = p1Win
        }
        else if(cell4.innerHTML == 'o'){
            p2Win += 1
            document.getElementById('score-player2').innerHTML = p2Win
        }
        reset()
    }
    else if(cell7.innerHTML != '' && cell7.innerHTML == cell8.innerHTML && cell8.innerHTML == cell9.innerHTML)
    {
        if(cell7.innerHTML == 'x'){
            p1Win += 1 
            document.getElementById('score-player1').innerHTML = p1Win
        }
        else if(cell7.innerHTML == 'o'){
            p2Win += 1
            document.getElementById('score-player2').innerHTML = p2Win
        }
        reset()
    }
    // vertical winning combos
    else if(cell1.innerHTML != '' && cell1.innerHTML == cell4.innerHTML && cell4.innerHTML == cell7.innerHTML)
    {
        if(cell1.innerHTML == 'x'){
            p1Win += 1 
            document.getElementById('score-player1').innerHTML = p1Win
        }
        else if(cell1.innerHTML == 'o'){
            p2Win += 1
            document.getElementById('score-player2').innerHTML = p2Win
        }
        reset()
    }
    else if(cell2.innerHTML != '' && cell2.innerHTML == cell5.innerHTML && cell5.innerHTML == cell8.innerHTML)
    {
        if(cell2.innerHTML == 'x'){
            p1Win += 1 
            document.getElementById('score-player1').innerHTML = p1Win
        }
        else if(cell2.innerHTML == 'o'){
            p2Win += 1
            document.getElementById('score-player2').innerHTML = p2Win
        }
        reset()
    }
     else if(cell3.innerHTML != '' && cell3.innerHTML == cell6.innerHTML && cell6.innerHTML == cell9.innerHTML)
    {
        if(cell3.innerHTML == 'x'){
            p1Win += 1 
            document.getElementById('score-player1').innerHTML = p1Win
        }
        else if(cell3.innerHTML == 'o'){
            p2Win += 1
            document.getElementById('score-player2').innerHTML = p2Win
        }
        reset()
    }

    // Diagonal winning combos
    else if(cell1.innerHTML != '' && cell1.innerHTML == cell5.innerHTML && cell5.innerHTML == cell9.innerHTML)
    {
        if(cell1.innerHTML == 'x'){
            p1Win += 1 
            document.getElementById('score-player1').innerHTML = p1Win
        }
        else if(cell1.innerHTML == 'o'){
            p2Win += 1
            document.getElementById('score-player2').innerHTML = p2Win
        }
        reset()
    }
    else if(cell3.innerHTML != '' && cell3.innerHTML == cell5.innerHTML && cell5.innerHTML == cell7.innerHTML)
    {
        if(cell3.innerHTML == 'x'){
            p1Win += 1 
            document.getElementById('score-player1').innerHTML = p1Win
        }
        else if(cell3.innerHTML == 'o'){
            p2Win += 1
            document.getElementById('score-player2').innerHTML = p2Win
        }
        reset()
    }
    // ties
    else if(turns == 9){
        pTie += 1
        document.getElementById("player-turn").innerHTML = `No Turns left. Its a Tie! Start again...`
        document.getElementById('score-tie').innerHTML = pTie
        reset()
        
    }
    console.log(turns)
}

function reset(){
    setTimeout(function() {
        let cell1 = document.getElementById('1')
        let cell2 = document.getElementById('2')
        let cell3 = document.getElementById('3')
        let cell4 = document.getElementById('4')
        let cell5 = document.getElementById('5')
        let cell6 = document.getElementById('6')
        let cell7 = document.getElementById('7')
        let cell8 = document.getElementById('8')
        let cell9 = document.getElementById('9')
        cell1.innerHTML = ''
        cell2.innerHTML = ''
        cell3.innerHTML = ''
        cell4.innerHTML = ''
        cell5.innerHTML = ''
        cell6.innerHTML = ''
        cell7.innerHTML = ''
        cell8.innerHTML = ''
        cell9.innerHTML = ''
        cell1.style.pointerEvents = "auto"
        cell2.style.pointerEvents = "auto"
        cell3.style.pointerEvents = "auto"
        cell4.style.pointerEvents = "auto"
        cell5.style.pointerEvents = "auto"
        cell6.style.pointerEvents = "auto"
        cell7.style.pointerEvents = "auto"
        cell8.style.pointerEvents = "auto"
        cell9.style.pointerEvents = "auto"
    }, 1000);
    turns = 0
}
