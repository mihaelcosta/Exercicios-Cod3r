/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

function jurosSimples(ci, tx, ta){
    var M = ci + (tx/100)*ta*ci
    console.log(M)
} 

function jurosCompostos(ci, tx, ta){
    tx = tx/100
    tx = tx + 1
    var M = ci + ci*pow(tx,ta)
    console.log(M.toFixed(2))
}

function pow(x, y){
    var resultado = 1
    for(i=0;i<y;i++){
        resultado = resultado * x
    }
    return resultado
}

jurosCompostos(3000,5,3)
jurosSimples(3000,5,3)