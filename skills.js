
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }

    const queue = [0, 1];
    let i = 2;

    while (i <= n) {
        const a = queue.shift();
        const b = queue[0];
        queue.push(a + b);
        i++;
    }

    return queue.pop();
}
function catalog(event){
    const a = event.target.value;

}
function calculateNumbers(var1, var2) {
    return var1 + var2;
}
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function isPrime(n) {
    if (n <= 1) {
        return false;
    }

    const primes = new Array(n + 1).fill(true);
    primes[0] = false;
    primes[1] = false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (primes[i]) {
            for (let j = i * i; j <= n; j += i) {
                primes[j] = false;
            }
        }
    }

    return primes[n];
}


