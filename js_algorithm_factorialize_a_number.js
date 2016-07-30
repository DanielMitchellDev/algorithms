//the following algorithm attempts to return the factorial of a provided interger

function factorialize(num){
//first we set a token to hold our base starting number of 1
var token = 1;
//the for loop will loup through and add 1 to our multiplier for each number until it equals the original passed in value
for(var i = 1; i <= num; i++){
//we multiply our token each time by our new multiplier 	
	token *= i;
}
//then finally we return token which is holding our new number
return token;

}


console.log(factorialize(5));//should return: 120
console.log(factorialize(10));//should return: 3628800
console.log(factorialize(20));//should return: 2432902008176640000
console.log(factorialize(0));//should return: 1