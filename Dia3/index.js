let nome = ""
let idade=0
let altura= 0
let peso= 0

nome=prompt("Digite seu nome:")
idade=parseInt(prompt("Digite sua idade:"))
altura=parseFloat(prompt("Insira sua altura:"))
peso=parseInt(prompt("Insira seu peso:"))

let anoDeNascimento=0
anoDeNascimento=2023-idade

let Imc=0
Imc=peso/ (altura*altura)

console.log("Olá " +nome + ",você tem " +idade+" anos,nasceu em "+anoDeNascimento+ ",tem "+altura+ " de altura,pesa "+peso+" kg e seu Imc é "+Imc+ " kg/m2 ")
