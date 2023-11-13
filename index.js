var playerSym = "x"

function onclickCells(cell)
{
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
    let x = document.getElementById("player-turn").innerHTML = `Player's Turn: ${playerSym}`
}
























// function check_win(){
//     var win = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]

// }


// var c = confirm(`_ Wins!`)
// if()
// {
//     window.location.reload(true)
// }
