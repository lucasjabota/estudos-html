function soma(){
    var x = document.getElementById("num1")
    var y = document.getElementById("num2")
    var resultado = document.getElementById("resultado")
    x = Number(x.value)
    y = Number(y.value)
    resultado.innerHTML = x + y
}

function subtrai(){
    var x = document.getElementById("num1")
    var y = document.getElementById("num2")
    var resultado = document.getElementById("resultado")
    x = Number(x.value)
    y = Number(y.value)
    resultado.innerHTML = x - y
}

function multiplica(){
    var x = document.getElementById("num1")
    var y = document.getElementById("num2")
    var resultado = document.getElementById("resultado")
    x = Number(x.value)
    y = Number(y.value)
    resultado.innerHTML = x * y
}

function divide(){
    var x = document.getElementById("num1")
    var y = document.getElementById("num2")
    var resultado = document.getElementById("resultado")
    x = Number(x.value)
    y = Number(y.value)
    resultado.innerHTML = x / y
}