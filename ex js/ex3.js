/*03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente*/
function pow(x, y){
    var resultado = 1
    for(i=0;i<y;i++){
        resultado = resultado * x
    }
    console.log(resultado)
}

pow(5,2)
pow(3,3)
pow(2,6)