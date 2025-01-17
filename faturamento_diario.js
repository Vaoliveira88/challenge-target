const faturamentoDiario = [0, 1000, 2000, 3000, 0, 0, 5000, 7000, 0, 10000];

function analisarFaturamento(faturamento) {
    const diasValidos = faturamento.filter(valor => valor > 0);

    const menorValor = Math.min(...diasValidos);
    const maiorValor = Math.max(...diasValidos);

    const somaTotal = diasValidos.reduce((acc, valor) => acc + valor, 0);
    const mediaMensal = somaTotal / diasValidos.length;

    const diasAcimaMedia = diasValidos.filter(valor => valor > mediaMensal).length;

    return { menorValor, maiorValor, diasAcimaMedia };
}

const resultado = analisarFaturamento(faturamentoDiario);
console.log(`Menor valor: R$${resultado.menorValor.toFixed(2)}`);
console.log(`Maior valor: R$${resultado.maiorValor.toFixed(2)}`);
console.log(`Dias com faturamento acima da média: ${resultado.diasAcimaMedia}`);