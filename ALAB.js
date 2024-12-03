//----------------- Take an array of numbers and return the sum.

const numArray = [1,5,7,8];
let sum = 0;
let avg = 0;

for (let i = 0; i < numArray.length; i++)
    {
	    sum += numArray[i];
    }
    
console.log(sum);

//------------------ Take an array of numbers and return the average.

for (let j = 0; j < numArray.length; j++)
    {
	    avg = sum / numArray.length;
    }

console.log(avg);

//-----------------Take an array of strings and return the longest string.

let cityArr = ["newYork", "chicago", "Ohio", "Taxas", "NorthCarolllina"];

function LongestString(){
let LongestString =" ";

for (let k = 0; k < cityArr.length; k++)
{
    if( typeof cityArr[k] === "string" && cityArr[k].length > LongestString.length)
    { 
        LongestString = cityArr [k];
    }
} return LongestString;
}
console.log(LongestString());


//-----------------Take an array of strings, and a number and return an array of the strings that are longer than the given number. 

let result = stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); 

function stringsLongerThan(arr, num) 
{
    return arr.filter(str => str.length > num);
}

console.log(result)

//Take a number, n, and print every number between 1 and n without using loops. Use recursion.



function useRecursion(n, num=1)
 {
    if (num > n)
    {
        return;
    }

    console.log(num);
    useRecursion(n, num + 1);
}

const n = 5;
useRecursion(n);