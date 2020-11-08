/*07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.*/
var x1, x2

function Bhaskara(a, b, c){
    var delta = b*b - 4*a*c
    if(delta < 0){
        console.log("Delta é negativo!")
    }else if(delta == 0){
         x1 = -b / 2*a 
         x2 = -b / 2*a 
         var Resultado = [x1 , x2]
        console.log(Resultado)
    }else{
         x1 = (-b + Math.sqrt(delta))/ 2*a 
         x2 = (-b - Math.sqrt(delta)) / 2*a 
         var Resultado = [x1 , x2]
        console.log(Resultado)
    }
    
}

Bhaskara( 1, 4, 3)
Bhaskara(1, 4, 4)
Bhaskara(-1 ,4,4)