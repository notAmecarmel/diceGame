var rand = Math.random();
var randomNumber1 = rand * 6;
randomNumber1 = Math.floor(randomNumber1);
randomNumber1 = randomNumber1 + 1;

document.querySelector(".img1").src = 'http://127.0.0.1:5500/images/dice'+randomNumber1+'.png';

var rand2 = Math.random();
var randomNumber2 = rand2 * 6;
randomNumber2 = Math.floor(randomNumber2);
randomNumber2 = randomNumber2 + 1;

document.querySelector(".img2").src = 'http://127.0.0.1:5500/images/dice'+randomNumber2+'.png';


if(randomNumber1 > randomNumber2)   {
    document.querySelector("h1").innerHTML = "player 1 wins";
}else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "player 2 wins";
}else{
    document.querySelector("h1").innerHTML = "Draw";
}