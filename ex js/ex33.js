/*33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.*/

var vetorInteiro = [ 3, 4, 7, 9]

var vetorString = ['h', 'j', 'p', 'c']

var vetorDouble = [0.54, 1.12, 3.11, 4.52]

var uniao1 = vetorInteiro.concat(vetorDouble, vetorString)

var uniao2 = vetorString.concat(vetorInteiro, vetorDouble)

console.log(uniao1)
console.log(uniao2)