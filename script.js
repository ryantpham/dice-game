let randomNumber1 = Math.floor(Math.random()*6)+1;
console.log(randomNumber1);

let randomNumber2 = Math.floor(Math.random()*6)+1;
console.log(randomNumber2);

//First dice
document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");
//Second dice
document.querySelector(".img2").setAttribute("src","./images/dice" + randomNumber2 + ".png");

if(randomNumber1 == randomNumber2){
    document.querySelector("h1").textContent = "🎲 It is a tie! 🎲";
} else if (randomNumber1>randomNumber2){
    document.querySelector("h1").textContent = "You win!";
    document.querySelector(".player").textContent = "Player 🚩"
} else {
    document.querySelector("h1").textContent = "You lose!";
    document.querySelector(".computer").textContent = "Computer 🚩"
}
