/*11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.*/

function bissexto(a){
    if(a>=400){
        var b = a % 400
        if(a % 400 == 0){
        console.log("O ano é bissexto " + a )
        }if(b % 100 == 0 && a % 400 != 0){
        console.log("O ano não é bissexto " + a )
        }if(b % 100 != 0 && a % 4 == 0){
        console.log("O ano é bissexto " + a )
        }
    }if(a < 400){
        if(a % 100 == 0){
            console.log("O ano não é bissexto " + a )
            }if(a % 100 != 0 && a % 4 == 0){
            console.log("O ano é bissexto " + a )
            }
    }
}
bissexto(400)
bissexto(24)
bissexto(200)
bissexto(2020)
