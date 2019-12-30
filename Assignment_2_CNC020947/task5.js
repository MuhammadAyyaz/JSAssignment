// Ex.5 
var lucky_num = 8;
var user_guess = Number(prompt("Guess the Lucky number: "))
if (user_guess == lucky_num) {
	alert("Bingo! Correct answer.")
}
else if (++user_guess === lucky_num || --user_guess === lucky_num) {
	document.write("Close enough to the correct answer")
}
