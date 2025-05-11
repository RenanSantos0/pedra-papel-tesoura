let humanScore = 0;
let computerScore = 0;
let empates = 0

let imagemPlayer = document.querySelector("#imagem-jogador")
let imagemComputer = document.querySelector("#imagem-computador")
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3)
    switch (randomNumber){
        case 0:
            imagemComputer.setAttribute("src", "images/pedra.png")
            return "pedra"
        case 1:
            imagemComputer.setAttribute("src", "images/paper.png")
            return "papel"
        case 2:
            imagemComputer.setAttribute("src", "images/tesoura.png")
            return "tesoura"
    }
}

function getHumanChoice(escolha) {
    if(escolha == "pedra"){
        imagemPlayer.setAttribute("src", "images/pedra.png")
        return escolha
    } else if (escolha == "papel"){
        imagemPlayer.setAttribute("src", "images/paper.png")
        return escolha
    } else if (escolha == "tesoura"){
        imagemPlayer.setAttribute("src", "images/tesoura.png")
        return escolha
    } else{
        return getHumanChoice()
    }
}

function playRound(computerChoice, humanChoice) {
    if (
        (computerChoice === "pedra" && humanChoice === "papel")||
        (computerChoice === "papel" && humanChoice === "tesoura")||
        (computerChoice === "tesoura" && humanChoice === "pedra")
    ){
        humanScore++;
    } else if (
        (computerChoice === "pedra" && humanChoice === "tesoura")||
        (computerChoice === "papel" && humanChoice === "pedra")||
        (computerChoice === "tesoura" && humanChoice === "papel")
    ){
        computerScore++
    } else if(computerChoice == humanChoice){
        empates++
    }
    
}

function handleClick(humanChoice) {
    const computerChoice = getComputerChoice();
    const validChoice = getHumanChoice(humanChoice);
    playRound(computerChoice, validChoice);
    jogadorPontuacao.textContent = humanScore;
    computadorPontuacao.textContent = computerScore;
    if(humanScore == 5){
        againContainer.style.display = "flex"
        gameScreen.style.opacity = "0.33"
        btnPedra.removeEventListener("click", () => handleClick("pedra") )
    }else if(computerScore == 5){
        againContainer.style.display = "flex"
        gameScreen.style.opacity = "0.33"
    }
    console.log(empates)
}



let btnPedra = document.querySelector("#jogue-pedra")
let btnPapel = document.querySelector("#jogue-papel")
let btnTesoura = document.querySelector("#jogue-tesoura")
let btnStart = document.querySelector(".start-button")
let jogadorPontuacao = document.querySelector("#human-score")
let computadorPontuacao = document.querySelector("#computer-score")
jogadorPontuacao.textContent = humanScore
computadorPontuacao.textContent = computerScore
const gameScreen = document.querySelector("#game-screen")
const startScreen = document.querySelector("#start-screen")
const againContainer = document.querySelector(".again-container")

btnPedra.addEventListener("click", () => handleClick("pedra") );
btnPapel.addEventListener("click", () => handleClick("papel"));
btnTesoura.addEventListener("click", () => handleClick("tesoura"));
btnStart.addEventListener("click", () =>{
    gameScreen.style.display = "flex";
    startScreen.style.display = "none"
});
