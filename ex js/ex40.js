/*40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A.*/

function notes (vet =[]){
    for(i=0;i<vet.length;i++){
        if(vet[i]>=0 && vet[i]<=4.9){
            console.log("D conccept")
            }else if(vet[i]>=5 && vet[i]<=6.9)
            console.log("C conccept")
            else if(vet[i]>=7 && vet[i]<=8.9)
            console.log("B comccept")
            else if(vet[i]>=9 && vet[i]<=10)
            console.log("A conccept")
            else
            console.log("NOTA INVALIDA")
    }
}

notes([1,12,3,6,7,10])