var colors=['red','green','blue']
document.write(colors)
var user_choice=prompt(colors+"\nwhat color you want in begining: ")
colors.unshift(user_choice)
document.write("<br />"+colors)
var user_choice=prompt(colors+"\nwhat color you want at the end: ")
colors.push(user_choice)
document.write("<br />"+colors)
colors.unshift("white","black")
document.write("<br />"+colors)
colors.shift()
document.write("<br />"+colors)
var user_choice_index=Number(prompt(colors+"\nIn which index do you want to add another color: "))
var user_choice=prompt(colors+"\nwhat color you want to add in that index: ")
colors[user_choice_index]=user_choice
document.write("<br />"+colors)

var user_choice_index=Number(prompt(colors+"\nfrom which index do you want to delete color(s): "))
var user_choice_delete=Number(prompt(colors+"\nHow many colors do you want to delete: "))
colors.splice(user_choice_index,user_choice_delete)
document.write("<br />"+colors)