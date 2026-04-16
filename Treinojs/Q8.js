let lista = [1,2,3,656]
let cont = {
    pares: 0,
    impares: 0
}

for (let n of lista) {
    if (n%2 == 0){
        cont.pares++
    } else {
        cont.impares++
    }
}

console.log(cont)