//Rock Paper Scissors

let getComputerChoice = () => {
    let options =['rock', 'paper', 'scissors'];

    let randomIndex = Math.floor(Math.random() * options.length)

    return options[randomIndex];
} 



let getHumanChoice = () => {
    let choice = prompt('Escribe una opcion: rock, paper o scissors').toLowerCase();


    if( choice === 'paper' || 
        choice === 'rock' ||
        choice === 'scissors') {
        return choice;
    
    }

}


const playGame = () => {

    let humanScore = 0;
    let computerScore = 0;

    let playRound = (humanChoice, computerChoice) => {


        if(humanChoice === computerChoice) {
            console.log(`Empate ambos eligieron ${humanChoice}`);
    
        } else if(humanChoice === 'rock' && computerChoice === 'scissors') {
            console.log('Ganaste!, la piedra le gana a la tijera');
            humanScore++;
    
        } else if(humanChoice === 'scissors' && computerChoice === 'rock') {
            console.log('Perdiste!, la piedra le gana a la tijera');
            computerScore++;
    
        } else if(humanChoice === 'paper' && computerChoice === 'rock') {
            console.log('Ganaste!, el papel le gana a la piedra');
            humanScore++;
    
        } else if(humanChoice === 'rock' && computerChoice === 'paper') {
            console.log('Perdiste!, el papel le gana a la piedra');
            computerScore++;
    
        } else if(humanChoice === 'scissors' && computerChoice === 'paper') {
            console.log('Ganaste!, La tijera le gana al papel');
            humanScore++;

        } else if(humanChoice === 'paper' && computerChoice === 'scissors') {
            console.log('Perdiste!, la tijera le gana al papel')
            computerScore++
        }

    }

    for(let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()

        playRound(humanChoice, computerChoice);
    }

    if(humanScore === computerScore) {
        console.log('Empate')
    
    } else if(humanScore > computerScore) {
        console.log('Ganaste el juego!')
    
    } else {
        console.log('Perdiste el juego')
    }

    console.log(`Puntaje Final: Human -> ${humanScore}, Computer -> ${computerScore}`)
}

playGame();
