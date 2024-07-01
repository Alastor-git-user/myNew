/*Given a positive number n, and a positive integer p; 
we want to find a positive integer k, if exists. 
So the sum of the digits of n taken to the successive powers of p is equal to n * k.*/

function lookFor(n,p){
	let sum = 0;
	for (let i of breakDown(n)){
		sum += i**p;
		p ++;
	}
	let k = 1;
	while(k*n <= sum){
		if (k*n==sum){
			return k
		}
		k++;
	}
	//sum = breakDown(n).reduce((a,b)=>{a+b});
	return -1;
}

function breakDown(n){ //funcion extrae los elementos en un array [a,b,c,d,...]
	newArray = [];
	while(n > 0){
		newArray.unshift(n%10);
		n = Math.trunc(n/10);
	}
	return newArray;
}

console.log(lookFor(92,1))