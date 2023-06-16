/*
Escreva um programa que terá três funções (utilize os métodos push, pop, slice):

    A. Escreva uma função chamada adicionarElemento que recebe como parâmetros um array e um elemento, e adiciona o elemento ao final do array. 
        Em seguida, retorne o array atualizado.
    B. Escreva uma função chamada removerUltimoElemento que recebe como parâmetro um array, remove o último elemento do array e retorna o elemento removido.
    C. Escreva uma função chamada removerElementosIntervalo que recebe como parâmetros um array, um índice inicial e um índice final. 
        A função deve remover os elementos do array compreendidos entre os índices inicial e final. Em seguida, retorne o array atualizado.
*/

let array = ["mesa", "cadeira", "toalha", "lampada", "porta", "janela"];
let elemento = "almofada";
let inicial = 1;
let final = 3;

console.log(adicionarElemento(array, elemento));
console.log(removerUltimoElemento(array));
console.log(removerElementosIntervalo(array, inicial, final));


function adicionarElemento(array, elemento){
    array.push(elemento)
    return array;
}

function removerUltimoElemento(array){
    array.pop();
    return array;
}

function removerElementosIntervalo(array, inicial, final){
    return array.splice(inicial, final);
}