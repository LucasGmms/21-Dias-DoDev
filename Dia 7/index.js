let media=0
let qntdHomens=0
let notaMulheresacima7=0
let maiorNotaHomens=0
let contador =1

while(contador<=10){
    nota=parseInt(prompt("Insira a nota do " + contador + "aluno"))
    sexo=prompt("Insira seu sexo: (m/f)")

    if(sexo== "m"){
    if(nota > maiorNotaHomens){
        maiorNotaHomens = nota
    }
    qntdHomens++
    }

    if(sexo== "f" && nota> 7){
    
        notaMulheresacima7 ++
        
    }
    media += nota
    contador ++
}
media= nota/10

console.log("A média geral dos alunos é " + media)
console.log(qntdHomens + " homens enviaram as notas.")
console.log(notaMulheresacima7 + " mulheres tiveram a nota acima de 7.")
console.log(maiorNotaHomens + " foi a maior nota entre os homens.")