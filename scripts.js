class Pessoa {
    constructor(nome, idade, altura) {
        this.nome = nome
        this.idade = idade
        this.altura = altura
    }
}

const pessoas = []

function AoClicarNoInput(input, pessoa) {

    // Selecionou mais de duas pessoas?
    if(pessoas.length > 1) {
        input.checked = 0
        alert("Não pode selecionar mais de duas pessoas")
    }

    pessoas.push(pessoa)

}

function ExibirComparacao() {

}

function AtualizarDados() {
    
    // Adiciona nome na tabela
    const tdNomeUm = document.getElementById("pessoa-nome-1")
    const tdNomeDois = document.getElementById("pessoa-nome-2")

    tdNomeUm.innerHTML = pessoas[0].nome
    tdNomeDois.innerHTML = pessoas[1].nome


    // Adiciona idade na tabela
    const tdIdadeUm = document.getElementById("pessoa-idade-1")
    const tdIdadeDois = document.getElementById("pessoa-idade-2")

    tdIdadeUm.innerHTML = pessoas[0].idade
    tdIdadeDois.innerHTML = pessoas[1].idade


    // Adiciona a altura na tabela
    const tdAlturaUm = document.getElementById("pessoa-altura-1")
    const tdAlturaDois = document.getElementById("pessoa-altura-2")

    tdAlturaUm.innerHTML = pessoas[0].altura
    tdAlturaDois.innerHTML = pessoas[1].altura
}