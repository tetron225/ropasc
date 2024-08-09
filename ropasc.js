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
    let start = document.querySelector("#start");
    let result = document.createElement("div");
    switch(duel) {
        case "paper paper",
             "rock rock",
             "scissor scissor":
            result.textContent = "It's a Tie";
            start.appendChild(result);
            setTimeout(() => {
                start.removeChild(result);
            }, 5000); 
            break;
        case "paper rock":
            result.textContent = "You Win!";
            start.appendChild(result);
            setTimeout(() => {
                start.removeChild(result);
            }, 5000); 
            humanScore++;
            break;
        case "paper scissors":
            result.textContent = "You Lose!";
            start.appendChild(result);
            setTimeout(() => {
                start.removeChild(result);
            }, 5000); 
            computerScore++;
            break;
        case "rock paper":
            result.textContent = "You Lose!";
            start.appendChild(result);
            setTimeout(() => {
                start.removeChild(result);
            }, 5000); 
            computerScore++;
            break;
        case "rock scissors":
            result.textContent = "You Win!";
            start.appendChild(result);
            setTimeout(() => {
                start.removeChild(result);
            }, 5000); 
            humanScore++;
            break;
        case "scissors paper":
            result.textContent = "You Win!";
            start.appendChild(result);
            setTimeout(() => {
                start.removeChild(result);
            }, 5000); 
            humanScore++;
            break;
        case "scissors rock":
            result.textContent = "You Lose!";
            start.appendChild(result);
            setTimeout(() => {
                start.removeChild(result);
            }, 5000); 
            computerScore++;
            break;    
        }
}

const playGame = () => {
    /*console.log("Playing 5 rounds!");
    for(let i = 1; i < 6; i++) {
        let person = prompt("Please enter rock, paper or, scissors");
        const humanSelect = getHumanChoice(person);
        const computerSelect = getComputerChoice();
        playRound(humanSelect, computerSelect);
    }*/
    const start = document.querySelector('#start');
    const rock = document.createElement("button");
    rock.setAttribute("id", "rock");
    const paper = document.createElement("button");
    paper.setAttribute("id", "paper");
    const scissor = document.createElement("button");
    scissor.setAttribute("id", "scissor");

    rock.addEventListener("click", () => {
        const humanSelect = getHumanChoice("rock");
        const computerSelect = getComputerChoice();
        playRound(humanSelect, computerSelect);
        round++;
        return;
    })

    paper.addEventListener("click", () => {
        const humanSelect = getHumanChoice("paper");
        const computerSelect = getComputerChoice();
        playRound(humanSelect, computerSelect);
        round++;
        return;
    })

    scissor.addEventListener("click", () => {
        const humanSelect = getHumanChoice("scissor");
        const computerSelect = getComputerChoice();
        playRound(humanSelect, computerSelect);
        round++;
        return;
    })

    start.appendChild(rock);
    start.appendChild(paper);
    start.appendChild(scissor);

    


    if(round === 5) {
        let result = document.createElement("div");
        if(humanScore > computerScore) {
            result.textContent = "You win this round!";
        } else if(humanScore < computerScore) {
            result.textContent = "You lose this round";
        } else {
            result.textContent = "Its a tie this round";
        }
    }
}

let humanScore = 0;
let computerScore = 0;
let round = 0;

const clickButton = document.querySelector("#play");
clickButton.addEventListener("click", playGame);
