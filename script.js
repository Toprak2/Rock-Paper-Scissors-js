function getComputerChoice(){
    //create a random number between 0 and 3 to decide the output
    let choice= Math.floor(Math.random()*3)
    if(choice==0){
        return "Rock";
    }
    if(choice==1){
        return "Paper";
    }
    return "Scissors";
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
        if(computerChoice === "Rock"){
            playerScore++;
            gameAnnouncer.textContent= "Your Choice : Paper\nComputers Choice: "+computerChoice +"You win! Paper Beats Rock";
            
        }
        else if(computerChoice==="Scissors"){
            computerScore++;
            gameAnnouncer.textContent="Your Choice : Paper\nComputers Choice: "+computerChoice +"You Lose! Scissors Beats Paper";
        }
        else{
        gameAnnouncer.textContent = "Your Choice : Paper\nComputers Choice: "+computerChoice +" Tie!";
        }
    } 
    //Check possible win conditions for when playerInput is scissors, if player won increase the playerScore
    if(playerChoice=="scissors"){
        if(computerChoice === "Rock"){
            computerScore++;
            gameAnnouncer.textContent = "Your Choice : Scissors \nComputers Choice: "+computerChoice +"You Lose! Rock Beats Scissors";
        }
        else if(computerChoice==="Paper"){
            playerScore++;
            gameAnnouncer.textContent = "Your Choice : Scissors\nComputers Choice: "+computerChoice +"You Win! Scissors Beats Paper";
            
        }else {
        gameAnnouncer.textContent = "Your Choice : Scissors\nComputers Choice: "+computerChoice +" Tie!";      
        }
    }   
    //Check possible win conditions for when playerInput is rock, if player won increase the playerScore
    if(playerChoice=="rock"){
        if(computerChoice === "Scissors"){
            playerScore++;
            gameAnnouncer.textContent =  "Your Choice : Rock\nComputers Choice: "+computerChoice +"You Win! Rock Beats Scissors";
            
            
        }
        else if(computerChoice ==="Paper"){
            computerScore++;
            gameAnnouncer.textContent = "Your Choice : Rock\nComputers Choice: "+computerChoice +"\nYou Lose! Paper Beats Rock";
        }
        else{
        gameAnnouncer.textContent = "Your Choice : Rock\nComputers Choice: "+computerChoice +" Tie!";   
        }  
    }
    //update the scoreboard
    scoreboard.textContent= playerScore +"-"+computerScore;

    //Check if any player won
    if(playerScore===5){
        gameAnnouncer.textContent="YOU WIN!";
        removePlayButtons();
        addRestartButton();
    }
    else if(computerScore===5){
        gameAnnouncer.innerHTML="YOU LOST &#128128";  
        removePlayButtons();
        addRestartButton();
    }


}

function removePlayButtons(){
    const body =document.querySelector("body");
    body.removeChild(buttonRock);
    body.removeChild(buttonPaper);
    body.removeChild(buttonScissors);
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
        removeRestartButton();
    });

    body.appendChild(restartButton);
}

function removeRestartButton(){
    const body = document.querySelector("body");
    const restartButton = document.querySelector(".restart");
    body.removeChild(restartButton);
}

function addPlayButtons(){
    const body = document.querySelector("body");
    const gameAnnouncer =document.querySelector(".gameAnnouncer");
    body.insertBefore(buttonRock,gameAnnouncer);
    body.insertBefore(buttonPaper,gameAnnouncer);
    body.insertBefore(buttonScissors,gameAnnouncer);
}

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

