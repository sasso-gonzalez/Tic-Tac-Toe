function onclickCells()
{
    var playerSym = "x"
    var gEnded = false
    if(playerSym = "x"){
        playerSym = "o"
    }
    else{
        playerSym = "x"
    }
    let tdcells = document.getElementsByClassName("cell")
    for(i = 0; i < tdcells.length; i++){
    tdcells.replace("", playerSym)
    }
    return playerSym;
}




// function winner(){
//     var win = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]
//     if(){}

// }


// function playerTurn()
// {
//     var x = document.getElementById("player-turn").getElementsByTagName("h4")
//     for(var i = 0; i < x.length; i++){
//         var rep = x[i].innerHTML.replace('.', switchTurn())
//     }
// }

// var c = confirm(`_ Wins!`)
// if()
// {
//     window.location.reload(true)
// }
