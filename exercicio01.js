function saudacao() {
    console.log("Olá, seja bem-vindo ao Backend com Node.js!");
}

function executar(callback) {
    console.log("Executando a função de callback...");
    callback();
}

executar(saudacao);
