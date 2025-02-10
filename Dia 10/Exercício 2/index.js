//ARRAY ORIGINAL
let array = []
let arrayInvertido = []

for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt("Insira o " + (i + 1) + " º número:"))
    array[i] = numero
}

console.log("Array original: " + array);

//ARRAY INVERTIDO
let contador = 4;
for (let i = 0; i < 5; i++) {
    arrayInvertido[i] = array[contador]
    contador--
}

console.log("Arrar invertido: " + arrayInvertido);