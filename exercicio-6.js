/*
Escreva um programa que percorra um array de objetos que representam produtos e exiba o nome e o preço de cada produto. 
Após imprimir essas informações imprima o total de produtos e o valor total de todos produtos.
*/

let geladeira = { nome: "Geladeira Eletrolux", preco: 4299.95 };
let televisao = { nome: "Televisao LG", preco: 3449.90 };
let armario = { nome: "Armario 6 Portas", preco: 749.50 };

let produtos = [geladeira, televisao, armario];

let somaPrecos = 0;
let contadorDeProdutos = 0;

for (let produto of produtos) {
    somaPrecos += produto.preco;
    contadorDeProdutos++;

    console.log(produto.nome);
    console.log(produto.preco + "\n");

}

console.log(`Valor total de produtos: R$ ${somaPrecos.toFixed(2)}`);
console.log(`Total de produtos: ${contadorDeProdutos}`);