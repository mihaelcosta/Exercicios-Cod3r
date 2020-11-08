/*39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar*/

function changes (vetA =[], vetB = []){
    if(vetA.length == vetB.length){
        for(i=0;i<vetA.length;i++){
            vetA[i]=vetB[i]+vetA[i]
            vetB[i]=vetA[i]-vetB[i]
            vetA[i]=vetA[i]-vetB[i]
        }
        console.log(vetA)
        console.log(vetB)
    }
    
}