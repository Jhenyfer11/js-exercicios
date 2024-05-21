// // Substitui o conteúdo do body do documento HTML com um novo elemento <h1> com id "titulo" e texto "Titulo legal"
// document.body.innerHTML = '<h1 id="titulo">Titulo legal</h1>'

// // Obtém a referência do elemento <h1> pelo seu id "titulo" e armazena na variável titulo
// let titulo = document.getElementById("titulo")

// // Define a propriedade fontFamily do elemento titulo para "Segoe UI", mudando a fonte do texto
// titulo.style.fontFamily = "Segoe UI"

// // Define a propriedade color do elemento titulo para "red", mudando a cor do texto para vermelho
// titulo.style.color = "red"


//Seleciona o elemento com ID "titulo" do documento(document)
let titulo = window.document.getElementById("titulo")

//Difine a cor do texto do elemento "titulo"
titulo.style.color = "#002596"

//Define a tipografia do elemento 
titulo.style.fontFamily = "Montserrat"

//Inicializa uma variavel 
let clique = 0;

//Função para contagem de cliques 
const somarCliques = () => {

    //Incrementou 1 no valor da variavel
    clique++

    //Seleciona o botaão por querSelector e atualiza a quantidad ede cliques no html
    document.querySelector("#botao").innerHTML = clique

}

const adicionarItem = () => {
    //Criar um novo elemento li(item da lista)
    let novoItem = document.createElement("li")

    //Define o texto do no item
    novoItem.textContent = "Novo Item"

    //Identifica o elemento que vai ser adicionado
    let lista = document.getElementById("minhaLista")

    //Adiciona um novo item a lista
    lista.appendChild(novoItem);
}

const voltarPagina = () =>{
    window.history.back()
}

const fecharPagina = () =>{
    window.close()
}
