#ifndef FOLHA_H
#define FOLHA_H

typedef struct {
    char nome[100];
    float horas;
    float bruto;
    float inss;
    float ir;
    float sindicato;
    float parcela;
    float liquido;
} Professor;

float calcular_salario_bruto(float horas_semanais);
float calcular_inss(float salario_bruto);
float calcular_imposto_renda(float salario_bruto, float inss);
float calcular_sindicato(float salario_bruto);
float calcular_parcela_emprestimo(float valor_emprestimo, float salario_bruto);
float calcular_salario_liquido(float salario_bruto, float inss, float ir, float sindicato, float parcela);
Professor processar_professor(char nome[], float horas_semanais, float valor_emprestimo);
void imprimir_contracheque(Professor professor);
void gerar_relatorio_geral(Professor lista[], int quantidade);

#endif
