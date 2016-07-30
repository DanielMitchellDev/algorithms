//this algoriithm attempts to reverse a string in javascript

function reverse(str){
//first we break the string into an array using the .split() method, with each letter and space being their own index
//then we use the array method of .reverse() to reverse their index order
//then we join them all back together as a string using .join()

	str = str.split("").reverse().join('');
	return str;
}
console.log(reverse("howdy"));//return: ydwoh
console.log(reverse("Hello World"));//return: dlorW olleH
console.log(reverse("Greetings from Earth"));//return should be: htraE morf sgniteerG