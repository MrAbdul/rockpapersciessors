const totalTries = 5;
let playerScore = 0;
let pcScore = 0;
let numberOfTriesUsed = 0;
let isInitial = true;

driveFullGame();
function driveFullGame() {
  while(numberOfTriesUsed <totalTries) {
    if (!isInitial) {
      alert("your score = " + playerScore
        + "\ncomp score = " + pcScore
        + "\nremaining tries= " + (totalTries- numberOfTriesUsed ));
    }
    playRound();
    isInitial = false;
  }
}

function playRound() {
  let userChoice = prompt("please select P for paper S for scissors R for rocks");
  const matchResult = getMatchResult(userChoice, getPcChoice());
  if (matchResult === "player") {
    playerScore++;
  } else {
    pcScore++;
  }
  numberOfTriesUsed++;
}


function getMatchResult(userChoice, pcChoice) {
  if (userChoice === pcChoice) {
    return "draw";
  } else if (userChoice === "P" && pcChoice === "R") {
    return "player";
  } else if (userChoice === "P" && pcChoice === "S") {
    return "pc";
  } else if (userChoice === "S" && pcChoice === "R") {
    return "pc";
  } else if (userChoice === "S" && pcChoice === "P") {
    return "player"
  } else if (userChoice === "R" && pcChoice === "S") {
    return "player";
  } else if (userChoice === "R" && pcChoice === "P") {
    return "pc";
  }

}

function getPcChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "R"
  } else if (choice === 1) {
    return "P"
  } else {
    return "S"
  }
}
