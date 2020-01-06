var a = ["cake","apple pie","cookie","chips","patties"]
var user_choice = prompt("Welcome to ABC Backery What do you want to order sir/ma'am? ");

for (var i = 0; i < a.length;i++){
	if (a[i] == user_choice){
		alert(user_choice+" is available at index "+a.indexOf(a[i])+ " in our backer");
	}
	else {
	(user_choice+" not found");
    }	
};


