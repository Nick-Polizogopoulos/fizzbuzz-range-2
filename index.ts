firstRange(20, 30);
secondRange(60, 70);

function check (x: number):string {
    const t: boolean = x % 3 === 0, f: boolean = x % 5 === 0;
    return t && f ? 'FizzBuzz' : 
                t ? 'Fizz' :
                f ? 'Buzz' : 
                '-';
}
function firstRange (one:number, two: number): void {
    console.log(`First Range of Numbers:
-----------------------`);
    for (let i:number = one; i <= two; i++) console.log(`${i}: ${check(i)}`);
    console.log('');
}
function secondRange (one:number, two: number): void {
    console.log(`Second Range of Numbers:
------------------------`);
    for (let i:number = one; i <= two; i++)console.log(`${i}: ${check(i)}`);
    console.log('');
}

