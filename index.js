//declaracao de variaveis
var olamundo = "Olá mundo"
let a = 10;
const b = "10";

/*
//operadores de atribuição e comparação

//impressao de variaveis
console.log(olamundo);
//atribuição a variavel
console.log(a = b);
//comparação com a variavel
console.log(a == b);
//compara valor e tipo
console.log(a === b);
//compara se o valor e tipo se diferente
console.log(a !== b);
//compara se o valor e diferente
console.log(a != b);
*/

/*
//Operadores logicos

//AND -> Precisa que os 2 sejam verdadeiros ou falsos
console.log(a == b && typeof a == 'string');
//OR -> Precisa que apenas 1 seja verdadeira
console.log(a == b || typeof a == 'string');
*/

/*
//estrutura de condição (If, Else)

let cor = "azul";

if(cor === "verde"){
    console.log("Siga")

}else if(cor === "amarelo"){
    console.log("Atenção")

}else if(cor === "vermelho"){
    console.log("Pare")

}
*/

//estrutura de condição (Swith)
/*
let cor = "azul";

switch (cor){
    case "verde":
        console.log("Siga");
        break;
    case "amarelo":
        console.log("Atenção");
        break;
    case "vermeho":
        console.log("Pare");
        break;  
    default:
        console.log("Não sei");  
}
*/

//Laços de repetição (For)

let n = 7;

for(let i = 0; i <= 10; i++){
    console.log(`${i} X ${n} = ${i*n}`); //template string
}