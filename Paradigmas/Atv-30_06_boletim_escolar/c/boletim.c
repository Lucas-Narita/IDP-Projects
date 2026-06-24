/*
 * =============================================
 * Atividade - Paradigmas de Programacao
 * Boletim Escolar - Programacao estruturada em C
 *
 * BIBLIOTECAS
 * stdio.h -> entrada/saida (printf)
 * =============================================
 */
#include <stdio.h>

#define NUM_ALUNOS 5
#define NUM_NOTAS  3
#define TAM_NOME   20
#define MEDIA_APROVACAO  7.0f
#define MEDIA_RECUPERACAO 5.0f

/*
 * struct Aluno: agrupa o nome e o vetor de notas de cada aluno.
 * Em C usamos 'struct' para representar dados compostos (parecido
 * com um registro), ja que nao ha classes como em Java/Python.
 */
typedef struct {
    char  nome[TAM_NOME];
    float notas[NUM_NOTAS];
} Aluno;

/* Calcula a media das notas de um aluno */
float calcular_media(float notas[]) {
    float soma = 0.0f;
    int i;
    for (i = 0; i < NUM_NOTAS; i++) {
        soma += notas[i];
    }
    return soma / NUM_NOTAS;
}

/* Retorna a situacao do aluno a partir da media */
const char* definir_situacao(float media) {
    if (media >= MEDIA_APROVACAO) {
        return "Aprovado";
    } else if (media >= MEDIA_RECUPERACAO) {
        return "Recuperacao";
    } else {
        return "Reprovado";
    }
}

int main(void) {
    /* Dados fixos para demonstracao */
    Aluno alunos[NUM_ALUNOS] = {
        {"Ana",     {8.0f, 7.5f, 9.0f}},
        {"Bruno",   {6.0f, 5.5f, 4.0f}},
        {"Carla",   {3.0f, 4.5f, 5.0f}},
        {"Daniel",  {10.0f, 9.5f, 8.0f}},
        {"Eduarda", {5.0f, 6.0f, 7.0f}}
    };

    float soma_medias = 0.0f;
    int i;

    printf("BOLETIM ESCOLAR - Paradigmas de Programacao\n\n");
    printf("==================================================\n");
    printf("%-12s%8s   SITUACAO\n", "ALUNO", "MEDIA");
    printf("==================================================\n");

    for (i = 0; i < NUM_ALUNOS; i++) {
        float media = calcular_media(alunos[i].notas);
        soma_medias += media;
        printf("%-12s%8.1f   %s\n", alunos[i].nome, media, definir_situacao(media));
    }

    printf("==================================================\n");
    printf("Media da turma: %.2f\n", soma_medias / NUM_ALUNOS);
    printf("==================================================\n");

    return 0;
}
