/*16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
*/

function calculadora(a,b,c){
    switch(b){
        case '+': var r = a + c
        console.log("Soma "+r)
        break
        case '-': var r = a - c
        console.log("Subtração "+r)
        break
        case '*': var r = a * c
        console.log("Multiplicação "+ r)
        break
        case '/': var r = a / c
        console.log("Divisão "+r)
        break
        default: console.log("Operação inválida")

    }
}



calculadora(4, '-', 2)
calculadora(3, '+', 3)
calculadora(6, '*', 5)
calculadora(10, '/', 2)
calculadora(11, '$', 3)