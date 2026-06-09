#include <stdio.h>
#include <string.h>
#include "folha.h"

#define VALOR_HORA_AULA 50
#define SEMANAS_NO_MES 4


float calcular_salario_bruto(float horas_semanais) {
    float salario_bruto = (horas_semanais * SEMANAS_NO_MES) * VALOR_HORA_AULA;
    return salario_bruto;
}


float calcular_inss(float salario_bruto) {
    float inss = salario_bruto * 0.11;
    return inss;
}


float calcular_imposto_renda(float salario_bruto, float inss) {
    float base = salario_bruto - inss;
    float aliquota;

    if (base <= 2500) {
        aliquota = 0;
    } else if (base <= 5000) {
        aliquota = 0.075;
    } else {
        aliquota = 0.15;
    }

    float imposto = base * aliquota;
    return imposto;
}


float calcular_sindicato(float salario_bruto) {
    float sindicato = salario_bruto * 0.02;
    return sindicato;
}


float calcular_parcela_emprestimo(float valor_emprestimo, float salario_bruto) {
    if (valor_emprestimo <= 0) {
        return 0;
    }

    float total_com_juros = valor_emprestimo * (1 + 0.03 * 24);
    float parcela = total_com_juros / 24;

    if (parcela > salario_bruto * 0.30) {
        printf("ATENCAO: parcela acima de 30%% do salario bruto.\n");
        printf("Emprestimo NAO liberado para este professor.\n");
        return 0;
    }

    return parcela;
}


float calcular_salario_liquido(float salario_bruto, float inss, float ir, float sindicato, float parcela) {
    float liquido = salario_bruto - inss - ir - sindicato - parcela;
    return liquido;
}


Professor processar_professor(char nome[], float horas_semanais, float valor_emprestimo) {
    Professor professor;

    strcpy(professor.nome, nome);
    professor.horas = horas_semanais;
    professor.bruto = calcular_salario_bruto(horas_semanais);
    professor.inss = calcular_inss(professor.bruto);
    professor.ir = calcular_imposto_renda(professor.bruto, professor.inss);
    professor.sindicato = calcular_sindicato(professor.bruto);
    professor.parcela = calcular_parcela_emprestimo(valor_emprestimo, professor.bruto);
    professor.liquido = calcular_salario_liquido(professor.bruto, professor.inss, professor.ir, professor.sindicato, professor.parcela);

    return professor;
}


void imprimir_contracheque(Professor professor) {
    printf("CONTRACHEQUE - %s\n", professor.nome);
    printf("Horas semanais: %.0f\n", professor.horas);
    printf("Salario bruto: R$ %.2f\n", professor.bruto);
    printf("Desconto INSS: R$ %.2f\n", professor.inss);
    printf("Imposto de Renda: R$ %.2f\n", professor.ir);
    printf("Contribuicao sindical: R$ %.2f\n", professor.sindicato);
    printf("Parcela emprestimo: R$ %.2f\n", professor.parcela);
    printf("SALARIO LIQUIDO: R$ %.2f\n", professor.liquido);
    printf("\n");
}


void gerar_relatorio_geral(Professor lista[], int quantidade) {
    float total_bruto = 0;
    float total_liquido = 0;
    float total_descontos = 0;

    for (int i = 0; i < quantidade; i++) {
        total_bruto += lista[i].bruto;
        total_liquido += lista[i].liquido;
        total_descontos += lista[i].bruto - lista[i].liquido;
    }

    printf("RESUMO GERAL DA FOLHA DE PAGAMENTO\n");
    printf("Quantidade de professores: %d\n", quantidade);
    printf("Total salario bruto: R$ %.2f\n", total_bruto);
    printf("Total de descontos: R$ %.2f\n", total_descontos);
    printf("Total salario liquido: R$ %.2f\n", total_liquido);
}
