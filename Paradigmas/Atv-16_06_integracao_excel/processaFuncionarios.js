const xlsx = require("xlsx");
const fs = require("fs");

const VALOR_HORA_EXTRA = 30;
const LIMITE_JUNIOR = 3000;
const LIMITE_SENIOR = 4000;

function calcularSalarioFinal(salarioBase, horasExtras) {
    return salarioBase + horasExtras * VALOR_HORA_EXTRA;
}

function classificarFuncionario(salarioFinal) {
    if (salarioFinal < LIMITE_JUNIOR) return "Junior";
    if (salarioFinal < LIMITE_SENIOR) return "Pleno";
    return "Senior";
}

function formatarReal(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function lerFuncionarios(caminho) {
    const livro = xlsx.readFile(caminho);
    const primeiraAba = livro.SheetNames[0];
    const linhas = xlsx.utils.sheet_to_json(livro.Sheets[primeiraAba]);

    return linhas.map((linha) => {
        const salarioFinal = calcularSalarioFinal(linha.Salario, linha.HorasExtras);
        return {
            nome: linha.Nome,
            salarioFinal,
            classificacao: classificarFuncionario(salarioFinal),
        };
    });
}

function calcularEstatisticas(funcionarios) {
    const salarios = funcionarios.map((f) => f.salarioFinal);
    const folhaTotal = salarios.reduce((soma, s) => soma + s, 0);

    const contagem = { Junior: 0, Pleno: 0, Senior: 0 };
    for (const f of funcionarios) contagem[f.classificacao]++;

    return {
        folhaTotal,
        maior: Math.max(...salarios),
        menor: Math.min(...salarios),
        media: folhaTotal / funcionarios.length,
        contagem,
    };
}

function montarRelatorio(funcionarios, est) {
    const linhas = [];
    linhas.push("RELATORIO DE FUNCIONARIOS");
    linhas.push("=".repeat(60));
    linhas.push(
        "Nome".padEnd(20) + "Salario Final".padEnd(20) + "Classificacao"
    );
    linhas.push("-".repeat(60));
    for (const f of funcionarios) {
        linhas.push(
            f.nome.padEnd(20) +
                formatarReal(f.salarioFinal).padEnd(20) +
                f.classificacao
        );
    }
    linhas.push("=".repeat(60));
    linhas.push("");
    linhas.push("RESUMO DA EMPRESA");
    linhas.push(`Folha de pagamento total: ${formatarReal(est.folhaTotal)}`);
    linhas.push(`Maior salario final:      ${formatarReal(est.maior)}`);
    linhas.push(`Menor salario final:      ${formatarReal(est.menor)}`);
    linhas.push(`Media salarial:           ${formatarReal(est.media)}`);
    linhas.push(
        `Quantidade por nivel:     Junior: ${est.contagem.Junior} | ` +
            `Pleno: ${est.contagem.Pleno} | Senior: ${est.contagem.Senior}`
    );
    return linhas.join("\n");
}

function main() {
    const funcionarios = lerFuncionarios("funcionarios.xlsx");
    const estatisticas = calcularEstatisticas(funcionarios);
    const texto = montarRelatorio(funcionarios, estatisticas);

    console.log(texto);
    fs.writeFileSync("relatorio.txt", texto, "utf-8");
}

main();
