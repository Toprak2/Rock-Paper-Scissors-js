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


function playRound(computerChoice,playerChoice){
    //convert playerChoice to lowercase so the user can input either uppercase or lowercase(or both mixed)
    playerChoice=playerChoice.toLowerCase();
    //Check possible win conditions for when playerInput is paper
    if(playerChoice=="paper"){
        if(computerChoice == "Rock"){
            return "You win! Paper Beats Rock";
        }
        if(computerChoice=="Scissors"){
            return "You Lose! Scissors Beats Paper";
        }
        return "Tie!";
    } 
    //Check possible win conditions for when playerInput is scissors
    if(playerChoice=="scissors"){
        if(computerChoice == "Rock"){
            return "You Lose! Rock Beats Scissors";
        }
        if(computerChoice=="Paper"){
            return "You Win! Scissors Beats Paper";
        }
        return "Tie!";       
    }
    //Check possible win conditions for when playerInput is rock
    if(playerChoice=="rock"){
        if(computerChoice == "Scissors"){
            return "You Win! Rock Beats Scissors";
        }
        if(computerChoice=="Paper"){
            return "You Lose! Paper Beats Rock";
        }
        return "Tie!";       
    }
}

function game(){
    //define a variable for user input
    let playerChoice;

    //create a game loop game will take place in this for loop
    for(let i=0;i<5;i++){
        //get the user's choice
        playerChoice=prompt("Please enter Rock ,Paper or Scissors:");
        //play the round give information to the player.
        console.log(playRound(getComputerChoice(),playerChoice));
    }
}
game();