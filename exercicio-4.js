/*
Escreva um programa que imprima a sequência de Fibonacci até o número N atribuído na variável de número. 
A sequência de Fibonacci é formada pela soma dos dois números anteriores: 0, 1, 1, 2, 3, 5, 8, 13, ... 
Use uma estrutura de repetição (while) para gerar a sequência.
*/

let limite = 150;
let proximo = 0;
let atual = 0;
let anterior = 1;

while(atual < limite){
    console.log(proximo);
    proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
}