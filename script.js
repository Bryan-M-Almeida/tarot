// ===================
// LISTAS DE DADOS DO TAROT
// ===================

// Nomes das 22 cartas do Tarot
const nomesCartas = [
    "O Louco", "O Mago", "A Sacerdotisa", "A Imperatriz", "O Imperador",
    "O Hierofante", "Os Enamorados", "O Carro", "A Justiça", "O Eremita",
    "A Roda da Fortuna", "A Força", "O Enforcado", "A Morte", "A Temperança",
    "O Diabo", "A Torre", "A Estrela", "A Lua", "O Sol", "O Julgamento", "O Mundo"
];

// Caminhos das imagens correspondentes às cartas
const diretorio = nomesCartas.map((_, i) => `cartas/carta ${i}.jpeg`);

// Descrições normais de cada carta
const descricoesCartas = [
    "Novo começo, aventura, liberdade, ingenuidade.",
    "Poder, habilidade, manifestação, iniciativa.",
    "Mistério, intuição, conhecimento oculto, introspecção.",
    "Fertilidade, abundância, criação, nutrição.",
    "Autoridade, estrutura, estabilidade, controle.",
    "Tradição, ensino, espiritualidade, normas sociais.",
    "Escolhas, amor, harmonia, conexões profundas.",
    "Determinação, progresso, vitória, autocontrole.",
    "Equilíbrio, verdade, responsabilidade, karma.",
    "Busca interior, sabedoria, introspecção, solidão produtiva.",
    "Ciclos, destino, mudanças inesperadas, sorte.",
    "Coragem, autocontrole, resiliência, paciência.",
    "Sacrifício, nova perspectiva, pausa, rendição.",
    "Transformação, fim de ciclos, renascimento, mudança.",
    "Equilíbrio, paciência, harmonia, moderação.",
    "Vícios, ilusões, materialismo, controle.",
    "Ruína, mudança abrupta, revelação, reconstrução.",
    "Esperança, inspiração, fé, renovação.",
    "Ilusões, medos, intuição, mistério.",
    "Alegria, sucesso, vitalidade, clareza.",
    "Despertar, renovação, decisões importantes.",
    "Conclusão, realização, plenitude, totalidade."
];

// Descrições invertidas de cada carta
const descricoesInvertidas = [
    "Insegurança, imprudência, novos começos inacabados, falta de direção.",
    "Manipulação, habilidades mal utilizadas, engano, falta de controle.",
    "Segredos não revelados, intuição distorcida, confusão mental.",
    "Excesso, abuso, falta de crescimento, negligência.",
    "Falta de estrutura, autoritarismo, controle excessivo.",
    "Rejeição, rebeldia, ignorância espiritual, desrespeito às tradições.",
    "Romance desfeito, desarmonia, traição, falta de comunicação.",
    "Falta de direção, descontrole, fracasso, obstinação excessiva.",
    "Desequilíbrio, injustiça, arrogância, comportamento irresponsável.",
    "Isolamento, fuga da realidade, busca interior excessiva.",
    "Desistência, sofrimento, má sorte, perdas inevitáveis.",
    "Fraqueza, medo, falta de controle, autossabotagem.",
    "Egoísmo, sacrifício forçado, visão distorcida da realidade.",
    "Resistência à mudança, estagnação, rejeição à transformação.",
    "Intolerância, desequilíbrio, falta de paciência, impaciência.",
    "Vícios, obsessões, autoengano, manipulação.",
    "Cataclismos, destruição, mudanças imprevistas, caos.",
    "Desesperança, desilusão, falta de fé, perda de confiança.",
    "Medo, ilusões, distúrbios psicológicos, engano.",
    "Tristeza, depressão, perda de vitalidade, falta de energia.",
    "Estagnação, falta de crescimento, julgamentos errôneos.",
    "Fracasso, falta de realização, incompletude, abandono."
];

// ===================
// VARIÁVEIS DE CONTROLE
// ===================
let inverter = 0; // Controla a rotação/inversão da carta

// ===================
// FUNÇÕES
// ===================

/**
 * Exibe a carta escolhida manualmente pelo número digitado.
 */
function carta() {
    const entrada = parseInt(document.getElementById("carta").value, 10);

    if (isNaN(entrada) || entrada < 0 || entrada > 21) {
        document.getElementById("resultado").innerHTML = "Essa carta não existe";
        document.getElementById("divImagem").style.display = "none";
        return;
    }

    const invertida = inverter === 180;

    document.getElementById("resultado").innerHTML = `
    Carta: ${nomesCartas[entrada]}<br>
    Descrição: ${invertida ? descricoesInvertidas[entrada] : descricoesCartas[entrada]}`;

    const imagem = document.getElementById("imagem");
    imagem.src = diretorio[entrada];
    imagem.style.transform = `rotate(${inverter}deg) scale(1)`;
    document.getElementById("divImagem").style.display = "block";
}

/**
 * Gera uma carta aleatória e exibe o resultado.
 */
function randomCard() {
    const randomNumber = Math.floor(Math.random() * 22);
    const invertida = Math.random() < 0.5;

    inverter = invertida ? 180 : 0;

    document.getElementById("resultado2").innerHTML = `
    Carta: ${nomesCartas[randomNumber]}<br>
    Descrição: ${invertida ? descricoesInvertidas[randomNumber] : descricoesCartas[randomNumber]}`;

    const imagem = document.getElementById("imagem2");
    imagem.src = diretorio[randomNumber];
    imagem.style.transform = `rotate(${inverter}deg) scale(1)`;
    document.getElementById("divImagem2").style.display = "block";
}

/**
 * Alterna o zoom da imagem principal.
 */
function escala() {
    const imagem = document.getElementById("imagem");
    const scaled = imagem.style.transform.includes("scale(1.5)");
    imagem.style.transform = `rotate(${inverter}deg) scale(${scaled ? 1 : 1.5})`;
}

/**
 * Alterna o zoom da imagem aleatória.
 */
function escala2() {
    const imagem = document.getElementById("imagem2");
    const scaled = imagem.style.transform.includes("scale(1.5)");
    imagem.style.transform = `rotate(${inverter}deg) scale(${scaled ? 1 : 1.5})`;
}

// ===================
// EVENTOS
// ===================

// Evento de envio do formulário para acionar a função carta()
document.getElementById("formTarot").addEventListener("submit", function (e) {
    e.preventDefault();
    carta();
});