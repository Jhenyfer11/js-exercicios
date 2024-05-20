// Exercício 5: Verificação de números em ordem crescente
// Escreva um programa que solicita três números ao usuário e 
//verifica se eles estão em ordem crescente. 
// Exibindo uma mensagem indicando se os números estão 
// em ordem crescente ou não.

// Escreva um programa que solicita três números ao usuário
let primeiroNumero = parseInt(prompt("Digite o primeiro número: "));
let segundoNumero = parseInt(prompt("Digite o segundo número: "));
let terceiroNumero = parseInt(prompt("Digite o terceiro número: "));

if(primeiroNumero < segundoNumero && segundoNumero < terceiroNumero){
    console.log("Os números estão em ordem crescente!!!")
}
else{
    console.log("Os números NÃO estão em ordem crescente!!!")
}

//Desafio
//Informe se os números informado estão em 
// ordem crescente / decrescente / não ordenado

