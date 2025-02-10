let array = []
let indices = []
let contadorDeIndice = 0

let numeroProcurado = parseInt(prompt("Insira o número que deseja procurar:"))

for (let i = 0; i < 10; i++) {
    let elementos = parseInt(prompt("Insira o " + i + "º elemento:"))
    array[i] = elementos
}

for (let i = 0; i < 10; i++) {
    if (array[i] === numeroProcurado) {
        indices[contadorDeIndice] = i
        contadorDeIndice++
    }
}

console.log(`O número ${numeroProcurado}, foi encontrado nos índices: ${indices}`)