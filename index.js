let nr1 = Math.floor(Math.random() * 6) + 1;
let nr2 = Math.floor(Math.random() * 6) + 1;

let img1 = "./images/dice" + nr1 + ".png";
let img2 = "./images/dice" + nr2 + ".png";

document.querySelector(".img1").setAttribute("src", img1);
document.querySelector(".img2").setAttribute("src", img2);

if (nr1 > nr2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (nr2 > nr1) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}
