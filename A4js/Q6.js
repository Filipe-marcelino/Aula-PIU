let numeros=[1,2,3,4,5,6]

function filtrar(numeros) {
    console.log(numeros.filter((numero) => numero%2 === 0))
}
filtrar(numeros)
