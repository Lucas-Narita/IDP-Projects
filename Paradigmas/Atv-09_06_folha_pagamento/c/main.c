#include <stdio.h>
#include "folha.h"

#define QUANTIDADE_PROFESSORES 15
#define MAX_HORAS 60


int main() {
    Professor lista[QUANTIDADE_PROFESSORES];

    printf("SISTEMA DE FOLHA DE PAGAMENTO\n\n");

    for (int i = 0; i < QUANTIDADE_PROFESSORES; i++) {
        char nome[100];
        float horas;
        float valor_emprestimo;

        printf("Professor %d\n", i + 1);

        printf("Nome: ");
        scanf(" %[^\n]", nome);

        printf("Horas semanais: ");
        scanf("%f", &horas);
        while (horas > MAX_HORAS) {
            printf("Horas invalidas! O maximo e %d.\n", MAX_HORAS);
            printf("Horas semanais: ");
            scanf("%f", &horas);
        }

        printf("Valor do emprestimo (0 se nao tiver): ");
        scanf("%f", &valor_emprestimo);
        printf("\n");

        lista[i] = processar_professor(nome, horas, valor_emprestimo);
    }

    printf("\nCONTRACHEQUES:\n\n");
    for (int i = 0; i < QUANTIDADE_PROFESSORES; i++) {
        imprimir_contracheque(lista[i]);
    }

    gerar_relatorio_geral(lista, QUANTIDADE_PROFESSORES);

    return 0;
}
