//this is an algorithm to take a string and turn every first letter of every word uppercase

function titleCase(str){
	//here we go ahead and set the string to all lowercase so we can have a fresh start
	str = str.toLowerCase();
	//here we split the string into an array, each word being an element
	str = str.split(" ");
	//we loop through that array
	for(var i = 0; i < str.length; i++){
		//the currently selected element has its first character turned uppercase and then it slices the rest of the letters in that element off
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
 	}
 	//we join the elements of our str array back together with spaces between the woods
	str = str.join(" ");
	return str;
}


console.log(titleCase("I'm a little tea pot"));//return: I'm A Little Tea Pot
console.log(titleCase("sHoRt AnD sToUt"));//return: Short And Stout
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));//return: Here Is My Handle Here Is My Spout