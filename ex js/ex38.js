/*38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.
*/

var inicio = 0 
var fim = 100

function impar (inicio, fim){
    if(inicio<fim){
        for(i = inicio; i <= fim; i++){
            if((i+1)%2==0){
                console.log("O numero "+ i +" é um numero ímpar")
            }
        }
    }else{
        for(i = fim; i <= inicio; i++){
            if((i+1)%2==0){
                console.log("O numero "+ i +" é um numero ímpar")
            }
        }
    }
}

impar(fim, inicio)