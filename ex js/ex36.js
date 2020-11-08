/*36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
*/

function receber(vet = [], b){
   for(a = 0; a < vet.length; a++){
    vet[a] = vet[a] * b
   }
   console.log(vet)
}

function receber5(vet = [], b){
    for(a = 0; a < vet.length; a++){
        if(vet[a] > 5){
            vet[a] = vet[a] * b
        }else{
            vet[a] = vet[a]
        }
    }
    console.log(vet)
 }


receber([1, 3, 5], 5)
receber5([2, 14, 2, 13, 190], 6)