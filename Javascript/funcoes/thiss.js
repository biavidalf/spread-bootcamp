let amigo = {
        nome: 'Beatriz',
        idade: 18
}
let primo = {
        nome: 'Felipe',
        idade: 20
}

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

/* console.log(calculaIdade.call(pessoas[0], 2)) */
console.log(calculaIdade.apply(primo, [3]))