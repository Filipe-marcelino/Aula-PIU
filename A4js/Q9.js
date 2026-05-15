let numeros=[1,2,3,4,5,6]

function somar(numeros) {
    console.log(numeros.reduce((total, numero) => total+numero,0));
    
}

somar(numeros)
