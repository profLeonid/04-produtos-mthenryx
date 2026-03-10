"use strict"

function adicionarProduto(){
    const codigo = document.getElementById("codigo").value
    const produto = document.getElementById("produto").value
    const quantidade = document.getElementById("quantidade").value

    const lista = document.getElementById("lista")

    if(codigo == "" || produto == "" || quantidade == ""){
        alert("Alguma caixa de entrada está vazia")
    }else if(!isNaN(produto)){
        alert("O produto não pode ser um número")
    }else if(isNaN(codigo)){
        alert("O código deve ser um número")
    }else if(isNaN(quantidade)){
        alert("A quantidade deve ser um número")
    }else{
        const linha = document.createElement("div")
        linha.className = "flex gap-2"

        const span1 = document.createElement("span")
        const span2 = document.createElement("span")
        const span3 = document.createElement("span")

        span1.textContent = codigo
        span2.textContent = produto
        span3.textContent = quantidade
        
        span1.className = "flex items-center justify-center bg-blue-200 text-sm h-8 w-36 border-2 border-black rounded"
        span2.className = "flex items-center justify-center bg-blue-200 text-sm h-8 w-36 border-2 border-black rounded"
        span3.className = "flex items-center justify-center bg-blue-200 text-sm h-8 w-36 border-2 border-black rounded"

        linha.appendChild(span1)
        linha.appendChild(span2)
        linha.appendChild(span3)

        lista.appendChild(linha)

        limparInput()
    }
}

function limparInput(){
    document.getElementById("produto").value = ""
    document.getElementById("codigo").value = ""
    document.getElementById("quantidade").value = ""
}