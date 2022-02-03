window.onload(exibeMsg(), exibeData());

function coletaNome(){

let nome = prompt("Qual o seu nome?");

document.write(nome + ", seja bem vindo ao site!");
}
function exibeMsg(){
      window.alert("VocÊ acessou o site " + document.URL);
      window.alert(window.innerWidth);

}


function exibeData(){

let dataAtual = new Date();
let ano = dataAtual.getFullYear();
let mes = dataAtual.getMonth();
let dia = dataAtual.getDay();
let hora = dataAtual.getHours();
let min = dataAtual.getMinutes();

window.alert(`Você acessou essa página em ${dia}: ${mes}: ${ano}, às ${hora}:${min}`);


}

