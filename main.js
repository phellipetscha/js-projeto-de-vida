const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

// Alternar abas
for (let i = 0; i < botoes.length; i++) {

    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

// Contadores
const contadores = document.querySelectorAll(".contador");

// Datas futuras
const tempos = [
    new Date("2026-06-05T00:00:00"),
    new Date("2026-07-05T00:00:00"),
    new Date("2026-08-05T00:00:00"),
    new Date("2026-09-05T00:00:00")
];

// Calcula tempo restante
function calculaTempo(tempoObjetivo) {

    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;

    if (tempoFinal <= 0) {
        return [0, 0, 0, 0];
    }

    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos = segundos % 60;
    minutos = minutos % 60;
    horas = horas % 24;

    return [dias, horas, minutos, segundos];
}

// Atualiza cronômetros
function atualizaCronometro() {

    for (let i = 0; i < contadores.length; i++) {

        let tempo = calculaTempo(tempos[i]);

        document.getElementById("dias" + i).textContent = tempo[0];
        document.getElementById("horas" + i).textContent = tempo[1];
        document.getElementById("min" + i).textContent = tempo[2];
        document.getElementById("seg" + i).textContent = tempo[3];
    }
}

// variável do intervalo
let intervalo;

// Inicia cronômetro
function comecaCronometro() {

    atualizaCronometro();

    // evita múltiplos intervalos
    clearInterval(intervalo);

    intervalo = setInterval(atualizaCronometro, 1000);
}

comecaCronometro();