firstRange(20, 30);
secondRange(60, 70);

function check (number:number):string {
    const three: boolean = number % 3 === 0, five: boolean = number % 5 === 0;
    return three && five ? 'FizzBuzz'
         : three ? 'Fizz'
         : five ? 'Buzz'
         : '-';
}
function firstRange (firstNumber:number, secondNumber: number): void {
    console.log(`First Range of Numbers:
-----------------------`);
    for (let i:number = firstNumber; i <= secondNumber; i++) console.log(`${i}: ${check(i)}`);
    console.log('');
}
function secondRange (firstNumber:number, secondNumber: number): void {
    console.log(`Second Range of Numbers:
------------------------`);
    for (let i:number = firstNumber; i <= secondNumber; i++)console.log(`${i}: ${check(i)}`);
    console.log('');
}

