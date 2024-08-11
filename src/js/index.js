const botoesCarrosel = (document.querySelectorAll(".botao"));
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");


botoesCarrosel.forEach((botao, indice) => {
   botao.addEventListener("click", () => {
    
    desativarBotaoSelecionado();
    
    marcaBotaoSelecionado(botao);

    esconderImagemAtiva();

    mostarImagemDeFundo(indice);
    
    esconderInformacoesAtivas();
    
    mostarInformacoesAtivas(indice);
    });
});
function mostarInformacoesAtivas(indice) {
    informacoes[indice].classList.add("ativa");
}

function esconderInformacoesAtivas() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function mostarImagemDeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function marcaBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

