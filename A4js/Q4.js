let numeros=[1,2,3,4,5,6]
function multiplicar( numeros, n=3) {
    console.log(numeros.map(numero => numero*n))
}

multiplicar(numeros)
