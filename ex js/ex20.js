/*20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1*/

function nota(a){
    console.log("VALOR: "+ a)
    var b = a % 100
    var b1 = a / 100
    if(b1>=1){
    b1 = b1.toString()
    b2 = b1.split('.')
    console.log(b2[0]+" Notas de 100")
    }
    var c = b % 50
    var c1 = b / 50
    if(c1>=1){
    c1 = c1.toString()
    c2 = c1.split('.')
    console.log(c2[0]+" Notas de 50")
    }
    var d = c % 10
    var d1 = c / 10
    if(d1>=1){
    d1 = d1.toString()
    d2 = d1.split('.')
    console.log(d2[0]+" Notas de 10")
    }
    var e = d % 5
    var e1 = d / 5
    if(e1>=1){
    e1 = e1.toString()
    e2 = e1.split('.')
    console.log(e2[0]+" Notas de 5")
    }
    var f = e % 1
    var f1 = e / 1
    if(f1>=1){
    f1 = f1.toString()
    f2 = f1.split('.')
    console.log(f2[0]+" Notas de 1")
    }
}

nota(15)
nota(139)
nota(12)