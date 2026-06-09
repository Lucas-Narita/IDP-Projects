const VALOR_HORA_AULA = 50;
const SEMANAS_NO_MES = 4;


function calcularSalarioBruto(horasSemanais) {
    const salarioBruto = (horasSemanais * SEMANAS_NO_MES) * VALOR_HORA_AULA;
    return salarioBruto;
}


function calcularInss(salarioBruto) {
    const inss = salarioBruto * 0.11;
    return inss;
}


function calcularImpostoRenda(salarioBruto, inss) {
    const base = salarioBruto - inss;

    let aliquota;
    if (base <= 2500) {
        aliquota = 0;
    } else if (base <= 5000) {
        aliquota = 0.075;
    } else {
        aliquota = 0.15;
    }

    const imposto = base * aliquota;
    return imposto;
}


function calcularSindicato(salarioBruto) {
    const sindicato = salarioBruto * 0.02;
    return sindicato;
}


function calcularParcelaEmprestimo(valorEmprestimo, salarioBruto) {
    if (valorEmprestimo <= 0) {
        return 0;
    }

    const totalComJuros = valorEmprestimo * (1 + 0.03 * 24);
    const parcela = totalComJuros / 24;

    if (parcela > salarioBruto * 0.30) {
        console.log("ATENCAO: parcela acima de 30% do salario bruto.");
        console.log("Emprestimo NAO liberado para este professor.");
        return 0;
    }

    return parcela;
}


function calcularSalarioLiquido(salarioBruto, inss, ir, sindicato, parcela) {
    const liquido = salarioBruto - inss - ir - sindicato - parcela;
    return liquido;
}


function processarProfessor(nome, horasSemanais, valorEmprestimo) {
    const salarioBruto = calcularSalarioBruto(horasSemanais);
    const inss = calcularInss(salarioBruto);
    const ir = calcularImpostoRenda(salarioBruto, inss);
    const sindicato = calcularSindicato(salarioBruto);
    const parcela = calcularParcelaEmprestimo(valorEmprestimo, salarioBruto);
    const liquido = calcularSalarioLiquido(salarioBruto, inss, ir, sindicato, parcela);

    const professor = {
        nome: nome,
        horas: horasSemanais,
        bruto: salarioBruto,
        inss: inss,
        ir: ir,
        sindicato: sindicato,
        parcela: parcela,
        liquido: liquido,
    };
    return professor;
}


function imprimirContracheque(professor) {
    console.log("CONTRACHEQUE -", professor.nome);
    console.log(`Horas semanais: ${professor.horas}`);
    console.log(`Salario bruto: R$ ${professor.bruto.toFixed(2)}`);
    console.log(`Desconto INSS: R$ ${professor.inss.toFixed(2)}`);
    console.log(`Imposto de Renda: R$ ${professor.ir.toFixed(2)}`);
    console.log(`Contribuicao sindical: R$ ${professor.sindicato.toFixed(2)}`);
    console.log(`Parcela emprestimo: R$ ${professor.parcela.toFixed(2)}`);
    console.log(`SALARIO LIQUIDO: R$ ${professor.liquido.toFixed(2)}`);
    console.log();
}


function gerarRelatorioGeral(listaProfessores) {
    let totalBruto = 0;
    let totalLiquido = 0;
    let totalDescontos = 0;

    for (const professor of listaProfessores) {
        totalBruto += professor.bruto;
        totalLiquido += professor.liquido;
        totalDescontos += professor.bruto - professor.liquido;
    }

    console.log("RESUMO GERAL DA FOLHA DE PAGAMENTO");
    console.log(`Quantidade de professores: ${listaProfessores.length}`);
    console.log(`Total salario bruto: R$ ${totalBruto.toFixed(2)}`);
    console.log(`Total de descontos: R$ ${totalDescontos.toFixed(2)}`);
    console.log(`Total salario liquido: R$ ${totalLiquido.toFixed(2)}`);
}


module.exports = {
    calcularSalarioBruto,
    calcularInss,
    calcularImpostoRenda,
    calcularSindicato,
    calcularParcelaEmprestimo,
    calcularSalarioLiquido,
    processarProfessor,
    imprimirContracheque,
    gerarRelatorioGeral,
};
