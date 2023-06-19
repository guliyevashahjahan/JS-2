let ball = document.querySelector(".ball");
let bar = document.querySelector(".bar");
let point = document.querySelector(".point");
let barX = 0;
let ballX = 0;
let ballY = 0;
let ballMoveX = 5;
let ballMoveY = 5;
let count = 0;
let scoreList = new Array();
localStorage.setItem("score", JSON.stringify(scoreList));


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
document.querySelector('.win p span').innerHTML = `${count}`;
   
        ballMoveX++;
        ballMoveY++;
        ballMoveY *= -1;
    }
    else if(ballY>450){
        document.querySelector('.lose p span').innerHTML = `${count}`;
        document.querySelector('.lose').style.display = 'block';
   scoreList= JSON.parse(localStorage.getItem('score'));

     scoreList.push(count);
        localStorage.setItem('score',JSON.stringify(scoreList));
        
        ballMoveX = 5;
        ballMoveY = 5;
        clearInterval(set);
         
        document.querySelector('button').addEventListener('click',()=> {
            ballX =0;
            ballY =0;
     set = setInterval(
    BallMove
    , 40);
    document.querySelector('.lose').style.display = 'none';
        })
  
     }
 



      ballX += ballMoveX;
      ballY += ballMoveY;
      ball.style.left = ballX + 'px'
      ball.style.top = ballY + 'px'

}

