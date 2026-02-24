"use strict"

function adicionarProduto(){
    const produto = document.getElementById("produto").value
    const lista = document.getElementById("lista")
    const span = document.createElement("soan")

    if(produto == ""){
        alert("A caixa de entrada está vasia")
    }else{
        span.textContent = produto
        span.className = "bg-blue-200 px-8 py-2 border-2 border-black rounded"

        lista.appendChild(span)
    }
}

function limparInput(){
    document.getElementById("produto").value = ""
}
