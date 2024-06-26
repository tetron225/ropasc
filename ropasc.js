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

console.log(getComputerChoice());