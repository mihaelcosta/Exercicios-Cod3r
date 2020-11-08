/*37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.*/

function PA(n, a1, r){
    var an = a1 + (n -1)*r
    for(i = 0; i < n; i++){
         var a = a1 + i*r
         console.log(a)
    }
    var S = ((a1 + an)*n)/2
    console.log("A soma da PA é: " + S)
}

function PG(n, a1, r){
    var an = a1 * (Math.pow(r, (n-1)) )
    for(i = 0; i < n; i++){
        var a = a1*(Math.pow(r,i))
        console.log(a)
    }
    var oi = Math.pow(r,n)
    var S = (a1*(oi-1))/(r-1)
    console.log("A soma da PG é: " + S)
}
PA(10, 2, 2)
PG(10, 2, 2)