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

function playRound(computerChoice,playerChoice){


    //convert playerChoice to lowercase so the user can input either uppercase or lowercase(or both mixed)
    playerChoice=playerChoice.toLowerCase();
    //Check possible win conditions for when playerInput is paper, if player won increase the playerScore
    if(playerChoice=="paper"){
        if(computerChoice == "Rock"){
            return "Your Choice :"+playerChoice+"\nComputers Choice:"+computerChoice+"You win! Paper Beats Rock";
            playerScore++;
        }
        if(computerChoice=="Scissors"){
            return "Your Choice :"+playerChoice+"\nComputers Choice:"+computerChoice+"You Lose! Scissors Beats Paper";
        }
        return "Your Choice :"+playerChoice+"\nComputers Choice:"+computerChoice+" Tie!";
    } 
    //Check possible win conditions for when playerInput is scissors, if player won increase the playerScore
    if(playerChoice=="scissors"){
        if(computerChoice == "Rock"){
            return "Your Choice :"+playerChoice+"\nComputers Choice:"+computerChoice+"You Lose! Rock Beats Scissors";
        }
        if(computerChoice=="Paper"){
            return "Your Choice :"+playerChoice+"\nComputers Choice:"+computerChoice+"You Win! Scissors Beats Paper";
            playerScore++;
        }
        return "Your Choice :"+playerChoice+"\nComputers Choice:"+computerChoice+" Tie!";       
    }   
    //Check possible win conditions for when playerInput is rock, if player won increase the playerScore
    if(playerChoice=="rock"){
        if(computerChoice == "Scissors"){
            return "Your Choice :"+playerChoice+"\nComputers Choice:"+computerChoice+"You Win! Rock Beats Scissors";
            playerScore++;
        }
        if(computerChoice=="Paper"){
            return "Your Choice :"+playerChoice+"\nComputers Choice:"+computerChoice+"\nYou Lose! Paper Beats Rock";
        }
        return "Your Choice :"+playerChoice+"\nComputers Choice:"+computerChoice+" Tie!";       
    }
}
//Declare the rock button
const buttonRock=document.querySelector(".rock");
//add a function to trigger on click to play the round with the buttons class value;
buttonRock.addEventListener("click",function(e){
    Game(this.classList.value); 
})

const buttonPaper=document.querySelector(".paper");

buttonPaper.addEventListener("click",function(){
    Game(this.classList.value); 
})

const buttonScissors=document.querySelector(".scissors");

buttonScissors.addEventListener("click",function(){
   Game(this.classList.value); 
})

function Game(playerChoice){

    console.log(playRound(getComputerChoice(),playerChoice));
}
