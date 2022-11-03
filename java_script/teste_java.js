window.alert("hello world")
var nome = window.prompt("qual seu nome? ")
window.alert("olá, " + nome)
console.log("o tipo da variável nome é: " + typeof(nome)) // string

var num1 = 1
var num2 = 2.8
console.log("o tipo da variável num1 é: " + typeof(num1)) // number
console.log("o tipo da variável num2 é: " + typeof(num2)) // number

var x = 5
var y = "5"

console.log("5 inteiro igual a 5 string? ") // verdade pois os valores sao iguais
console.log(x==y)
console.log("5 inteiro é exatamente igual a 5 string? ") // falso pois os tipos sao diferentes
console.log(x===y)

var vetor = [1, 2, 3]
console.log("quem é o primeiro elemento do vetor? " + vetor[0]) // exibiria o valor 1,
// lembre-se que a contagem dos indices começa do 0

if (10>10){
console.log("sim, 10 é maior")
} else if (typeof(nome) == "strin") {
    console.log("sim, o tipo da variável nome é string")
} else {
    console.log("qualquer coisa")
}

var option = 1
switch(option){
    case 1:
        console.log("opção 1")
    case 2:
        console.log("opção 2")
    default:
        console.log("opção inválida")
}

var sobrenome = prompt("qual seu sobrenome? ")
console.log (sobrenome)

var contador = 0
while (contador<3) {
    console.log("oi")
    contador++
}

do {
    console.log("do while")
    contador++
} while (contador<=5)