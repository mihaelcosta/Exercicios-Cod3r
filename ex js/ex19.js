/*19) O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.*/

function cardápio(cod, qtd){
    switch(cod){
        case 100: var v = 3 * qtd
        console.log(qtd + 'Cachorro Quente' + ' R$ ' + v.toFixed(2))
        break
        case 200: var v = 4 * qtd
        console.log(qtd + ' Hamburguer Simples R$ ' + v.toFixed(2))
        break
        case 300: var v = 5.5 * qtd
        console.log(qtd + ' Cheeseburguer R$ ' + v.toFixed(2))
        break
        case 400: var v = 7.5 * qtd
        console.log(qtd + ' Bauru R$ ' + v.toFixed(2))
        break
        case 500: var v = 3.5 * qtd
        console.log(qtd + ' Refrigerante R$ ' + v.toFixed(2))
        break
        case 600: var v = 2.8 * qtd
        console.log(qtd + ' Suco R$ ' + v.toFixed(2))
        break
        default: console.log("Produto não existente")
    }
}
console.log("Pedido do Cliente:")
cardápio(600, 1)
cardápio(200, 2)
cardápio(500, 2)
cardápio(400, 1)