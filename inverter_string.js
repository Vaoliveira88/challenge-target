function inverterString(str) {
    let invertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i];
    }
    return invertida;
}

const entrada = "Exemplo de string";
const resultado = inverterString(entrada);
console.log(`String original: ${entrada}`);
console.log(`String invertida: ${resultado}`);