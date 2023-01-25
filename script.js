/* Dungeon Mania Script File
Author: Tera "NovaStar" Ward
Version 0.1
*/
var score = 0;
//Event Listener for Keypresses
document.addEventListener("keydown", event => {
  if(event.key==="ArrowUp"){moveUp();}
  if(event.key==="ArrowLeft"){moveLeft();}
  if(event.key==="ArrowRight"){moveRight();}
  if(event.key==="ArrowDown"){moveDown();}
});

//Reinitialize Game
function gameOver(){
    character.style.top = "400px";
    character.style.left = "500px";
    score = 0;
}

//Movement Functions
var character = document.getElementById("character");
function moveUp(){
    let top = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    top -= 20;
    character.style.top = top + "px";
}
function moveLeft(){
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left -= 20;
    character.style.left = left + "px";
}
function moveRight(){
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left += 20;
    character.style.left = left + "px";
}
function moveDown(){
    let top = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    top += 20;
    character.style.top = top + "px";
}

//Collision Detection
setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    var enemyTop = parseInt(window.getComputedStyle(enemy).getPropertyValue("top"))-20;
    var enemyLeft = parseInt(window.getComputedStyle(enemy).getPropertyValue("left"));

    if((characterTop === enemyTop && characterLeft === enemyLeft)){
        alert("Game over.");
        gameOver()
    }
},10);

/*
setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping==0){
        character.style.top = (characterTop+3)+"px";
    }
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop = -(500-characterTop);
    if((characterTop>480)||((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130)))){
        alert("Game over. Score: "+(counter-1));
        character.style.top = 100 + "px";
        counter=0;
    }
},10);

function jump(){
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop>6)&&(jumpCount<15)){
            character.style.top = (characterTop-5)+"px";
        }
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    },10);
}
*/