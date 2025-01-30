let saldo = 10000;
let maiorValorInserido = 0;
let somaValoresInseridos = 0;
let totalDeTransicoes = 0;
let continuar = false 

do {
    const nome = prompt("Insira seu nome:");
    const cpf = prompt("Insira seu CPF:");
    const valor = Number(prompt("Insira o valor da transação: "));
    const operacao = prompt("Insira qual operação deseja realizar: SAQUE / DEPÓSITO");

    if (valor < 0) {
        console.log("Valor inválido. Não foi possível realizar a transação.");
    } else if (operacao == "SAQUE" && valor>saldo) {
        console.log("Saldo insuficiente. Operação não realizada.");
    } else if (operacao == "SAQUE") {
        console.log(`Olá, ${nome} (${cpf}), seu saldo atualmente é de R$$${saldo}.`);
        saldo -= valor;
        totalDeTransicoes++;
        somaValoresInseridos += valor;
        if (valor > maiorValorInserido) {
            maiorValorInserido = valor;
        }
        console.log(`Transação realizada. Seu saldo é de R$${saldo}.`);
    } else {
        console.log(`Olá, ${nome} (${cpf}), seu saldo atualmente é de R$$${saldo}.`);
        saldo += valor;
        totalDeTransicoes++;
        somaValoresInseridos += valor;
        if (valor > maiorValorInserido) {
            maiorValorInserido = valor;
        }
        console.log(`Transação realizada. Seu saldo é de R$${saldo}.`);
    }

    const opcao = prompt("Deseja continuar? (1 para continuar, 2 para parar):");
    if (opcao === "1") {
        continuar = true
    } else if (opcao === "2") {
        continuar = false
    } else {
        console.log("Opção inválida.");
        continuar = false
    }

} while (continuar)

console.log(`Saldo final: R$${saldo}`);
console.log(`Maior valor inserido: R$${maiorValorInserido}`);
console.log(`Média dos valores inseridos: R$${(somaValoresInseridos / totalDeTransicoes)}`);