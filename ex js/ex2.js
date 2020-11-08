/*02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/

function triangulo (a, b, c){
    if(a == b && a == c){
        console.log("O triangulo é equilatero")
    }else if(a == b && a != c){
        console.log("O triangulo é isosceles")
    }else if(a == c && a != b){
        console.log("O triangulo é isosceles")
    }else if(b == c && b != a){
        console.log("O triangulo é isosceles")
    }else{
        console.log("O triangulo é escaleno")
    }
}

triangulo(5,6,7)
triangulo(7,7,7)
triangulo(6,7,7)
triangulo(6,6,7)
triangulo(7,6,7)
