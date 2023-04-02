var msg1 = document.getElementById("message1")
var msg2 = document.getElementById("message2")
var msg3 = document.getElementById("message3")

var answer = Math.floor(Math.random()*55) + 1;
var no_of_guesses = 0;

function chooseRand(){
    var user_guess = document.getElementById("input").value;
  
    if(user_guess < 5 || user_guess > 55 ){
        alert("Please Enter  a number Between 5 to 55");
    }
    else{
        no_of_guesses+= 1;

        if(user_guess < answer){
            msg1.textContent = "Your Guess is Too low"
            msg2.textContent = "No. Of Guesses : " + no_of_guesses;
        }
        else if(user_guess  > answer){
            msg1.textContent = "Your Guess is Too High"
            msg2.textContent = "No. Of Guesses : " +
            no_of_guesses;
        }
        else if(user_guess == answer){
            msg1.textContent = "Gotcha That!"
            msg2.textContent = "the Number was " + answer
            msg3.textContent = " You guessd it in  " +   no_of_guesses   +" Guesses"; 
        }
    }
}