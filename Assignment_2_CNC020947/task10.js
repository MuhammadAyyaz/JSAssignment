var password = "pak@123"

var user_pass= prompt("Enter the Password: ")
if (user_pass == ""){
	alert("Please enter the password")
}
else if (user_pass == password){
	alert("Correct! Password")
}
else {
	alert("Incorrect Password")
}
