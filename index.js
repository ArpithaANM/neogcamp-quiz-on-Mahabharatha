//Take username as input
var readlineSync = require('readline-sync');
var userName = readlineSync.question("Hello, Enter your Name: ");

//Welcome User
const chalk = require('chalk');
console.log(chalk.yellow("Welcome " + userName + " to quiz on MAHABHARATHA"));
console.log("\n");

var score = 0;
//function for checking if the entered answer is correct
function play(question,answer){
  
  var userAnswer = readlineSync.question(question);
  console.log("You selected "+ userAnswer);

  if(userAnswer===answer){
    console.log(chalk.green("Right Answer!"));
    score = score + 1;
  }else{
    console.log(chalk.red("Wrong Answer!"));
  }
}

var queAndAnsList = [{question: "Who was the mother of Karna?\n a. Sita\n b. Kunti\n c. Radha\n d. Uttara\n",answer: "b"},
{question: "Karna was the blessed son of which celestial body?\n a. The Moon\n b. Jupiter\n c. The Sun\n d. Saturn\n",answer: "c"},
{question: "Who won the war of Kurukshetra?\n a. The Pandavas\n b. The Indians\n c. The Kauravas\n d. The British\n",answer: "a"},
{question: "Who was the writer of the Mahabharata?\n a. Ved Vyas\n b. Valmiki\n c. Shri Krishna\n d. Rama\n",answer: "a"},
{question: "Ashwatthama was the son of who?\n a. Dussashan\n b. Dronacharya\n c. Bhishma\n d. Duryadhan\n",answer: "b"},
{question: "Who was the father of Bhishma?\n a. Shantanu\n b. Krishna\n c. Narad\n d. Shiva\n",answer: "a"},
{question: "Whom did Gandhari curse after the war described in the Mahabharata?\n a. Bheem\n b. Arjun\n c. Judhisthir\n d. Krishna\n",answer: "d"},
{question: "What was the actual reason for the War of Kurukshetra?\n a. Shakuni's treachery\n b. Infatuation of Duryadhan and Karna for Draupadi\n c. Yudhisthir's greed\n d. Draupadi's vanity\n",answer: "b"},
{question: "Who was the wife of Dhritarashtra?\n a. Sita\n b. Kunti\n c. Satarupa\n d. Gandhari\n",answer: "d"},
{question: "What was the true name of Bhishma?\n a. Karna\n b. Arjuna\n c. Devabrata\n d. Pallove\n",answer: "c"}
];

for(var i=0; i<queAndAnsList.length; i++){
  var result = queAndAnsList[i];
  play(result.question,result.answer,result.choices);
  console.log("\n");
  
  if(score===4){
    console.log(chalk.cyan("Congrats!! You have completed LEVEL 1..On to LEVEL 2"))
    console.log("\n");
  }
  if(score===7){
    console.log(chalk.cyan("Congrats!! You have completed LEVEL 2..On to LEVEL 3"))
    console.log("\n");
  }
  if(i===3 && score<4){
    console.log(chalk.magentaBright("Sorry!.. You couldn't go to LEVEL 2"));
    break;
  }
  if(i===6 && score<7){
    console.log(chalk.magentaBright("Sorry!.. You couldn't go to LEVEL 3"));
    break;
  }
}
if(score===10){
  console.log(chalk.blueBright("Congratulations!!!..You have answered correctly to all the questions :)"))
}else{
console.log(chalk.redBright("You scored: "+ score));
}

