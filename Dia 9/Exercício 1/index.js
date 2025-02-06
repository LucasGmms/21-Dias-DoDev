//VARIÁVEL E DO/WHILE
let continuar = "n"

do {
let nome = prompt("Insira seu nome:")
let idade = parseInt(prompt("Insira sua idade:"))
let peso = prompt("Insira seu peso:")
let altura = prompt("Insira sua altura:")
let profissao = prompt("Insira sua profissão:")

console.log("Olá " + nome + " ,você tem " + idade + " ,pesa " + peso + " kg, tem " + altura + " de altura e é " + profissao + ".")

if (idade >= 18) { 
    console.log("Está liberado para tomar umas geladas.")
} else { 
    console.log("Sem gelada para você.")
}

//DESCOBRINDO A IDADE EXATA
let meses = idade * 12
let semanas = idade * 52
let dias = idade * 365

console.log(nome + " , você tem exatamente " + idade + " anos, " + meses + " meses, " + semanas + " semanas e " + dias + " dias.")

//DESCOBRINDO O IMC
let imc = peso / (altura * altura)

if (imc < 18.5) {
    console.log("Magreza")
} else if (imc > 18.5 && imc < 24.9) {
    console.log("Normal")
} else if (imc > 24.9 && imc <= 30) {
    console.log("Sobrepeso")
} else {
    console.log("Obesidade")
}

//DESCOBRINDO ANO DE NASCIMENTO
let anoAtual = 2023
let anoNasc = anoAtual - idade
console.log("Você nasceu em " + anoNasc + ".")

//ANOS VIVIDOS E FOR
let anosVividos = anoNasc
let idadeAtual = 0

for (anosVividos = anoNasc; anosVividos <= anoAtual; anosVividos++) { 
    console.log(anosVividos + "-" + idadeAtual + " anos de idade")
    idadeAtual++
}

 continuar = prompt("Você deseja inserir novos dados? (s/n)")   
} while (continuar == "s")
    console.log("Programa encerrado.")
   