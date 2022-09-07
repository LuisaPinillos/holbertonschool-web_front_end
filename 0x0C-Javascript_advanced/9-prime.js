// Function that count the prime numbers from 2 to 100
// & timing execution

function countPrimeNumbers() {
    let counter = 0;
    for (let num = 2; num <= 100; num++) {
        let isprime = true;

        for (let div = 2; div < num; div++) {
            if (num % div === 0) {
                isprime = false;
            }
        }
        if (isprime == true) {
            counter += 1;
        }
    }
    return counter;
}
let Tinit = performance.now();
countPrimeNumbers();
let Tfinish = performance.now();

console.log(`Execution time of printing countPrimeNumbers was ${Tfinish - Tinit} milliseconds.`)
