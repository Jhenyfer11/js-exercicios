// Exercício 4: Notas escolares
// Faça um programa que receba 4 notas de um aluno, 
// calcule e imprima a média aritmética das notas e a mensagem de 
// APROVADO para média superior ou igual a 7,0 
// RECUPERAÇÃO para notas entre 5.0 e 7,0 
// ou a mensagem de REPROVADO para média inferior a 5,0.


//Receba 4 notas de um aluno
alert("Informe ás notas de 0 á 10");
let nota1 = parseFloat(prompt("Digite a primeira nota: "));
let nota2 = parseFloat(prompt("Digite a segunda nota: "));
let nota3 = parseFloat(prompt("Digite a terceira nota: "));
let nota4 = parseFloat(prompt("Digite a quarta nota: "));

//calcule e imprima a média aritmética das notas
// A precedência de operadores em JavaScript é semelhante ao 
// ensinado nas aulas de matemática na escola — 
// Multiplicação e divisão são realizados primeiro, 
// depois a adição e subtração
// (a soma é sempre realizada da esquerda para a direita).
let media = (nota1 + nota2 + nota3 + nota4) / 4;

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
//toFixed(num) -> formatar o resultado 
//de quantas casas decimais eu quero que apareça
console.log("A média do aluno é: " + media.toFixed(2));

// APROVADO para média superior ou igual a 7,0 
if(media >= 7){
    console.log("APROVADO");
}

// RECUPERAÇÃO para notas entre 5.0 e 7,0 
else if(media < 7 && media >= 5){
    console.log("RECUPERAÇÃO");
}

// ou a mensagem de REPROVADO para média inferior a 5,0.
else{
    console.log("REPROVADO");
}

