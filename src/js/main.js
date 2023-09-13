import "../css/style.css";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

let player1 = document.getElementById("player1");
let player1Name = document.getElementById("player1Name");
let player2 = document.getElementById("player2");
let player2Name = document.getElementById("player2Name");
let welcomepage = document.getElementById("welcomepage");
let betRecipe = document.getElementById("betRecipe");

let step1 = document.getElementById("step1");
let step2 = document.getElementById("step2");
let step3 = document.getElementById("step3");
let gameStep = document.getElementById("gameStep");
let step2Text = document.getElementById("step2Text");
let step3Text = document.getElementById("step3Text");
let nextBtn = document.getElementById("nextBtn");
let submitBtn = document.getElementById("submitBtn");
let beginBtn = document.getElementById("beginBtn");
let diceImage1 = document.getElementById("diceImage1");
let rollBtn = document.getElementById("rollBtn");
let passBtn = document.getElementById("passBtn");

let player1Status = document.getElementById("player-1-status");
let player2Status = document.getElementById("player-2-status");

let p1Name;
let p2Name;
step2.style.display = "none";
step3.style.display = "none";
welcomepage.style.display = "none";

gameStep.style.display = "block";
player2Status.style.display = "none";
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
  document.getElementById("betReicpetext").textContent = betRecipe.value;
};

const beginGame = () => {
  gameStep.style.display = "block";
  player1Name.textContent = p1Name;
  player2Name.textContent = p2Name;
};
const changeDice = () => {
  diceImage1.classList.add("rolling");
  let dice_no = Math.floor(Math.random() * 6);
  let image = `../images/${dice_no + 1}.png`;
  diceImage1.setAttribute("src", image);
  console.log(dice_no + 1);
  diceImage1.classList.remove("rolling");
};

const switchPlayer = () => {
  console.log("hello");
  if (player1Status.style.display == "none") {
    player1Status.style.display = "block";
    player2Status.style.display = "none";
  } else {
    player1Status.style.display = "none";
    player2Status.style.display = "block";
  }
};

nextBtn.addEventListener("click", nextStep);
submitBtn.addEventListener("click", finalStep);
beginBtn.addEventListener("click", beginGame);
rollBtn.addEventListener("click", changeDice);
passBtn.addEventListener("click", switchPlayer);
