let confirmar = "n"
while(confirmar != "s") { 
    let nome = prompt("Insira seu nome:")
    let idade = parseInt(prompt("Insira sua idade:"))
    let salario = parseFloat(prompt("Insira seu salário atual:"))
    console.log("Olá " + nome + " ,você tem " + idade + " anos e possui atualmente um salário de " + salario)
    confirmar = prompt("Você inseriu todas as informações corretamente? (s/n)")


let aumento = 0.015

console.log("Previsão salarial para os próximos 10 anos.")

for(let ano = 1; ano <= 10; ano++) {
    salario += salario * aumento
    aumento *= 2

    console.log((2023 + ano) + " = R$" + salario)
}
}