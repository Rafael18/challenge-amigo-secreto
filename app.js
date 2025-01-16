//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let nomeAmigo;
function adicionarAmigo(){
    nomeAmigo = document.getElementById('amigo').value;
    
    validarNomeAmigo(nomeAmigo);
    limparInput();
}

function validarNomeAmigo(nome){
    if (nome == ''){
        alert('Por favor, insira um nome.')
    }else {
        atualizarArrayAmigo(nome);
    }
}

function atualizarArrayAmigo(nome){
    amigos.push(nome);
    console.log(amigos);
}

function limparInput(){
    console.log('Func limpar')
    nomeAmigo = document.getElementById('amigo');
    nomeAmigo.value = '';
}