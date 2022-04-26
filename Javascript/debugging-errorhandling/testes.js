function verificaPalindromo(string) {
    if (!string) throw "String inválida";

    return string === string.split('').reverse().join('');
}

// new Error(message, fileName, lineNumber)
const ErroString = new Error('String Palindromo Inválida');
ErroString.name = 'String Error'

function tryCatchExemplo(string) {
    try {
        verificaPalindromo(string);
    }
    catch(e) {
        if(e.includes('String')){
            throw ErroString 
        }else{
            throw e;
        }
    }finally{
        console.log("A string enviada foi: " + string)
    }
}    

tryCatchExemplo('')