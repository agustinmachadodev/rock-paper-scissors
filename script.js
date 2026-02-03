//Rock Paper Scissors


let getComputerChoice = () => {
    let options =['rock', 'paper', 'scissors'];
    
    let randomIndex = Math.floor(Math.random() * options.length)
    
    return options[randomIndex];
} 

let humanScore = 0;
let computerScore = 0

let playRound = (humanChoice, computerChoice) => {

        if(humanChoice === computerChoice) {
            result.textContent = 'Empate!'
            score.textContent = `PUNTAJES: Human ${humanScore} | Computer ${computerScore}`
    
        } else if(humanChoice === 'rock' && computerChoice === 'scissors') {
            humanScore++;
            result.textContent = 'Ganaste la ronda!, la piedra le gana a la tijera';
            score.textContent = `PUNTAJES: Human ${humanScore} | Computer ${computerScore}`
    
        } else if(humanChoice === 'scissors' && computerChoice === 'rock') {
            computerScore++;
            result.textContent = 'Perdiste la ronda!, la piedra le gana a la tijera';
            score.textContent = `PUNTAJES: Human ${humanScore} | Computer ${computerScore}`
    
        } else if(humanChoice === 'paper' && computerChoice === 'rock') {
            humanScore++;
            result.textContent = 'Ganaste la ronda!, el papel le gana a la piedra';
            score.textContent = `PUNTAJES: Human ${humanScore} | Computer ${computerScore}`
    
        } else if(humanChoice === 'rock' && computerChoice === 'paper') {
            computerScore++;
            result.textContent = 'Perdiste la ronda!, el papel le gana a la piedra';
            score.textContent = `PUNTAJES: Human ${humanScore} | Computer ${computerScore}`
    
        } else if(humanChoice === 'scissors' && computerChoice === 'paper') {
            humanScore++;
            result.textContent = 'Ganaste la ronda!, La tijera le gana al papel' ;
            score.textContent = `PUNTAJES: Human ${humanScore} | Computer ${computerScore}`

        } else if(humanChoice === 'paper' && computerChoice === 'scissors') {
            computerScore++
            result.textContent = 'Perdiste la ronda!, la tijera le gana al papel';
            score.textContent = `PUNTAJES: Human ${humanScore} | Computer ${computerScore}`
        }


        if(humanScore === 5) {
            result.textContent = `GANASTE EL JUEGO`
            score.textContent = `PUNTAJE FINAL: Human ${humanScore} | Computer ${computerScore}`;
            btnRock.disabled = true
            btnPaper.disabled = true
            btnScissors.disabled = true

        } else if (computerScore === 5) {
            result.textContent = `PERDISTE EL JUEGO`
            score.textContent = `PUNTAJE FINAL: Human ${humanScore} | Computer ${computerScore}`;
        
            btnRock.disabled = true
            btnPaper.disabled = true
            btnScissors.disabled = true
        }

}


let container = document.createElement('div');

container.classList.add('container');


let btnRock = document.createElement('button');
btnRock.classList.add('btn');
btnRock.textContent = 'ROCK'

let btnPaper = document.createElement('button');
btnPaper.classList.add('btn');
btnPaper.textContent = 'PAPER'


let btnScissors = document.createElement('button');
btnScissors.classList.add('btn');
btnScissors.textContent = 'SCISSORS'


container.appendChild(btnRock);
container.appendChild(btnPaper);
container.appendChild(btnScissors);


btnRock.addEventListener('click', () => {
    playRound('rock', getComputerChoice())
})

btnPaper.addEventListener('click', () => {
    playRound('paper', getComputerChoice())
})

btnScissors.addEventListener('click', () => {
    playRound('scissors', getComputerChoice())
})


let resultDiv = document.createElement('div');

resultDiv.classList.add('result-container');

let result = document.createElement('p');

let score = document. createElement('p');

resultDiv.appendChild(result);
resultDiv.appendChild(score);

container.appendChild(resultDiv);

document.body.appendChild(container);