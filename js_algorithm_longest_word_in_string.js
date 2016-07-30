
//this algorithm is to return how many letters are in the longest word of a string
function longestWord(str){
	//we set our token to hold our counter
	var token = 1;

	//we split the string up at each space into a element of an array
	str = str.split(" ");
	//this for loop cycles through each element of the array
	for(var i = 0; i < str.length; i++){
		//if the current element's length is greater than our current stored token, the token is set to the current elements length
		if(token < str[i].length){
			token = str[i].length;
		}
	}
	return token;

}

console.log(longestWord("The quick brown fox jumped over the lazy dog"));//return: 6
console.log(longestWord("May the force be with you"));//return: 5
console.log(longestWord("Google do a barrel roll"));//return: 6
console.log(longestWord("What is the average airspeed velocity of an unladen swallow"));//return: 8
console.log(longestWord("What if we try a super-long word such as otorhinolaryngology"));//return: 19