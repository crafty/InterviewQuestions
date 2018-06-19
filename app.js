//Return 3rd character
//I'm not sure if the question is an array of numbers or a string, so I did both.
let answer;
const list = [0, 1, 2, 3, 4, 5, 9];
answer = list[2];
console.log(answer);

let answer2;
const stringList = "0, 1, 2, 3, 4, 5, 9";
splitStringList = stringList.replace(/,/g,"").split(" ");
answer2 = splitStringList[2];
console.log(answer2);

//Createa a non negative number
// Provided two ways to do it
let num = -3;
const posNum = Math.abs(num);
console.log(posNum);
let num2 = -6;
posNum2 = num2 * -1;
console.log(posNum2);

// Reverse a sentence
// Provided two ways to do it
//First just reverses the order of the words, second reverses the letters
let answer3;
let helloWorld = "Hello World!";
answer3 = helloWorld.split(" ").reverse().join(" ");
console.log(answer3);

//reverse all leteres if it's only one word 
let potato = "potato";
answer4 = potato.split("").reverse().join("");
console.log(answer4);

//reverse all leters if it's multi words
let multiStri = "Hello world";
answer5 = multiStri.split("").reverse().join("");
console.log(answer5);

//FizzBuzz
//When passed a number we need to print out all numbes from 1 to the passed number
//any num that is multiple of 3 print out fizz
//any num that is multiple of 5 print out buzz
// if both priunt out fizzbuzz
const fizzBuzz = (n) => {
    for(i = 1; i <= n; i++) {
        if(i % 3 === 0 && i % 5 !== 0) {
            console.log('fizz')
        } else if( i % 5 === 0 && i % 3 !== 0) {
            console.log('buzz')
        } else if( i % 5 === 0 && i % 3 === 0) {
            console.log('fizzbuzz')
        } else {
            console.log(i)
        }
    }
};
console.log(fizzBuzz(100))


//Card Deck
let cards = [
    {
        color: "Red",
        suite: "Club",
        number: "Jack"
    },
    {
        color: "Black",
        suite: "Heart",
        value: "7"
    },
    {
        color: "Black",
        suite: "Spade",
        value: "2"
    },
    {
        color: "Red",
        suite: "Space",
        value: "6"
    }
]
const shuffleCards = cards.sort(() => 0.5 - Math.random())
console.log(shuffleCards)