var readlineSync = require('readline-sync')
var score = 0;
console.log("-----Lets Check How Well do you know Breaking Bad -----")
console.log(" You will get 1 point for each right answer!! All the best :)\n\n ")
console.log("------------------------------------")

function quiz(question,answer){
  var userAns = readlineSync.question(question)
  if(userAns === answer){
  console.log("Right answer.")
  score = score + 1
  console.log("Current Score--",score)
}else{
  console.log("Wrong answer!")
}}
// FIRST LEVEL STARTS FROM HERE


quiz("Which song best describes the style of Saul Goodman’s office? ","Panama")
quiz("Walt’s pre-Heisenberg vehicle, the one he runs over the gangsters in, is a… ","Pontiac Aztek")
quiz("What distracts Walt from absorbing the news of his cancer diagnosis?","Doctor")

// LEVEL 2 STARTS FROM HERE


if(score === 3){
  console.log("Congratulations you cleared level 1")
  quiz("What primitive weapon do Tuco’s murderous cousins favor? ","axes")
  quiz("What is Marie’s favorite color?:","Purple")
  quiz("When Walt retired from the meth game, how much money did he walk away with? ","80 million")
  quiz("Walt doesn’t call it the meth game, though. He calls it…","The empire business”")
}else{
  console.log("You lose !!")
}
//LEVEL 3 STARTS FROM HERE ----


if(score === 7){
  console.log("Congatulations!\tYou cleared level 2\tWelcome to the FINAL LEVEL")
  console.log("---------------------------------")
  quiz("Where is Gus Fring from?","Chile")
  quiz("Gale Boetticher’s go-to karaoke song is…","Major Tom")
  quiz("What stolen item first brings Marie’s kleptomania to a head? ","A baby tiara")
  quiz("What drug do we NOT see Jesse use?","ecstasy.")
}else{
  console.log("Better Luck Next Time!!!")
  console.log("Your highest score is - ",score)
}
if(score===11){
  console.log("Heyy, congatulations!!\nYou won this game")
  console.log("Your highest score is -",score)
}