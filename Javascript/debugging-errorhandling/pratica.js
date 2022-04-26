const array = [1, 2, 3, 4]
const num = 1

function checarTamanho(arr, num){
    if(!arr || !num){
        throw new ReferenceError()
    }else if (typeof arr !== 'object'){
        throw new TypeError()
    }else if (typeof num !== 'number'){
        throw new TypeError()
    }else if (arr.length != num){
        throw new RangeError()
    }else if (arr.length == num){
        console.log(arr)
    }
}

function tratarErro(arr, num){
    try {
        checarTamanho(arr, num)
    }catch(e) {
        if(e instanceof ReferenceError){
            console.log('Preencha todos os parâmetros')
        }else if(e instanceof TypeError){
            console.log('Parâmetros inválidos')
        }else if(e instanceof RangeError){
            console.log('Tamanhos diferentes')
        }else{
            console.log(e)
        }
    }
}

tratarErro(array, 4)