let a=parseInt(prompt("Enter the debit"))
let b=parseInt(prompt("Enter the credit"))

document.write("Person A Debit Amount ="+a+"<br>")
document.write("Person B Credit Amount="+b+"<br><br>")


if(a>b){
	document.write("Person A has "+(a-b)+" loss<br> ")
	document.write("Person B has "+(a-b)+" profit ")
}

else if(a<b){
	document.write("Person A has "+(b-a)+" profit <br>")
	document.write("Person B has "+(b-a)+" loss ")
}

else if(a==0){
	document.write("Person A and B has no profit & loss ")
	
}

else{
	document.write("Pls enter valid number")
}
