// Hoisting
function saudacao() {    
    let nomePessoa = prompt("Digite seu nome: ")

    let horaAtual = new Date().getHours()
    
    if (horaAtual > 6 && horaAtual < 13) {
        window.alert("Bom dia " + nomePessoa)
    } else if (horaAtual >= 13 && horaAtual < 18) {
        window.alert("Boa tarde " + nomePessoa)
    } else {
        window.alert("Boa noite " + nomePessoa)
    }    
}

saudacao()


// Declaração de função - Ensinando o computador a fazer o que está entre { }, e dá um nome para a função Ex.: bomDia()
function bomDia() {
    console.log("Bom diaaaaaaaaaa");
}

// Chamada da função - Executa o que foi ensinado anteriormente
bomDia()

function somar(num1, num2, num3) {
    let soma = num1 + num2 + num3

    return soma
}

// let resultado = somar(5, 16, 19) // 40
// let resultado2 = somar(1, 1, 1) // 3

// console.log("O resultado é: " + resultado);

// Exemplos de funções
// window.alert("Texto")
// console.log("Outro texto")
// window.prompt("Digite algo: ")


// Exemplo objeto

let professor = {}

// professor.nome = prompt("Digite o nome: ")
// professor.sobrenome = prompt("Digite o sobrenome: ")
// professor.idade = parseInt(prompt("Digite o idade: "))

console.log(professor);
