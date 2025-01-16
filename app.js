//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let nomeAmigo;
let tamanhoArray;
let numerosGerados = [];
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

function sortearAmigo(){
    if(validaAmigosArray()){
        let numero = gerarNumeroAleatorio();

        if(numero == 'limite'){
            console.log(numero);
        }else{
            console.log('Entrou else mostrarSorteado');
            mostrarSorteado(numero);
        }
    }
}

function validaAmigosArray() {
    if(amigos.length > 0){
        tamanhoArray = amigos.length;
        return true;
    }else {
        alert('Por favor, adicione amigos antes de sortear.');
        return false;
    }
}

function gerarNumeroAleatorio(){
    // No final não está sendo adicionado + 1, pois o .length inicia de 1 e o array de 0 
    let novoNumeroGerado = parseInt(Math.random() * tamanhoArray);
    
    if (tamanhoArray == numerosGerados.length){
        alert('Todos os nomes foram sorteados. Por favor reinicie o jogo ou adicione mais amigos.');
        
        return 'limite';
    }
    else if(numerosGerados.includes(novoNumeroGerado)){
        return gerarNumeroAleatorio();
    }else{
        numerosGerados.push(novoNumeroGerado);
        return novoNumeroGerado;
    }
}

function mostrarSorteado(numero){
    let sorteado = document.getElementById('resultado');
    sorteado.innerHTML = '';
    sorteado.innerHTML += '<li>'+ amigos[numero] +'</li>';
}
