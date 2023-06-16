/*
Escreva um programa que atribua um valor a uma variável número e verifique se ele é um número primo. 
Um número primo é aquele que é divisível apenas por 1 e por ele mesmo. Use uma estrutura de repetição (do while) para verificar as divisões.
*/

let numero = 3;

console.log(isPrime(numero));

function isPrime(numero){
    let op = 1; //variavel incrementavel do while
    let teste = 0; //variavel que soma resultados inteiros da divisao

    do{
        let result = numero / op;
        let isInt = (result % 1) === 0;
        if(isInt){
            teste += result;
        }
        op++;
    }while(op <= numero)
    
    if(teste == (numero + 1) || teste == 1){
        return "primo";
    }else{
        return "não primo";
    }
}




