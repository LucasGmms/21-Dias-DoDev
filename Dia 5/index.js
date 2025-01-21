//Exercício: OPERAÇÃO MATEMÁTICA
//VARIÁVEL
let num1=Number(prompt("Escolha um número"))
let num2=Number(prompt("Escolha outro número"))
let opção=parseInt(prompt("Qual operação matemática você quer que seja feita?"
   + "\n1=+; \n2=-; \n3=*; \n4=/;" ))

//SWITCHCASE
switch(opção){
    case 1:
        console.log(num1 + "+" + num2 + "=" + (num1 + num2))
        break;
    case 2:
        console.log(num1 + "-" + num2 + "=" + (num1 - num2))
        break;
    case 3:
        console.log(num1 + "*" + num2 + "=" + (num1 * num2))
        break;
    default:
        console.log(num1 + "/" + num2 + "=" + (num1 / num2))
        break;
}