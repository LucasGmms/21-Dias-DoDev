//motorista
//criando variáveis
let nome
let idade
let temCarta= false
let temCarro= false 

//chamando as variáveis
nome=prompt("Insira seu nome:")
idade=parseInt(prompt("Insira sua idade:"))
let cartaDeMotori=prompt("Você tem carteira de motorista? (sim/não)")
if(cartaDeMotori==="sim"){temCarta=true }
let carro=prompt("Você tem um carro? (sim/não)")
if(carro==="sim"){temCarro=true}

//começando as condições
if(idade<18 || temCarta===false){
    console.log(nome+" ,você não pode dirigir.")
}
else if(idade>=18 && temCarta===true && temCarro===false){
    console.log(nome+ " ,você pode dirigir mas não tem um carro.")
}
else{
    console.log(nome+ " ,você será o motorista hoje.")
}
