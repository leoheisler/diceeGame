var randomNumber1 = (Math.floor(Math.random()*6));
var randomNumber2 = (Math.floor(Math.random()*6));
var msg;
var images = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

document.querySelector(".img1").setAttribute("src",images[randomNumber1]);
document.querySelector(".img2").setAttribute("src",images[randomNumber2]);

if(randomNumber1 >randomNumber2){
    msg = "Player1 Wins!";
} else if(randomNumber2>randomNumber1){
    msg = "Player2 Wins!";
} else{
    msg= "Draw!";
}

document.querySelector("h1").textContent = msg;