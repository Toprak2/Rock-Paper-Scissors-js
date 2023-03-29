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
    //create referencer to gameAnnouncer and scoreboard divs
    const gameAnnouncer = document.querySelector(".gameAnnouncer");
    const scoreboard = document.querySelector(".scoreboard");

    //Check possible win conditions for when playerInput is paper, if player won increase the playerScore
    if(playerChoice=="paper"){
        if(getComputerChoice() == "Rock"){
            playerScore++;
            gameAnnouncer.textContent= "Your Choice : Paper\nComputers Choice: "+getComputerChoice()+"You win! Paper Beats Rock";
            
        }
        else if(getComputerChoice=="Scissors"){
            computerScore++;
            gameAnnouncer.textContent="Your Choice : Paper\nComputers Choice: "+getComputerChoice()+"You Lose! Scissors Beats Paper";
        }
        else{
        gameAnnouncer.textContent = "Your Choice : Paper\nComputers Choice: "+getComputerChoice()+" Tie!";
        }
    } 
    //Check possible win conditions for when playerInput is scissors, if player won increase the playerScore
    if(playerChoice=="scissors"){
        if(getComputerChoice() == "Rock"){
            computerScore++;
            gameAnnouncer.textContent = "Your Choice : Scissors \nComputers Choice: "+getComputerChoice()+"You Lose! Rock Beats Scissors";
        }
        else if(getComputerChoice()=="Paper"){
            playerScore++;
            gameAnnouncer.textContent = "Your Choice : Scissors\nComputers Choice: "+getComputerChoice()+"You Win! Scissors Beats Paper";
            
        }else {
        gameAnnouncer.textContent = "Your Choice : Scissors\nComputers Choice: "+getComputerChoice()+" Tie!";      
        }
    }   
    //Check possible win conditions for when playerInput is rock, if player won increase the playerScore
    if(playerChoice=="rock"){
        if(getComputerChoice() == "Scissors"){
            playerScore++;
            gameAnnouncer.textContent =  "Your Choice : Rock\nComputers Choice: "+getComputerChoice()+"You Win! Rock Beats Scissors";
            
            
        }
        else if(getComputerChoice()=="Paper"){
            computerScore++;
            gameAnnouncer.textContent = "Your Choice : Rock\nComputers Choice: "+getComputerChoice()+"\nYou Lose! Paper Beats Rock";
        }
        else{
        gameAnnouncer.textContent = "Your Choice : Rock\nComputers Choice: "+getComputerChoice()+" Tie!";   
        }  
    }
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

