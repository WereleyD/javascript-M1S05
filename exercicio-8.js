/*
Escreva uma função chamada calculadora que recebe três parâmetros: dois números e uma função de operação matemática.
A função calculadora deve executar a operação matemática nos dois números fornecidos e retornar o resultado. 
Teste a função utilizando diferentes operações como adição, subtração, multiplicação e divisão.
*/

let numero1 = 8;
let numero2 = 2;
let operacao = "/";

console.log(calculadora(numero1, numero2, operacao));

function calculadora(numero1, numero2, operacao){
    switch(operacao){
        case "+":
            return numero1 + numero2;
        
        case "-":
            return numero1 - numero2;

        case "*":
            return numero1 * numero2;

        case "/":
            return numero1 / numero2;

        default:
            return "Operação inválida!";
    }
}