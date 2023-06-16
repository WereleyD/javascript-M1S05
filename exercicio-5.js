/*
Escreva um programa que percorra um array de palavras e exiba todas as palavras que possuem mais de 5 caracteres. 
Utilize a estrutura de repetição for of para percorrer o array.
*/

let palavras = [
    "josnei",
    "mesa", 
    "toalha", 
    "eu", 
    "sim"
];

for (const palavra of palavras) {
    if(palavra.length > 5){
        console.log(palavra);
    }
}