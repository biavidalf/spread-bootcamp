// --------- MAP
const numeros_map = [1, 2, 3, 4, 6]
console.log('\nMap - Numeros ao quadrado: \n' + numeros_map.map(numero => numero**2))

// Exemplo: questão anulada, dar 2.5 pontos a mais para todos os alunos
const aumento = {
    valor: 2.5
}
const notas = [5, 4, 3]
function aumentarNotas(nota){
    return nota + this.valor
}
console.log('\nMap - Aumentar nota: \n' + notas.map(aumentarNotas, aumento))


// --------- FILTER
const numeros_filter = [1, 2, 3, 4, 6]
console.log('\n\nFilter - Numeros Pares: \n' + numeros_filter.filter(numero => numero % 2 == 0))


// --------- REDUCE
// 1
const numeros_reduce = [1, 2, 3]
console.log('\n\nReduce 1: \n' + numeros_reduce.reduce((acumulador, valor_atual) => acumulador += valor_atual))

// 2
const precos = [10.90, 2.10]
console.log('\nReduce 2 - saldo atual: \n' + precos.reduce((saldo, preco_atual) => saldo -= preco_atual, 20))