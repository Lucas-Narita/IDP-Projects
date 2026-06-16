// processaFuncionarios.js
// Le a planilha funcionarios.xlsx, calcula o salario final, classifica cada
// funcionario, mostra a tabela no terminal e gera o arquivo relatorio.txt.
const xlsx = require("xlsx");
const fs = require("fs");

// ----- Regras de negocio -----
const VALOR_HORA_EXTRA = 30;
const LIMITE_JUNIOR = 3000; // abaixo disso -> Junior
const LIMITE_SENIOR = 4000; // a partir disso -> Senior

// 1) Funcao que calcula o salario final.
function calcularSalarioFinal(salarioBase, horasExtras) {
    return salarioBase + horasExtras * VALOR_HORA_EXTRA;
}

// 2) Funcao que classifica o funcionario pelo salario final.
function classificarFuncionario(salarioFinal) {
    if (salarioFinal < LIMITE_JUNIOR) return "Junior";
    if (salarioFinal < LIMITE_SENIOR) return "Pleno";
    return "Senior";
}

// Formata um numero como moeda brasileira: 2800 -> "R$ 2.800,00".
function formatarReal(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// 3) Le a planilha Excel e devolve os funcionarios ja processados.
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

// Desafios adicionais: estatisticas gerais da empresa.
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

// Monta todo o texto de saida (uma unica fonte para o terminal e o relatorio).
function montarRelatorio(funcionarios, est) {
    const linhas = [];
    linhas.push("RELATORIO DE FUNCIONARIOS");
    linhas.push("=".repeat(60));
    // 4) Tabela: Nome - Salario Final - Classificacao
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
