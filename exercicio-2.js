/*
Escreva um programa que atribua um valor a uma variável cor em inglês e imprima a tradução para a mesma cor em português (mínimo 5 exemplos e tratar o padrão). 
Utilize uma estrutura condicional (switch) para fazer o mapeamento das cores.
*/

//blue, red, green, yellow, pink

let color = "blue";

console.log(traduzirCor(color));

function traduzirCor(color){
    switch(color){
        case "blue":
            return "azul";
    
        case "red":
            return "vermelho";
    
        case "green":
            return "verde";
    
        case "yellow":
            return "amarelo";
    
        case "pink":
            return "rosa";
        
        default:
            return "cor inválida";
    }
}