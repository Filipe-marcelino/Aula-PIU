let numeros=[1,2,3,4,5,6]

const somar = (numeros) => console.log(numeros.reduce((total,numero) => total+numero, 0));
somar(numeros)
