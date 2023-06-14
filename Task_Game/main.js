let ball = document.querySelector(".ball");
let bar = document.querySelector(".bar");
let point = document.querySelector(".point");
let barX = 0;
let ballX = 0;
let ballY = 0;
let ballMoveX = 5;
let ballMoveY = 5;
let count = 0;

onkeydown = BarMove;

let set = setInterval(
    BallMove
    , 40);


function BarMove (e) {
if(e.keyCode == '39') {

    if(barX < 500){
        barX+=20;
    }
    
}
if(e.keyCode == '37'){
    if(barX>0){
        barX-=20;
    }
}
bar.style.left = barX + 'px';
}

function BallMove (){

    if(ballX<0 || ballX >550){
        ballMoveX *= -1;

    }

    if(ballY<0){ 
ballMoveY *= -1;
    }
    else if(ballY>450 && ballX <= barX+100 && ballX >= barX-25){
        count++;
       
        
        let bestScore = localStorage.getItem("score");
        point.innerHTML = `BEST SCORE: ${bestScore} \n SCORE: ${count}   `;
        ballMoveX++;
        ballMoveY++;
        ballMoveY *= -1;
    }
    else if(ballY>450){
        localStorage.setItem("score", count);
        
        ballMoveX = 5;
        ballMoveY = 5;
   let isContinue =   confirm(`YOU LOST THE GAME... \n Score: ${count} \n Do you want to continue?`)
   
    if(isContinue){
       
        document.location.reload(true);
    }
     }
 



      ballX += ballMoveX;
      ballY += ballMoveY;
      ball.style.left = ballX + 'px'
      ball.style.top = ballY + 'px'

}

