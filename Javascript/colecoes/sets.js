const numerosUnicos = numeros => {
    let numeros_unicos = new Set(numeros)
    return [...numeros_unicos]

}
let numeros = [30, 30, 40, 5, 223, 2049, 3034, 5]

console.log(numerosUnicos(numeros))