var player1 =  Math.floor(Math.random()*7);

var player2 = Math.floor(Math.random()*7);

if(player1 > player2){
  document.querySelector("h1").innerHTML = "Player 1 wins!";
}

else if(player1 < player2){
  document.querySelector("h1").innerHTML = "Player 2 wins!";
}

else{
  document.querySelector("h1").innerHTML = "Draw!";
}

var imageNumber1 = "images/dice" + player1 + ".png";

var imageNumber2 = "images/dice" + player2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", imageNumber1);
document.querySelectorAll("img")[1].setAttribute("src", imageNumber2);
