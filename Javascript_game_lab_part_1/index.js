let playerAns = prompt("Would you like to play");
let userHealth = 40;
let wins = 0;
let grantHealth = 10;
let player1;
let playAgain;
 
 if(playerAns === "yes"){
    player1 = prompt("What is your name");
while(wins < 3 && userHealth > 0){
  userHealth-= Math.floor(Math.random() * 2) + 1;
  grantHealth-= Math.floor(Math.random() * 2) + 1;
  console.log(`${player1} has ${userHealth} health. Grant has ${grantHealth} health`);
  if(grantHealth <= 0){
    wins++;
    grantHealth = 10;
  }
}
if(userHealth <= 0){
  console.log(`Grant has${wins} wins`);
}else{
  console.log(`${player1} has ${wins} wins`);
}
 }
