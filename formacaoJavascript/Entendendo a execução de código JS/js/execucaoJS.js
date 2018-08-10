//Declaração de variáveis. 

var nome = "Fagner";
var sobreNome = "Oliveira";


console.log("Instrução Solta - Entendendo a execução de código JS");

function exibirNomeConsole(){
    console.log("Exibir nome: " +  nome);
}

exibirNomeConsole();


//Evento para ser OnLoad
function exibirNomeCompleto(){
    console.log("Exibir nome completo: " +  nome +  " " + sobreNome);
}


function eventoClick(){
    alert("Você esta dentro de um evento OnClik ! Parabéns!");
}