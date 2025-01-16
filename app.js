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
        AdicionarAmigoListaExibicao();
    }
}

function atualizarArrayAmigo(nome){
    amigos.push(nome);
}

function limparInput(){
    nomeAmigo = document.getElementById('amigo');
    nomeAmigo.value = '';
}

function AdicionarAmigoListaExibicao(){
    let listaExibicao = document.getElementById('listaAmigos');
    listaExibicao.innerHTML = '';

    for(let amigo of amigos){
        let text = '<li>' + amigo + '</li>';
        listaExibicao.innerHTML += text;
    }
    
}