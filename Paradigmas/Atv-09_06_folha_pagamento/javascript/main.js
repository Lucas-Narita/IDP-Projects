const folha = require("./folha_pagamento");
const readline = require("node:readline/promises");
const { stdin: input, stdout: output } = require("node:process");

const QUANTIDADE_PROFESSORES = 2;
const MAX_HORAS = 60;


async function main() {
    const rl = readline.createInterface({ input, output });
    const listaProfessores = [];

    console.log("SISTEMA DE FOLHA DE PAGAMENTO\n");

    for (let i = 0; i < QUANTIDADE_PROFESSORES; i++) {
        console.log(`Professor ${i + 1}`);
        const nome = await rl.question("Nome: ");
        let horas = parseFloat(await rl.question("Horas semanais: "));
        while (horas > MAX_HORAS) {
            console.log(`Horas invalidas! O maximo e ${MAX_HORAS}.`);
            horas = parseFloat(await rl.question("Horas semanais: "));
        }
        const valorEmprestimo = parseFloat(await rl.question("Valor do emprestimo (0 se nao tiver): "));
        console.log();

        const professor = folha.processarProfessor(nome, horas, valorEmprestimo);
        listaProfessores.push(professor);
    }

    console.log("\nCONTRACHEQUES:\n");
    for (const professor of listaProfessores) {
        folha.imprimirContracheque(professor);
    }

    folha.gerarRelatorioGeral(listaProfessores);

    rl.close();
}


main();
