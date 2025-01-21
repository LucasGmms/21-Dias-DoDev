//Exercício: POSTO DE GASOLINA
//VARIÁVEL
let valor
let quantidade
let opção=parseInt(prompt("Bem vindo ao Posto de Gasolina, o que gostaria hoje?"
    + "\n1=Abastecer com gasolina. \n2=Abastecer com alcóol. \n3=Calibrar os pneus."))

//SWITCHCASE
    switch(opção){
        case 1:
            valor=parseInt(prompt("Insira o valor desejado:"))
            quantidade= valor / 5
            console.log("Você abasteceu, " +  quantidade + " litros de gasolina.")
            break;
        case 2:
            valor=parseInt(prompt("Insira o valor desejado:"))
            quantidade=valor / 3
            console.log("Você abasteceu, " + quantidade + " litros de alcóol.")
            break;
        default:
            console.log("Pneus calibrados com sucesso.")
            break;
    }