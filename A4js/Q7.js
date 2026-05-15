let numeros=[1,2,3,4,5,6]

function filtrar(numeros, n=3) {
    console.log(numeros.filter((numero) => numero%n === 0))
}
filtrar(numeros)
