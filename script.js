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

function playRound(playerChoice){

    //Check possible win conditions for when playerInput is paper, if player won increase the playerScore
    if(playerChoice=="paper"){
        if(getComputerChoice() == "Rock"){
            playerScore++;
            console.log( "Your Choice :"+playerChoice+"\nComputers Choice:"+getComputerChoice()+"You win! Paper Beats Rock");
            
        }
        else if(getComputerChoice=="Scissors"){
            console.log("Your Choice :"+playerChoice+"\nComputers Choice:"+getComputerChoice()+"You Lose! Scissors Beats Paper");
        }
        else{
        console.log("Your Choice :"+playerChoice+"\nComputers Choice:"+getComputerChoice()+" Tie!");
        }
    } 
    //Check possible win conditions for when playerInput is scissors, if player won increase the playerScore
    if(playerChoice=="scissors"){
        if(getComputerChoice() == "Rock"){
            console.log("Your Choice :"+playerChoice+"\nComputers Choice:"+getComputerChoice()+"You Lose! Rock Beats Scissors");
        }
        else if(getComputerChoice()=="Paper"){
            playerScore++;
            console.log("Your Choice :"+playerChoice+"\nComputers Choice:"+getComputerChoice()+"You Win! Scissors Beats Paper");
            
        }else {
        console.log("Your Choice :"+playerChoice+"\nComputers Choice:"+getComputerChoice()+" Tie!");       
        }
    }   
    //Check possible win conditions for when playerInput is rock, if player won increase the playerScore
    if(playerChoice=="rock"){
        if(getComputerChoice() == "Scissors"){
            playerScore++;
            console.log( "Your Choice :"+playerChoice+"\nComputers Choice:"+getComputerChoice()+"You Win! Rock Beats Scissors");
            
        }
        else if(getComputerChoice()=="Paper"){
            console.log("Your Choice :"+playerChoice+"\nComputers Choice:"+getComputerChoice()+"\nYou Lose! Paper Beats Rock");
        }
        else{
        console.log("Your Choice :"+playerChoice+"\nComputers Choice:"+getComputerChoice()+" Tie!");   
        }  
    }
}
//Declare the rock button
const buttonRock=document.querySelector(".rock");
//add a function to trigger on click to play the round with the buttons class value;
buttonRock.addEventListener("click",function(){
    playRound(this.classList.value); 
})

const buttonPaper=document.querySelector(".paper");

buttonPaper.addEventListener("click",function(){
    playRound(this.classList.value); 
})

const buttonScissors=document.querySelector(".scissors");

buttonScissors.addEventListener("click",function(){
   playRound(this.classList.value); 
})

