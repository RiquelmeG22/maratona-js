/*1. Soma de Dois Números
Descrição:
Peça ao usuário dois números e exiba a soma deles.
Tarefas:
Crie uma função soma que receba dois números como parâmetros.
Exiba o resultado no console ou em um alert.



2. Verificação de Par ou Ímpar
Descrição:
Peça ao usuário um número e diga se ele é par ou ímpar.
Tarefas:
Crie uma função que receba um número.
Verifique se o número é divisível por 2.
Exiba no console "O número é par" ou "O número é ímpar".

3. Contagem de Números
Descrição:
Exiba os números de 1 a 10 usando um loop.
Tarefas:
Utilize um loop for para imprimir os números no console.
Modifique o exercício para usar um while.

4. Tabuada de um Número
Descrição:
Crie uma tabuada para um número informado pelo usuário.
Tarefas:
Peça ao usuário um número.
Use um loop for para multiplicar o número de 1 a 10.
Exiba o resultado no console.

5. Encontrar o Maior Número em uma Lista
Descrição:
Dado um array de números, encontre o maior valor.
Tarefas:
Crie um array como [3, 7, 2, 9, 5].
Use um loop para comparar os números e encontrar o maior.
Exiba o maior número no console.

6. Inverter uma Palavra
Descrição:
Peça ao usuário uma palavra e exiba-a invertida.
Tarefas:
Crie uma função que receba uma string.
Converta a string para um array com o método split.
Inverta a ordem com o método reverse e transforme novamente em string com join.

7. Soma de Elementos de um Array
Descrição:
Calcule a soma dos elementos de um array.
Tarefas:
Crie um array como [1, 2, 3, 4, 5].
Use um loop ou o método reduce para somar os valores.
Exiba o resultado no console.

8. Número Primo
Descrição:
Verifique se um número informado pelo usuário é primo.
Tarefas:
Crie uma função que receba um número.
Verifique se ele é divisível apenas por 1 e por ele mesmo.
Exiba "É primo" ou "Não é primo".

9. Fatorial de um Número
Descrição:
Calcule o fatorial de um número informado pelo usuário.
Tarefas:
Crie uma função que receba um número.
Use um loop para multiplicar os números de 1 até o número informado.
Exiba o resultado no console.

10. Verificar Palíndromo
Descrição:
Verifique se uma palavra informada pelo usuário é um palíndromo (lê-se igual de trás para frente).
Tarefas:
Crie uma função que receba uma string.
Inverta a string e compare com o original.
Exiba no console se a palavra é ou não um palíndromo.

11. Contar Vogais em uma Frase
Descrição:
Dada uma frase, conte o número de vogais.
Tarefas:
Peça ao usuário uma frase.
Use um loop para verificar cada caractere.
Conte as vogais (a, e, i, o, u) e exiba o total.

12. Gerar Números Aleatórios
Descrição:
Gere um número aleatório entre 1 e 100.
Tarefas:
Use a função Math.random e ajuste o intervalo para 1 a 100.
Exiba o número gerado no console.

13. Substituir Números Negativos por Zero
Descrição:
Dado um array de números, substitua todos os números negativos por zero.
Tarefas:
Crie um array como [4, -3, 2, -1, 0].
Use um loop para verificar cada número.
Substitua os números negativos por 0 e exiba o array no console.

14. Verificar Palavras Proibidas em um Texto
Descrição:
Verifique se uma frase contém palavras proibidas.
Tarefas:
Crie um array de palavras proibidas como ['palavra1', 'palavra2'].
Peça ao usuário uma frase.
Verifique se a frase contém alguma palavra do array e exiba uma mensagem de alerta.

15. Gerar uma Lista de Números Pares
Descrição:
Crie uma lista de números pares entre 1 e 20.
Tarefas:
Use um loop para gerar os números pares.
Adicione os números a um array e exiba-o no console.
*/

// Ex 01


// let num1 = Number(prompt("Digite o primeiro número:"));
// let num2 = Number(prompt("Digite o segundo número:"));
// alert("A soma é: " + (num1 + num2));



// Ex 02 

// function imparOuPar (numero) {
//     if(numero % 2 === 0) {
//         console.log("O número é par");
//     } else {
//         console.log("O número é impar");
//     }
// }

// const numero = Number(prompt("Digite um numero"));

// imparOuPar(numero);





// Ex 03

// for(let i =1; i <=10; i++) {
//     console.log(i);
// }

// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }



// Ex 04

// let num = Number(prompt("Digite um numero para ver sua tabuada"));

// for(let i =1; i <=10; i++){
//     console.log(`${num} x ${i} = ${num * 1}`);
// }



// Ex 05
// const number = [3, 7, 2, 9, 5];
// let maior = number[0];

// for(let i =1; i < number.length; i++){
//     if(number[i] > maior) {
//         maior = number[i];
//     }
// }
// console.log(`O maior número é: ${maior}`);


// Ex 06

// function inverter (palavra) {
//     return palavra.split('').reverse;
// }

// const palavra = prompt("Digite uma palavra");

// console.log(`A palavra invertida é ${inverter(palavra)}`);



// Ex 07

// function inverterPalavra(palavra) {
//     return palavra.split('').reverse().join('');
// }


// const palavra = prompt("Digite uma palavra:");


// console.log(`A palavra invertida é: ${inverterPalavra(palavra)}`);


// Ex 08







// Ex 09

// function multiplicar(numero) {
//     let resultado = 1;

//     for(let i =1; i <= numero; i++) {
//         resultado *= i;
//     }

//     console.log(`O fatorial de ${numero} é ${resultado}`);
// }

// let numero = parseInt(prompt("Informe um numero para calcular o fatorial"));
// multiplicar(numero);


// Ex 10


// function palidromo(palavra) {
//     palavra.split('').reverse().join('');
//     if(palavra)
// }   


// let palavra = prompt("Digite uma palavra");


// EX 15

let numerosPares = [];


for (let i = 1; i <= 20; i++) {

    if (i % 2 === 0) {
        numerosPares.push(i);
    }
}

console.log(numerosPares);



