/*17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
  A     10%
  B     15%
  C     20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/

function aumento(plano, salario){
    switch(plano){
        case 'a':  var aum = salario * 1.1
        console.log('R$'+aum.toFixed(2))
        break
        case 'b': var aum = salario * 1.15
        console.log('R$'+aum.toFixed(2))
        break
        case 'c': var aum = salario * 1.2
        console.log('R$'+aum.toFixed(2))
        break
        default: console.log("Plano Inválido")
    }
}


aumento('a', 1500)
aumento('c', 3000)
aumento('b', 2000)
aumento('d', 7000)