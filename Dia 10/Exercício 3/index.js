let array = []
let arrayInvertido = []
let quantidade = parseInt(prompt("Insira a quantidade de números que será inserida no array:"))

//ARRAY ORIGINAL
for (let i = 0; i < quantidade; i++) {
    let numeros = parseInt(prompt("Insira o " + (i + 1) + "º número:"))
    array[i] = numeros
}

console.log("Array original: " + array)

//ARRAY INVERTIDO
let contador = quantidade - 1
for (let i = 0; i < quantidade; i++) {
    arrayInvertido[i] = array[contador]
    contador--
}

console.log("Array invertido: " + arrayInvertido)