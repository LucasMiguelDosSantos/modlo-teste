let titulo = document.querySelector('h1');
titulo.innerHTML = 'É hora do desafio';

function exibirMensagemNoConsole() {
    console.log('O botão foi clicado!')
    alert('confira o console de desemvolvedor, la estara as respostas ja prontas de alguns botodes depois de voce clicar');
}

function exibirAlerta() {
    console.log('eu amo JS')
}


function exibirPrompt() {
    let cidade = prompt('qual sua cidade?');
    alert (`eu estive em ${cidade} tambem`);
    console.log(`as paisagen de ${cidade} são lindas`);
}
function somandoDoisNumeros() {
    let valor = parseInt(prompt('um valor'));
    let valor2 = parseInt(prompt('digite o segundo valor'));
    let resultado = valor + valor2;
    alert(`o valor é ${resultado}`);
}
function diminundoDoisNumeros() {
    let valor = parseInt(prompt('digite um valor'));
    let valor2 = parseInt(prompt('digite outro valor'));
    let resultado = valor - valor2;
    alert(`A subitração de ${valor} - ${valor2} é igual a ${resultado}`);
}
function conferindoSeVoceÉ() {
    alert('Voce é gay mas é meu amigo <3');
}