// Ex.4 
var maths = Number(prompt("Numbers got in Maths: "))
var physics = Number(prompt("Numbers got in Physics: "))
var computer = Number(prompt("Numbers got in Computer: "))
var obtained =  maths + physics  + computer
var total 	= 300;
var per= (obtained * 100) / total;
var grade;
var remarks;
if (per >= 80 && per <= 100){
	grade = "A-one";
	remarks = "Excellent";
}
else if (per >= 70 && per <= 79) {
	grade= "A";
	remarks = "Good";
}
else if (per >= 60 && per <=69) {
	grade= "B";
	remarks = "You need to improve";
}
else if (per < 60 ) {
	grade= "Fail";
	remarks = "Sorry";
}
document.write("<h1>Marks Sheet</h1>"+
	"Total marks: " + total +
	"<br />Obtained marks: " + obtained +
	"<br />Percentage: " + per +
	"<br />Grade: " + grade +
	"<br />Remarks: " + remarks)

