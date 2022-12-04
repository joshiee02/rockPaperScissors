let playerSelection = undefined;
let computerSelection;
let gameRound = 0;
let humanScore = 0;
let computerScore = 0;

let title = document.querySelector('.rps');
let rockBtn = document.querySelector('.rock');
let paperBtn = document.querySelector('.paper')
let scissorsBtn = document.querySelector('.scissors');
let computerPick = document.querySelector('.computerPick')
let roundScore = document.querySelector('.roundScore');
let playerScore = document.querySelector('.playerScore');
let compScore = document.querySelector('.compScore');
let winner = document.querySelector('.winner');


//almost all elements in html are set opacity to 0 in default, after the animation is done set opacity to 1 
window.onload = function() { 

    let timer1 = setTimeout(function() { //animation when opening the page
      title.classList.add('start');

      let timer2 = setTimeout(function(){ //css class to set opacity to 1 
        document.querySelector('.weapons').classList.toggle('hidden');
        document.querySelector('.versus').classList.toggle('hidden');
        document.querySelector('.computer').classList.toggle('hidden');
        document.querySelector('.bothScore').classList.toggle('hidden');
        document.querySelector('h2').classList.toggle('hidden');
      }, 1000);
    }, 800);

}

//get random number that equals to paper, rock, or scissors

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

// onclick of the buttons start the game
rockBtn.onclick = () => {
    playerSelection = "Rock";
    game();
}
paperBtn.onclick = () => {
    playerSelection = "Paper";
    game();
}
scissorsBtn.onclick = () => {
    playerSelection = "Scissors";
    game();
}
//if player wins set button to green add 1 to variable humanScore, computer lose set button red, vice-versa 
function playRound(playerSelection, computerSelection){

    if (playerSelection == "Paper"){ 

        if(computerSelection == "Rock"){ 
            paperBtn.style.border = '5px outset green';
            computerPick.style.border = '5px outset red';
            humanScore++; 
        }
        else if(computerSelection == "Scissors"){ 
            paperBtn.style.border = '5px outset red';
            computerPick.style.border = '5px outset green';
            computerScore++; 
        }else{
            paperBtn.style.border = '5px outset #c0c0c0';
            computerPick.style.border = '5px outset #c0c0c0';
        }

    }
    else if(playerSelection == "Rock"){ 
        
        if(computerSelection == "Scissors"){ 
            rockBtn.style.border = '5px outset green';
            computerPick.style.border = '5px outset red';
            humanScore++;
        }
        else if(computerSelection == "Paper"){ 
            rockBtn.style.border = '5px outset red';
            computerPick.style.border = '5px outset green';
            computerScore++;
        }else{
            rockBtn.style.border = '5px outset #c0c0c0';
            computerPick.style.border = '5px outset #c0c0c0';
        }
    }
    else if(playerSelection == "Scissors"){ 

        if(computerSelection == "Paper"){ 
            scissorsBtn.style.border = '5px outset green';
            computerPick.style.border = '5px outset red';
            humanScore++; 
        }
        else if(computerSelection == "Rock"){ 
            scissorsBtn.style.border = '5px outset red';
            computerPick.style.border = '5px outset green';
            computerScore++;
        }else{
            scissorsBtn.style.border = '5px outset #c0c0c0';
            computerPick.style.border = '5px outset #c0c0c0';
        }
    }
}

//remove border from playRound func
function resetWinnerBorder(){
    paperBtn.style.border = 'none';
    rockBtn.style.border = 'none';
    scissorsBtn.style.border = 'none';
}

//resetGame
function resetGame(){

    gameRound = 0;
    humanScore = 0;
    computerScore = 0;
}

function game(){

    resetWinnerBorder(); //when starting every round there is no win/lose border

    winner.textContent = ``; //no winner until 5 wins

    gameRound++;

    roundScore.textContent = `${gameRound}`; //update round to HTML

    computerSelection = getComputerChoice(); //randomize computer pick

    //add icon to HTML base on computer choice
    if(computerSelection == "Paper"){
        computerPick.innerHTML = '<i class="fa-regular fa-hand"></i>'
    }else if(computerSelection =="Rock"){
        computerPick.innerHTML = '<i class="fa-regular fa-hand-back-fist"></i>'
    }
    else{
        computerPick.innerHTML = '<i class="fa-regular fa-hand-scissors"></i>'
    }

    //start round
    playRound(playerSelection, computerSelection);

    //update player & computer score on HTML
    playerScore.textContent = `${humanScore}`;
    compScore.textContent = `${computerScore}`;

    //race to 5 game, after reset everything
    if(humanScore >= 5){

        winner.textContent = `You won! :O`;
        resetGame();
    }else if(computerScore >= 5){
        
        winner.textContent = `Computer won :(`;
        resetGame();
    }

}
