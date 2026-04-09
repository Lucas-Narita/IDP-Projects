#include <stdio.h>
#include <stdlib.h>

int main() {
    float valor_veiculo, valor_final, entrada, restante, juros, parcela;
    int categoria, opcao;

    // Recebe o valor do veículo
    printf("Digite o valor do veículo (R$): ");
    scanf("%f", &valor_veiculo);

    if (valor_veiculo <= 0 || valor_veiculo > 200000) {
        printf("Valor inválido.\n");
        return 1;
    }

    // Identifica a categoria
    if (valor_veiculo <= 80000)
        categoria = 1;
    else if (valor_veiculo <= 120000)
        categoria = 2;
    else if (valor_veiculo <= 140000)
        categoria = 3;
    else if (valor_veiculo <= 160000)
        categoria = 4;
    else
        categoria = 5;

    printf("Categoria do veículo: %d\n", categoria);

    // Escolhe a forma de pagamento
    printf("1 - À vista (10%% de desconto)\n");
    printf("2 - Entrada de 50%% (juros de 5%% a.a. em 4 anos)\n");
    printf("3 - Entrada de 25%% (juros de 8%% a.a. em 4 anos)\n");
    printf("Escolha a forma de pagamento: ");
    scanf("%d", &opcao);

    if (opcao < 1 || opcao > 3) {
        printf("Opção inválida.\n");
        return 1;
    }

    // Calcula o valor final
    if (opcao == 1) {
        valor_final = valor_veiculo * 0.90;
        printf("Valor final à vista: R$ %.2f\n", valor_final);

    } else if (opcao == 2) {
        entrada = valor_veiculo * 0.50;
        restante = valor_veiculo * 0.50;
        juros = restante * 0.05 * 4;
        valor_final = entrada + restante + juros;
        parcela = (restante + juros) / 48;
        printf("Entrada: R$ %.2f\n", entrada);
        printf("48x de R$ %.2f\n", parcela);
        printf("Total: R$ %.2f\n", valor_final);

    } else if (opcao == 3) {
        entrada = valor_veiculo * 0.25;
        restante = valor_veiculo * 0.75;
        juros = restante * 0.08 * 4;
        valor_final = entrada + restante + juros;
        parcela = (restante + juros) / 48;
        printf("Entrada: R$ %.2f\n", entrada);
        printf("48x de R$ %.2f\n", parcela);
        printf("Total: R$ %.2f\n", valor_final);
    }

    return 0;
}
