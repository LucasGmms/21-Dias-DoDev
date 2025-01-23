//Exercício 4
let num=parseInt(prompt('Insira um número inteiro e positivo:'))

for(let i=num; i<= num + 2; i++){
    console.log("tabuada do número: "+ i)
    for(let j=0; j<=10; j++)
        console.log(i + " x " + j + " = " + (i*j))
}
