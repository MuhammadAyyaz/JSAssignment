
var user_sel=Number(prompt(
	
	"1. Addition " +	"\n2. Multiplication "+
	"\n3. Substraction "+
	"\n4. Division "+
	"\n5. Mudulous "))

var val1=Number(prompt("Enter first value: "))
var val2=Number(prompt("Enter second value: "))

if (user_sel == 1){
	document.write(val1+val2);
}
else if (user_sel == 2){
	(val1 * val2);
}
else if (user_sel == 3){
	document.write(val1 -val2);
}
else if (user_sel == 4){
	document.write(val1 / val2);
}
else if (user_sel == 5){
	document.write(val1 % val2)
}
