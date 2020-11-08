/*28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.*/


var a
var vet = [a]
vet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(a=0;a<10;a++){
    if(vet[a] % 2 == 0){
        console.log("O numero " + vet[a] + " é par")
    }else{
        console.log("O numero " + vet[a] + " é impar")
    }
}
