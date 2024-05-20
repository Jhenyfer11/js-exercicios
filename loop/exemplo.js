// For - loop contado

for(let contador = 1; contador <= 20; contador++) {
    // console.log("Bom dia");
    console.log(contador);
}

//Contando do 0 ao 10
// for(let num = 0; num <= 10; num++){
//     console.log(num);
// }

//Contagem regressiva
// for(let cont = 10; cont >= 0; cont--){
// console.log(cont);
// }


//While - loop condicional

let resposta = prompt("Deseja receber um OI: ")

while(resposta != "nao") {
    alert("OIIIIII")

    resposta = prompt("Deseja continuar recebendo um OI: ")
}

// let salario = 1000;

// while( salario < 5000){
//     // salario = salario + 100;
//     salario += 100;

//     console.log("O salário ainda é R$ " + salario)
// }

//Do While - loop condicional

// let saldo = 1000;

// do{
//     console.log("Esse é o saldo:" + saldo);
//     saldo += 100;

// }while(saldo < 5000);

//Array 
let frutas = ["Banana", "Laranja", "Maça", "Pitaya", "Melancia", "Caju"];
     
// console.log(frutas[3]);

//forEach => percorre uma lista
// frutas.forEach(fruta => {
//     console.log("A fruta é: " + fruta);
// });

//Percorrendo uma lista com for
// .length => quantidade de elementos dentro de um array
// for(let indice = 0; indice < frutas.length; indice ++){
//     console.log(frutas[indice]);
//     if(frutas[indice] == "Pitaya"){
//         console.log("Eu gosto de " + frutas[indice]);
//     }
// }
