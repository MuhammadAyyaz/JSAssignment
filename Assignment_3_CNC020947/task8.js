//Counting
var Counting=[]
for (var i=1;i<15;i++){
	Counting.push(i)
}
console.log(Counting)
//ReverseCounting
var reverse_counting=Counting.slice(0,10).reverse()
console.log(reverse_counting)
//Even:
var even = []
for (var i = 0; i<21 ;i++){
	if(i % 2 == 0){
		even.push(i)
	}
}
console.log(even)
//Even:
var odd = []
for (var i = 0; i<21 ;i++){
	if(i % 2 !== 0){
		odd.push(i)
	}
}
console.log(odd)

//Series:
var even = []
for (var i = 2; i<21 ;i++){
	if(i % 2 == 0){
		even.push(i+"k")
	}
}
console.log(even)