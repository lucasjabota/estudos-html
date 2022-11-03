function parOuImpar(){
    var numero = document.getElementById("numero")
    numero = Number(numero.value)
    var resultado

    if(numero%2 == 0) {
        resultado = "par"
    } else {
        resultado = "impar"
    }

    var exibir = document.getElementById("exibir")
    exibir.innerHTML = resultado
}