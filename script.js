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
console.log(getComputerChoice());