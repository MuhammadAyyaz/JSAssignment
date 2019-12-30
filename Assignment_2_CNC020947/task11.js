
var user_time= Number(prompt("Enter the time: "))
if (user_time <= 1200){
	alert("Good Morning")
}
else if (user_time >=1201 && user_time <= 1700){
	alert("Good Afternoon")
}
else if (user_time >1700 && user_time <= 2100) {
	alert("Good Evening")
}
else if (user_time >2100 && user_time <= 2359) {
	alert("Good Night")
}

