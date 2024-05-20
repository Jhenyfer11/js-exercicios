// construir um menu que é possivel excolher um exercicio entre os exercicios anteriores, para ser executado.
// Faça com que o menu repita a sua execução , disponibilize as opções para o usuário,
// até que seja digitado "sair"
// 3 if e 3 loop

// function exercicioLogin() {
//     let username = prompt("Digite o seu usuário: ");

//     let senha = prompt("Digite sua senha: ");


//     if (username == "admin" && senha == "senha123") {
//         console.log("Login bem sucedido!");
//     }
//     else {
//         console.log("Você não tem permissão de acesso!");
//     }
// }


function exercicioParImpar() {

    let num = parseInt(prompt("Informe um número inteiro: "));

    if (num % 2 == 0) {
        console.log("O número informado é par");
    }
    else {
        console.log("O número informado é ímpar");
    }
}

function exercicioDesconto() {

    let valorTotal = parseFloat(prompt("Informe o valor total da compra: "))

    let desconto;

    if (valorTotal <= 100) {
        desconto = 0;
        console.log("O valor de desconto foi: " + desconto);
    } else if (valorTotal <= 200) {
        desconto = 0.1;
        console.log("O valor de desconto foi: " + (desconto * 100) + "%");
    } else {
        desconto = 0.2;
        console.log("O valor de desconto foi: " + (desconto * 100) + "%");
    }

    let valorFinal = valorTotal - (valorTotal * desconto);

    console.log("O valor final da compra com o desconto: R$" + valorFinal.toFixed(2));
}

function exercicioOrdem() {
    let primeiroNumero = parseInt(prompt("Digite o primeiro número: "));
    let segundoNumero = parseInt(prompt("Digite o segundo número: "));
    let terceiroNumero = parseInt(prompt("Digite o terceiro número: "));

    if (primeiroNumero < segundoNumero && segundoNumero < terceiroNumero) {
        console.log("Os números estão em ordem crescente!!!")
    }
    else {
        console.log("Os números NÃO estão em ordem crescente!!!")
    }
}

function exercicioContagem() {

    let numero = parseInt(prompt("Digite um número para a contagem regressiva: "));

    console.log("Contagem regressiva está começando em: " + numero);

    while (numero >= 0) {
        console.log(numero);
        numero--;
    }

    console.log("Contagem regressiva finalizada!");

}

function exercicioZero() {

    let numero;

    do {
        numero = parseInt(prompt("Digite um número (digite 0 para sair): "));
    } while (numero !== 0);

    console.log("Você digitou 0. O programa foi encerrado");
}

function exercicioTabuada() {
    let numero = parseInt(prompt("Digite um número para ver na tabuada: "));


    if (!isNaN(numero)) {
        for (let cont = 1; cont <= 10; cont++) {
            console.log(numero + " X " + cont + " = " + (numero * cont));
        }

    } else {
        console.log("Número invalido. Por favor, digite um número válido.")
    }
}
let opcao = window.prompt("MENU\nDigite a opção desejada:\n\n 0 - Sair\n 1 - Exercicio Par ou Impar\n 2 - Exercicio Desconto \n 3 - Exercicio Ordem Crescente\n 4 - Exercicio Contagem\n 5 - Exercicio do Zero \n 6 - Exercico da Tabuada   ")

switch (opcao) {

    case "0":
        alert("Programa encerrado!")
        break;
    case "1":
        exercicioParImpar()
        break;

    case "2":
        exercicioDesconto()
        break;
    case "3":
        exercicioOrdem()
        break;
    case "4":
        exercicioContagem()
        break;

    case "5":
        exercicioZero()
        break;

    case "6":
        exercicioTabuada()
        break;

    default:
        alert("Opção invalida")
        break;
}

