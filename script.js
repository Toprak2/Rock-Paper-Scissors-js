function getComputerChoice(){
    //create a random number between 0 and 3 to decide the output
    let choice= Math.floor(Math.random()*3)
    if(choice==0){
        return "rock";
    }
    if(choice==1){
        return "paper";
    }
    return "scissors";
}
let playerScore=0;
let computerScore=0;

function playRound(playerChoice){
    //create reference to gameAnnouncer and scoreboard divs
    const gameAnnouncer = document.querySelector(".gameAnnouncer");
    const scoreboard = document.querySelector(".scoreboard");
    //get computer's choice
    const computerChoice =getComputerChoice();

    //Check possible win conditions for when playerInput is paper, if player won increase the playerScore
    if(playerChoice=="paper"){
        if(computerChoice === "rock"){
            playerScore++;
            gameAnnouncer.textContent= "You Win! Paper beats Rock";
            
        }
        else if(computerChoice==="scissors"){
            computerScore++;
            gameAnnouncer.textContent="You Lose! Scissors beat Paper";
        }
        else{
        gameAnnouncer.textContent = "Tie!";
        }
    } 
    //Check possible win conditions for when playerInput is scissors, if player won increase the playerScore
    if(playerChoice=="scissors"){
        if(computerChoice === "rock"){
            computerScore++;
            gameAnnouncer.textContent = "You Lose! Rock beats Scissors"
        }
        else if(computerChoice==="paper"){
            playerScore++;
            gameAnnouncer.textContent = "You Win! Scissors beat Paper"
            
        }else {
        gameAnnouncer.textContent = "Tie!";      
        }
    }   
    //Check possible win conditions for when playerInput is rock, if player won increase the playerScore
    if(playerChoice=="rock"){
        if(computerChoice === "scissors"){
            playerScore++;
            gameAnnouncer.textContent =  "You Win! Rock beats Scissors";
            
            
        }
        else if(computerChoice ==="paper"){
            computerScore++;
            gameAnnouncer.textContent = "You Lose! Paper beats Rock";
        }
        else{
        gameAnnouncer.textContent = "Tie!";   
        }  
    }
    //update the scoreboard
    scoreboard.textContent= playerScore +"-"+computerScore;

    //update choice images
    updateChoiceImage(playerChoice,computerChoice);
    //Check if any player won
    if(playerScore===5){
        updateChoiceImage("unknown","unknown");
        gameAnnouncer.textContent="YOU WIN!";
        removePlayButtons();
        addRestartButton();
    }
    else if(computerScore===5){
        updateChoiceImage("unknown","unknown");
        gameAnnouncer.innerHTML="YOU LOST &#128128";  
        removePlayButtons();
        addRestartButton();
    }


}
function updateChoiceImage(player,computer){
    const playerChoiceImage = document.querySelector(".player-choice-img img");
    const computerChoiceImage = document.querySelector(".computer-choice-img img");
    

    if(player==="rock"){
        playerChoiceImage.src="./images/Rock.png";
    }
    else if(player==="paper"){
        playerChoiceImage.src="./images/Paper.png";
    }
    else if(player==="scissors"){
        playerChoiceImage.src="./images/Scissors.png";
    }
    else if(player==="unknown"){
        playerChoiceImage.src="./images/unknown.png";
    }
    if(computer==="rock"){
        computerChoiceImage.src="./images/Rock.png";
    }
    else if(computer==="paper"){
        computerChoiceImage.src="./images/Paper.png";
    }
    else if(computer==="scissors"){
        computerChoiceImage.src="./images/Scissors.png";
    }
    else if(computer==="unknown"){
        computerChoiceImage.src="./images/unknown.png";
    }

}
function removePlayButtons(){
    const list =document.querySelector("ul");
    buttonRock.remove();
    buttonPaper.remove();
    buttonScissors.remove();
}   


function addRestartButton(){
    const restartButton = document.createElement("button");     
    const body =document.querySelector("body");
    
    restartButton.innerText="RESTART";
    restartButton.classList.add("restart");

    restartButton.addEventListener("click",function(){
        playerScore=0;
        computerScore=0;
        document.querySelector(".scoreboard").textContent="0-0";
        addPlayButtons();
        document.querySelector(".gameAnnouncer").textContent="Select an option to play";
        body.insertBefore(choiceContainer,document.querySelector(".gameAnnouncer"));
        removeRestartButton();
    });

    body.appendChild(restartButton);
    body.removeChild(choiceContainer);
}

function removeRestartButton(){
    const body = document.querySelector("body");
    const restartButton = document.querySelector(".restart");
    body.removeChild(restartButton);
}

function addPlayButtons(){
    const listRock = document.querySelector(".listRock");
    const listPaper = document.querySelector(".listPaper");
    const listScissors=document.querySelector(".listScissors"); 
    listRock.appendChild(buttonRock);
    listPaper.appendChild(buttonPaper);
    listScissors.appendChild(buttonScissors);
}

const choiceContainer =document.querySelector(".choice-container");

//Declare a reference to the rock button
const buttonRock=document.querySelector(".rock");
//add a function to trigger on click to play the round with the buttons class value as playerChoice;
buttonRock.addEventListener("click",function(){
    playRound(this.classList.value); 
})
//Declare a reference to the paper button
const buttonPaper=document.querySelector(".paper");
//add a function to trigger on click to play the round with the buttons class value as playerChoice;
buttonPaper.addEventListener("click",function(){
    playRound(this.classList.value); 
})
//Declare a reference to the scissors button
const buttonScissors=document.querySelector(".scissors");
//add a function to trigger on click to play the round with the buttons class value as playerChoice;
buttonScissors.addEventListener("click",function(){
   playRound(this.classList.value); 
})

