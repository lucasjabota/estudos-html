function area() {
    var altura = document.getElementById("altura")
    var largura = document.getElementById("largura")
    altura = Number(altura.value)
    largura = Number(largura.value)
    var resultado = altura * largura

    document.getElementById("exibir")
    .innerHTML = `A area é: ${resultado}cm²`
}