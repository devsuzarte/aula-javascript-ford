class Pessoa {
    constructor(nome, idade, altura, img) {
        this.nome = nome
        this.idade = idade
        this.altura = altura
        this.img = img
    }
}

let pessoas = []

function AoClicarNoInput(input, pessoa) {

    // O usuário deselecionou o input?
    if(input.checked == false) {

        const pessoaIndex = PosicaoDaPessoaNaLista(pessoa)
        pessoas.splice(pessoaIndex, 1)

        // pessoas = pessoas.filter(obj => obj.nome !== pessoa.nome)
        return
    }

    // Selecionou mais de duas pessoas?
    if(pessoas.length > 1) {
        input.checked = false
        alert("Não pode selecionar mais de duas pessoas")

        return
    }

    pessoas.push(pessoa)

}

function PosicaoDaPessoaNaLista(pessoa) {
    for(let i = 0; i < pessoas.length; i++){
        if(pessoas[i].nome === pessoa.nome) {
            return i;
        }
    }
    return -1;
}

function AtualizarDados() {

    // Adiciona a foto na tabela
    const imgUm = document.getElementById("pessoa-imagem-1")
    const imgDois = document.getElementById("pessoa-imagem-2")

    imgUm.src = pessoas[0].img
    imgDois.src = pessoas[1].img
    
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

function ExibirComparacao() {

    if(pessoas.length !== 2) {
        alert("O número de pessoas tem que ser dois")
        return
    }

    AtualizarDados()
    
    const dialog = document.getElementById("mostrar-tabela")

    dialog.showModal()
}

function EsconderComparacao() {
    const dialog = document.getElementById("mostrar-tabela")
    dialog.close()
}
