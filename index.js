function myfunc()  {
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "Dice" + randomNumber1 + ".jpg"; //dice1.png - dice6.png

var randomImageSource = "asserts/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "asserts/Dice" + randomNumber2 + ".jpg";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = " Harini  Wins!🚩";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Jagadeesh Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw Match!";
}
}