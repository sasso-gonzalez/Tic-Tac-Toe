var playerSym = "o"
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

    // ties? how to change
    turns += 1
    if(turns == 9){
        x = document.getElementById("player-turn").innerHTML = `No Turns left.`
    }
}


// var winPosition = [[document.getElementById('1'),document.getElementById('2'),document.getElementById('3')],[document.getElementById('4'),document.getElementById('5'),document.getElementById('6')],[document.getElementById('7'),document.getElementById('8'),document.getElementById('9')], //horizontal 
// [document.getElementById('1'),document.getElementById ('4'),document.getElementById ('7')],[document.getElementById ('2'),document.getElementById ('5'),document.getElementById ('8')],[document.getElementById ('3'),document.getElementById ('6'),document.getElementById ('9')], //vertical 
// [document.getElementById ('1'),document.getElementById ('5'),document.getElementById ('9')],[document.getElementById ('3'),document.getElementById ('5'),document.getElementById ('7')]] //diagonal

// var winContainer = [winPosition.length]
// function winCheck(){
//     if (playerX() == [0,1,2]){
//         alert("Player X wins!")
//     }
// }

// function check_win(){
//     var win = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]

// }


