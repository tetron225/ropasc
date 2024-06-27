const getComputerChoice = () => {
    let random;
    let cacheItem = {
        0: "scissors",
        1: "rock",
        2: "paper"
    };
    random = Math.floor(Math.random() * 3)
    return cacheItem[random];

}

const getHumanChoice = (input) => {
    let result = input.toLowerCase();
    if(result === "scissors" || result === "rock" || result === "paper") {
        return result;
    } 

    console.log("Error: not a type of moveset for the game");
    return;
    
    
}

const playRound = (humanChoice, computerChoice) => {
    //compare humanChoice and computerchoice
    //using switch statement
    let duel = humanChoice + " " + computerChoice;
    switch(duel) {
        case "paper paper":
            console.log("Its a tie!");
            break;
        case "paper rock":
            console.log("You win! Paper beats Rock");
            humanScore++;
            break;
        case "paper scissors":
            console.log("You lose! Scissors beat Paper");
            computerScore++;
            break;
        case "rock paper":
            console.log("You lose! Paper beats Rock");
            computerScore++;
            break;
        case "rock rock":
            console.log("Its a tie!");
            break;
        case "rock scissors":
            console.log("You win! Rock beats Scissors");
            humanScore++;
            break;
        case "scissors paper":
            console.log("You win! Scissors beat Paper");
            humanScore++;
            break;
        case "scissors scissors":
            console.log("Its a tie!");
            break;
        case "scissors rock":
            console.log("You lose! Rock beats Scissors");
            computerScore++;
            break;    
        }
}

const playGame = () => {
    console.log("Playing 5 rounds!");
    for(let i = 1; i < 6; i++) {
        let person = prompt("Please enter rock, paper or, scissors");
        const humanSelect = getHumanChoice(person);
        const computerSelect = getComputerChoice();
        playRound(humanSelect, computerSelect);
    }

    if(humanScore > computerScore) {
        console.log("You win this round!")
    } else if(humanScore < computerScore) {
        console.log("You lose this round")
    } else {
        console.log("Its a tie this round");
    }
}

let humanScore = 0;
let computerScore = 0;


playGame();
console.log("DONE!")