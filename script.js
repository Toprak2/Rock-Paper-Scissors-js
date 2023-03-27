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
let score=0;

function playRound(computerChoice,playerChoice){
    //convert playerChoice to lowercase so the user can input either uppercase or lowercase(or both mixed)
    playerChoice=playerChoice.toLowerCase();
    //Check possible win conditions for when playerInput is paper, if player won increase the score
    if(playerChoice=="paper"){
        if(computerChoice == "Rock"){
            return "Your Choice :"+playerChoice+"\nComputers Choice:"+computerChoice+"You win! Paper Beats Rock";
            score++;
        }
        if(computerChoice=="Scissors"){
            return "Your Choice :"+playerChoice+"\nComputers Choice:"+computerChoice+"You Lose! Scissors Beats Paper";
        }
        return "Your Choice :"+playerChoice+"\nComputers Choice:"+computerChoice+" Tie!";
    } 
    //Check possible win conditions for when playerInput is scissors, if player won increase the score
    if(playerChoice=="scissors"){
        if(computerChoice == "Rock"){
            return "Your Choice :"+playerChoice+"\nComputers Choice:"+computerChoice+"You Lose! Rock Beats Scissors";
        }
        if(computerChoice=="Paper"){
            return "Your Choice :"+playerChoice+"\nComputers Choice:"+computerChoice+"You Win! Scissors Beats Paper";
            score++;
        }
        return "Your Choice :"+playerChoice+"\nComputers Choice:"+computerChoice+" Tie!";       
    }
    //Check possible win conditions for when playerInput is rock, if player won increase the score
    if(playerChoice=="rock"){
        if(computerChoice == "Scissors"){
            return "Your Choice :"+playerChoice+"\nComputers Choice:"+computerChoice+"You Win! Rock Beats Scissors";
            score++;
        }
        if(computerChoice=="Paper"){
            return "Your Choice :"+playerChoice+"\nComputers Choice:"+computerChoice+"\nYou Lose! Paper Beats Rock";
        }
        return "Your Choice :"+playerChoice+"\nComputers Choice:"+computerChoice+" Tie!";       
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
    //Show the players and score
    console.log("Your score is: " + score);
}
game();