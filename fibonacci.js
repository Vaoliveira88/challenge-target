function isFibonacci(num) {
    let a = 0;
    let b = 1;

    while (a <= num) {
        if (a === num) {
            return `O número ${num} pertence à sequência de Fibonacci.`;
        }
        const proximo = a + b;
        a = b;
        b = proximo;
    }
    return `O número ${num} NÃO pertence à sequência de Fibonacci.`;
}

const numero = 21;
console.log(isFibonacci(numero));
