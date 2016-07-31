//This algorithm is for taking in an array of arrays and returning the highest number from each array into a new array

function largestOfFour(arr){

//setup a new holder array
var result = [];
	//setup our first loop that will loop through each element of our parent array
	for(var i = 0; i < arr.length; i++){
	//setup a token to test against and hold our new values 
	var token = 0;
		//setup our loop for looping through each element in the child array
		for(var j = 0; j < arr[i].length; j++){
			//if the current selected element is greater than token for the child array we set token as that value
			if(arr[i][j] > token){
				token = arr[i][j];
			}
		}
		//we push token to our holding array before reseting it to 0 to go to the next element
		result.push(token);
	}

	return result;
}


console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
//shoudl return: [27, 5, 39, 1001]
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));
//should return: [9, 35, 97, 1000000]