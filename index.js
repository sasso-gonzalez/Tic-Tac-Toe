
















var winPosition = [[document.getElementById('1'),document.getElementById('2'),document.getElementById('3')],[document.getElementById('4'),document.getElementById('5'),document.getElementById('6')],[document.getElementById('7'),document.getElementById('8'),document.getElementById('9')], //horizontal 
[document.getElementById('1'),document.getElementById ('4'),document.getElementById ('7')],[document.getElementById ('2'),document.getElementById ('5'),document.getElementById ('8')],[document.getElementById ('3'),document.getElementById ('6'),document.getElementById ('9')], //vertical 
[document.getElementById ('1'),document.getElementById ('5'),document.getElementById ('9')],[document.getElementById ('3'),document.getElementById ('5'),document.getElementById ('7')]] //diagonal

var winContainer = [winPosition.length]
function winCheck(){
    if (playerX() == [0,1,2]){
        alert("Player X wins!")
    }
}

































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
