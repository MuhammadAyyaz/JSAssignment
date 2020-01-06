var numbers = [1,'a',3,'b',3,1,'a','b',2,'a',5];
var new_nums=[];
// document.write("original array: "+ numbers)
for (var i = 0; i < numbers.length;i++){	
		if(new_nums.indexOf(numbers[i]) == -1){
			new_nums.push(numbers[i])
		}
}
console.log(new_nums)

