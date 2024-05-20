// Exercício 6: Verificação de idade
// Escreva um programa que solicita o ano de nascimento de 
// uma pessoa e verifica se ela é maior
// de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não.
// let anoAtual = 2024;
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Numbers_and_dates

let anoNascimento = parseInt(prompt("Digite o ano de nascimento: "))

let anoAtual = new Date().getFullYear();
let idade = anoAtual - anoNascimento;

if(idade >= 18){
    console.log("Você é maior de idade");
    console.log("Sua idade é " + idade);
}
else{
    console.log("Você é menor de idade");
    console.log("Sua idade é " + idade);
}