var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var img1 = "images/dice" + randomNumber1 + ".png"

console.log(randomNumber1);
console.log(img1);

document.getElementsByClassName("img1")[0].src = img1;


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var img2 = "images/dice" + randomNumber2 + ".png"

console.log(randomNumber2);
console.log(img2);

document.getElementsByClassName("img2")[0].setAttribute("src", img2);

bigHeader = document.getElementsByTagName('h1')[0].innerHTML;

if(randomNumber1 > randomNumber2){
  document.getElementsByTagName('h1')[0].innerHTML = "P1 Wins";
} else if (randomNumber1 < randomNumber2){
  bigHeader = "P2 Wins";
} else {
  document.getElementsByTagName('h1')[0].innerHTML = 'Draw';
}
