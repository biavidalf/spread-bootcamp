// Map
const array = [1, 2, 3, 4]

console.log('Map: ' + array.map((item) => item*2))

// Filter - callback(item, index, array)
// na forma de função anonima invés de arrow function
/* const macas = function(fruta){
    return fruta.includes('Maçã')
} */
const frutas = ['Maçã vermelha', 'Maçã verde', 'Limão Taiti']
console.log('\nFilter frutas: ' + frutas.filter(fruta => fruta.includes('Maçã')))
console.log('Filter numeros: ' + array.filter((num) => num < 3))

// Reduce
const numeros = [1, 2, 3]

console.log('\nReduce: \n' + numeros.reduce((acumulador, valor_atual) => acumulador += valor_atual))
