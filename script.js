const chars = ["الف", "ب", "ج", "د"];
const playersCount = 4;

let esm = document.getElementById("name");
let city = document.getElementById("city");
let food = document.getElementById("food");
let color = document.getElementById("color");
let playerNum = 1;
let playersData = [];
let chosenChar = chars[Math.floor(Math.random() * chars.length)];
console.log(chosenChar);
document.getElementById("character").innerHTML = chosenChar;

function arrayMaker(playersCount) {
  for (let i = 0; i < playersCount; i++) {
    playersData[i] = new Array(4);
  }
}

function handle() {
  if (playerNum == playersCount) {
    //calc
  }
  playersData[playerNum][0] = esm.innerHTML;
  playersData[playerNum][1] = city.innerHTML;
  playersData[playerNum][2] = food.innerHTML;
  playersData[playerNum][3] = color.innerHTML;

  esm.innerHTML = "";
  city.innerHTML = "";
  food.innerHTML = "";
  color.innerHTML = "";

  playerNum++;
}

function calc() {
  //name
  let lastSeen = playersData[0][0];
  for (let i = 1; i < playersCount; i++) {
    if (playersData[i][0] == lastSeen) {
    }
  }
}
