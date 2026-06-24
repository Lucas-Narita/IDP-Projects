/*
 * Atividade - Paradigmas de Programacao
 * Jogo de Adivinhacao - JavaScript (Node.js)
 * O computador sorteia um numero e o jogador tenta adivinhar.
 */

const readline = require("readline");

const MINIMO = 1;
const MAXIMO = 100;
const MAX_TENTATIVAS = 7;

// Sorteia um inteiro entre MINIMO e MAXIMO (inclusive)
const numeroSecreto = Math.floor(Math.random() * (MAXIMO - MINIMO + 1)) + MINIMO;
let tentativas = 0;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("==================================================");
console.log("   JOGO DE ADIVINHACAO");
console.log(`   Adivinhe o numero entre ${MINIMO} e ${MAXIMO}.`);
console.log(`   Voce tem ${MAX_TENTATIVAS} tentativas.`);
console.log("==================================================");

function perguntar() {
    rl.question(`Seu palpite (${MINIMO}-${MAXIMO}): `, (entrada) => {
        const palpite = parseInt(entrada, 10);

        // Validacao da entrada
        if (Number.isNaN(palpite) || palpite < MINIMO || palpite > MAXIMO) {
            console.log(`Digite um numero inteiro entre ${MINIMO} e ${MAXIMO}.`);
            return perguntar();
        }

        tentativas++;

        if (palpite === numeroSecreto) {
            console.log(`\nParabens! Voce acertou em ${tentativas} tentativa(s).`);
            return rl.close();
        } else if (palpite < numeroSecreto) {
            console.log("O numero secreto e MAIOR.");
        } else {
            console.log("O numero secreto e MENOR.");
        }

        const restantes = MAX_TENTATIVAS - tentativas;
        if (restantes === 0) {
            console.log(`\nVoce perdeu! O numero secreto era ${numeroSecreto}.`);
            return rl.close();
        }

        console.log(`Tentativas restantes: ${restantes}\n`);
        perguntar();
    });
}

perguntar();
