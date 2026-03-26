/*
 * =============================================
 * BIBLIOTECAS
 * stdio.h  -> funções de entrada/saída (printf, scanf, fgets)
 * string.h -> função strcspn (usada para remover o '\n')
 * =============================================
 */
#include <stdio.h>
#include <string.h>

/* Constantes: total de pessoas e tamanho máximo do nome */
#define TOTAL 5
#define TAM   50

int main(void) {

    /*
     * =============================================
     * VARIÁVEIS
     * nomes[][]  -> matriz de caracteres (cada linha guarda um nome)
     * idades[]   -> vetor de inteiros (cada posição guarda uma idade)
     * maisVelha  -> guarda o ÍNDICE de quem é mais velho
     * soma       -> acumula as idades para calcular a média
     * =============================================
     */
    char  nomes[TOTAL][TAM];
    int   idades[TOTAL];
    int   maisVelha = 0;
    int   soma = 0;
    float media;
    int   i;

    /*
     * =============================================
     * ENTRADA DE DADOS
     * O 'for' repete 5 vezes (i = 0, 1, 2, 3, 4).
     * fgets lê o nome (incluindo espaços).
     * scanf lê a idade como inteiro.
     * getchar() limpa o ENTER que sobra no buffer após o scanf.
     * =============================================
     */
    for (i = 0; i < TOTAL; i++) {
        printf("--- Pessoa %d ---\n", i + 1);

        printf("Nome: ");
        fgets(nomes[i], TAM, stdin);
        nomes[i][strcspn(nomes[i], "\n")] = '\0';  /* remove o '\n' do final */

        printf("Idade: ");
        scanf("%d", &idades[i]);
        while (getchar() != '\n');                  /* limpa o buffer */

        printf("\n");
    }

    /*
     * =============================================
     * PESSOA MAIS VELHA
     * Começa assumindo que a pessoa 0 é a mais velha.
     * Percorre as demais: se achar idade maior, atualiza o índice.
     * =============================================
     */
    for (i = 1; i < TOTAL; i++) {
        if (idades[i] > idades[maisVelha]) {
            maisVelha = i;
        }
    }

    /*
     * =============================================
     * MÉDIA DAS IDADES
     * Soma todas as idades e divide pelo total.
     * O (float) converte a divisão inteira em decimal.
     * =============================================
     */
    for (i = 0; i < TOTAL; i++) {
        soma += idades[i];
    }
    media = (float)soma / TOTAL;

    /*
     * =============================================
     * RESULTADO FINAL
     * =============================================
     */
    printf("========================================\n");
    printf("Mais velha: %s (%d anos)\n", nomes[maisVelha], idades[maisVelha]);
    printf("Media:      %.1f anos\n", media);
    printf("========================================\n");

    return 0;
}
