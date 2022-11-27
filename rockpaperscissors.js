let x = `You win!`;
let y = `You lost!`;
let z = "It's a draw!";

function getComputerChoice(){
    let i = Math.floor(Math.random() * 3) + 1; 
    if (i == 1){ 
        return "Paper";
    }
    else if (i == 2){ 
        return "Rock";
    }
    else if (i == 3){ 
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection){ 
    if (playerSelection == "Paper"){ 

        if(computerSelection == "Rock"){ 
            console.log(x); 
            humanScore++; 
        }
        else if(computerSelection == "Scissors"){ 
            console.log(y); 
            computerScore++; 
        }
        else{
            console.log(z); 
        }
    }
    else if(playerSelection == "Rock"){ 
        
        if(computerSelection == "Scissors"){ 
            console.log(x); 
            humanScore++;
        }
        else if(computerSelection == "Paper"){ 
            console.log(y); 
            computerScore++;
        }
        else{
            console.log(z); 
        }
    }
    else if(playerSelection == "Scissors"){ 

        if(computerSelection == "Paper"){ 
            console.log(x); 
            humanScore++; 
        }
        else if(computerSelection == "Rock"){ 
            console.log(y); 
            computerScore++;
        }
        else{
            console.log(z); 
        }
    }
}

function game(){ 

    humanScore = 0;
    computerScore = 0;

    for(let i = 1; i <= 5; i++){ 
        let playerSelection = prompt(`Rock, Paper, or Scissors?`); 
        let computerSelection = getComputerChoice(); 
        console.log(`Round ${i}`);
        playRound(playerSelection, computerSelection); 
        console.log(`You chose ${playerSelection} & the computer chose ${computerSelection}`) 
    }


    if (humanScore > computerScore){
        console.log(`You win! Your score: ${humanScore} Computer score: ${computerScore}`) 
    }
    else{ 
        console.log(`You lost! Your score: ${humanScore} Computer score: ${computerScore}`)
    }
}
