/*
Escreva um programa que atribua um valor a uma variável idade e determine se ela se enquadra nas categorias: 
criança (0-12 anos), adolescente (13-17 anos), adulto (18-59 anos) ou idoso (60 anos ou mais). 
Use uma estrutura condicional (if, else if, else).
*/

let idade = 0;

console.log(determinarIdade(idade));

function determinarIdade(idade){
    if(idade >= 0 && idade <= 12){
        return "criança";
    }else if(idade >= 13 && idade <= 17){
        return "adolescente";
    }else if(idade >= 18 && idade <= 59){
        return "adulto";
    }else if(idade >= 60){
        return "idoso";
    }else{
        return "idade inválida"
    }
}