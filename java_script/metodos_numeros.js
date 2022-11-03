var x = 1

var y = x.toString(); // essse método transforma o conteúdo variável em string

console.log(x + typeof(x))
console.log(y + typeof(y))

var a = 10
var b = 7
var c = 2

console.log(((a+b+c)/3).toFixed(2)) // esse método delimita a quantidade de casas decimais
// após a vírgula, essa quantidade é passada por parametro


console.log(Number(true))
// number em booleanos devolve seu valor nesse caso 1
console.log(Number(false))
// number em booleanos devolve seu valor nesse caso 0
console.log(Number("10"))
// number em string devolve seu valor numerico aqui 10
console.log(Number("   10 "))
// number reconhece mesmo com vários espaços
console.log(Number("Lucas"))
// mas não recdonhece quando há letras,
//devolve NaN (not a number)


console.log(parseFloat("2.65"))
// do mesmo jeito do parseInt()
//devolve o valor numérico
