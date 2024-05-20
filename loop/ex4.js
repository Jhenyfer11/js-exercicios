// Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.


let numero = parseInt(prompt("Digite um número para ver na tabuada: "));


if (!isNaN(numero)) {
    for (let cont = 1; cont <= 10; cont++) {
        console.log(numero + " X " + cont + " = " + (numero * cont));
    }

}else{
    console.log("Número invalido. Por favor, digite um número válido.")
}

console.log(isNaN("Hello Word")); // retorna true 
console.log(isNaN(123)); // retorna false 