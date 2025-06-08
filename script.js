// Lista com os nomes das cartas do tarot
const nomesCartas = [
    "O Louco", "O Mago", "A Sacerdotisa", "A Imperatriz", "O Imperador",
    "O Hierofante", "Os Enamorados", "O Carro", "A Justiça", "O Eremita",
    "A Roda da Fortuna", "A Força", "O Enforcado", "A Morte", "A Temperança",
    "O Diabo", "A Torre", "A Estrela", "A Lua", "O Sol", "O Julgamento", "O Mundo"
];

// Lista com os caminhos das imagens correspondentes às cartas
const diretorio = [
    "cartas/carta 0.jpeg", "cartas/carta 1.jpeg", "cartas/carta 2.jpeg", "cartas/carta 3.jpeg",
    "cartas/carta 4.jpeg", "cartas/carta 5.jpeg", "cartas/carta 6.jpeg",
    "cartas/carta 7.jpeg", "cartas/carta 8.jpeg", "cartas/carta 9.jpeg",
    "cartas/carta 10.jpeg", "cartas/carta 11.jpeg", "cartas/carta 12.jpeg",
    "cartas/carta 13.jpeg", "cartas/carta 14.jpeg", "cartas/carta 15.jpeg",
    "cartas/carta 16.jpeg", "cartas/carta 17.jpeg", "cartas/carta 18.jpeg",
    "cartas/carta 19.jpeg", "cartas/carta 20.jpeg", "cartas/carta 21.jpeg",
    "cartas/carta 22.jpeg"
];

// Lista com descrições para cada carta
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

// Lista com descrições invertidas para cada carta
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

// Função que exibe a carta baseada no número digitado
function carta() {
    const entrada = parseInt(document.getElementById("carta").value, 10); // Converte o valor para número inteiro
    if (isNaN(entrada) || entrada > 21 || entrada < 0) { // Verifica se a entrada é válida
        document.getElementById("resultado").innerHTML = "Essa carta não existe";
        document.getElementById("divImagem").style.display = "none";
    } else {
        // Verifica se a carta foi invertida (rotação de 180 graus)
        const invertida = inverter === 180;
        document.getElementById("resultado").innerHTML =
            `Carta: ${nomesCartas[entrada]} <br> Descrição: ${invertida ? descricoesInvertidas[entrada] : descricoesCartas[entrada]}`;
        document.getElementById("imagem").src = diretorio[entrada];
        document.getElementById("divImagem").style.display = "block";
    }
}

let inverter = 0; // Variável global para rotação

// Função que seleciona uma carta aleatória
function randomCard() {
    const randomNumber = Math.floor(Math.random() * 22); // Gera um número aleatório entre 0 e 21
    const invertida = Math.random() < 0.5; // 50% de chance de inverter a carta
    document.getElementById("resultado2").innerHTML = `Carta: ${nomesCartas[randomNumber]} <br> Descrição: ${invertida ? descricoesInvertidas[randomNumber] : descricoesCartas[randomNumber]}`;
    document.getElementById("imagem2").src = diretorio[randomNumber];
    document.getElementById("divImagem2").style.display = "block";

    // Define a rotação (180 graus para invertida)
    inverter = invertida ? 180 : 0;
    const imagem = document.getElementById("imagem2");
    imagem.style.transform = `rotate(${inverter}deg) scale(1)`;
}

// Função para aumentar ou reduzir a escala da imagem
function escala() {
    const imagem = document.getElementById("imagem");
    const currentTransform = imagem.style.transform;

    if (currentTransform.includes("scale(1.5)")) {
        imagem.style.transform = `rotate(${inverter}deg) scale(1)`; // Volta ao tamanho normal
    } else {
        imagem.style.transform = `rotate(${inverter}deg) scale(1.5)`; // Aumenta a imagem
    }
}

// Função para aumentar ou reduzir a escala da segunda imagem
function escala2() {
    const imagem = document.getElementById("imagem2");
    const currentTransform = imagem.style.transform;

    if (currentTransform.includes("scale(1.5)")) {
        imagem.style.transform = `rotate(${inverter}deg) scale(1)`; // Volta ao tamanho normal
    } else {
        imagem.style.transform = `rotate(${inverter}deg) scale(1.5)`; // Aumenta a imagem
    }
}
