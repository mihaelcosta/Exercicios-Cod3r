/*23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.*/


function nota(d,b,c,a){
    if(a >= b && a >= c){
        c = c * 3
        a = a * 4
        b = b * 3
        var e = ( a + b + c)/10
        if(e >= 5){
            console.log(d + " (" + (a/4) + ' ' + (b/3) + ' ' + (c/3) + ") " + e + " Aprovado")
        } else{
            console.log(d + " (" + (a/4) + ' ' + (b/3) + ' ' + (c/3) + ") " + e + " Reprovado")
        }
    }
    else if(b >= a && b >= c){
        c = c * 3
        a = a * 3
        b = b * 4
        var e = ( a + b + c)/10
        if(e >= 5){
            console.log(d + " (" + (a/3) + ' ' + (b/4) + ' ' + (c/3) + ") " + e + " Aprovado")
        } else{
            console.log(d + " (" + (a/3) + ' ' + (b/4) + ' ' + (c/3) + ") " + e + " Reprovado")
        }
    }else if (c >= a && c >= b){
        c = c * 4
        a = a * 3
        b = b * 3
        var e = ( a + b + c)/10
        if(e >= 5){
            console.log(d + " (" + (a/3) + ' ' + (b/3) + ' ' + (c/4) + ") " + e + " Aprovado")
        } else{
            console.log(d + " (" + (a/3) + ' ' + (b/3) + ' ' + (c/4) + ") " + e + " Reprovado")
        }
    }
        
    }


    nota(5544, 6, 7, 9)
