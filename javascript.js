let humanScore = 0;
let computerScore = 0;
let empates = 0

let imagem = document.querySelector("#imagem-jogador")
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3)
    switch (randomNumber){
        case 0:
            return "pedra"
        case 1:
            return "papel"
        case 2:
            return "tesoura"
    }
}

function getHumanChoice(escolha) {
    if(escolha == "pedra"){
        imagem.setAttribute("src", "images/pedra.png")
        return escolha
    } else if (escolha == "papel"){
        imagem.setAttribute("src", "images/paper.png")
        return escolha
    } else if (escolha == "tesoura"){
        imagem.setAttribute("src", "images/tesoura.png")
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
        
    }else if(computerScore == 5){
        
    }
    console.log(empates)
}



let btnPedra = document.querySelector("#jogue-pedra")
let btnPapel = document.querySelector("#jogue-papel")
let btnTesoura = document.querySelector("#jogue-tesoura")
let btnStart = document.querySelector("#start-btn")
let jogadorPontuacao = document.querySelector("#human-score")
let computadorPontuacao = document.querySelector("#computer-score")
jogadorPontuacao.textContent = humanScore
computadorPontuacao.textContent = computerScore

btnPedra.addEventListener("click", () => handleClick("pedra") );
btnPapel.addEventListener("click", () => handleClick("papel"));
btnTesoura.addEventListener("click", () => handleClick("tesoura"));
