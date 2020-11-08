/*15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.*/

function carro(a){
    switch(a){
        case 'hatch': console.log(a + " Compra efetuada com sucesso")
        break
        case 'sedans': console.log(a +" Tem certeza que não prefere esse modelo?")
        break
        case 'motocicletas': console.log(a +" Tem certeza que não prefere esse modelo?")
        break
        case 'caminhonetes': console.log(a + " Tem certeza que não prefere esse modelo?")
        break
        default: console.log(a + " Não trabalhamos com esse tipo de automóvel aqui")
    }
}

carro('sedans')
carro('motocicletas')
carro('caminhonetes')
carro('hatch')
carro('honda')