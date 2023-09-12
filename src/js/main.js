import "../css/style.css";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let step1 = document.getElementById("step1");
let step2 = document.getElementById("step2");
let step3 = document.getElementById("step3");
let step2Text = document.getElementById("step2Text");
let step3Text = document.getElementById("step3Text");
let nextBtn = document.getElementById("nextBtn");
let submitBtn = document.getElementById("submitBtn");
let p1Name;
let p2Name;
step2.style.display = "none";
step3.style.display = "none";
console.log(p1Name, p2Name);

const nextStep = () => {
  step1.style.display = "none";
  step2.style.display = "block";
  p1Name = player1.value;
  p2Name = player2.value;
  console.log(p1Name, p2Name);
  step2Text.textContent = `
  Hey ${p1Name} and ${p2Name} select your favorite thing that you want to bet on.
  `;
};

const finalStep = () => {
  step2.style.display = "none";
  step3.style.display = "block";
  step3Text.textContent = `
    Hey ${p1Name} and ${p2Name}The first to reach 100 score wins the game
     and throughout your game, the algo will monitor your dice and at any
      given time, if you get 1 on your dice, 
      your entire score will be halved and dice will shifted. so in case you want to be safe side, 
      you can pass the dice by clicking the button. Good Luck :)
    `;
};

nextBtn.addEventListener("click", nextStep);
submitBtn.addEventListener("click", finalStep);
