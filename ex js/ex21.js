/*21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130*/

function plano(a){
    if(a < 10){
        a = 180
        console.log(a)
    }else if(a>=10 && a<=30){
        a = 150
        console.log(a)
    }else if(a > 30 && a <= 60){
        a = 195
        console.log(a)
    }else{
        a = 230
        console.log(a)
    }
}

plano(30)
plano(56)
plano(13)
plano(75)