let alunos = [
    {
        nome: 'Beatriz',
        nota: 7
    }, 
    {
        nome: 'Lucas',
        nota: 5
    },
    {
        nome: 'Jéssica',
        nota: 9
    }
]

function alunosAprovados(alunos, media){
    let aprovados = []

    for (let aluno in alunos){
        const {nota, nome} = alunos[aluno]

        if(nota >= media){
            aprovados.push(nome)
        }
    }
    
    return aprovados
}
console.log(alunosAprovados(alunos, 6))