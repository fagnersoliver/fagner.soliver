function sejaBemvindo(){
    console.log("Seja bem vindo ao sistema!!");
}

console.log("Seja bem vindo ao sistema!! Chamada FUNCIONAL");

sejaBemvindo();


//Exemplo programação OO e funcional em JS
var objPessoa = {

    nome: "Fagner Oliveira",
    curso: "Formação JavaScript",

    //declaração de metodo
    assistirAula: function(){
        console.log("Assistindo aula de JavaScript. ");
    }
};
console.log(" ------------------------------- ");
console.log("Acessando as propriedades do objeto - Completo...");
console.log(objPessoa);

console.log(" ------------------------------- ");
console.log("Acessando as propriedades do objeto - Atributos...");
console.log(objPessoa.curso);
console.log(objPessoa.nome);
console.log(" ------------------------------- ");

console.log("Acessando Metodo - Atributos...");
objPessoa.assistirAula();
