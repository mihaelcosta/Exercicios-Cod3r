/*04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
*/

function divisao (x, y){
    var a = x % y
    var b = x / y
    
    console.log("O resultado da divisão é: "+ b)
    console.log("O resto da divisão é: "+a)
}

divisao(6,3)
divisao(6,4)
divisao(9,4)