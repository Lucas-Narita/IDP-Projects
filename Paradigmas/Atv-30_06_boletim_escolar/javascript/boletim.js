/*
 * Atividade - Paradigmas de Programacao
 * Boletim Escolar - JavaScript (estilo funcional)
 * Calcula a media de cada aluno e define a situacao.
 */

const MEDIA_APROVACAO = 7.0;
const MEDIA_RECUPERACAO = 5.0;

// Dados fixos para demonstracao
const alunos = [
    { nome: "Ana",     notas: [8.0, 7.5, 9.0] },
    { nome: "Bruno",   notas: [6.0, 5.5, 4.0] },
    { nome: "Carla",   notas: [3.0, 4.5, 5.0] },
    { nome: "Daniel",  notas: [10.0, 9.5, 8.0] },
    { nome: "Eduarda", notas: [5.0, 6.0, 7.0] },
];

// Media usando reduce (paradigma funcional)
function calcularMedia(notas) {
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / notas.length;
}

function definirSituacao(media) {
    if (media >= MEDIA_APROVACAO) return "Aprovado";
    if (media >= MEDIA_RECUPERACAO) return "Recuperacao";
    return "Reprovado";
}

function imprimirBoletim(alunos) {
    console.log("==================================================");
    console.log("ALUNO          MEDIA   SITUACAO");
    console.log("==================================================");

    // map transforma cada aluno em uma linha com media e situacao
    const linhas = alunos.map((aluno) => {
        const media = calcularMedia(aluno.notas);
        return { nome: aluno.nome, media, situacao: definirSituacao(media) };
    });

    linhas.forEach((l) => {
        console.log(
            l.nome.padEnd(12) + l.media.toFixed(1).padStart(8) + "   " + l.situacao
        );
    });

    const mediaTurma =
        linhas.reduce((acc, l) => acc + l.media, 0) / linhas.length;

    console.log("==================================================");
    console.log("Media da turma: " + mediaTurma.toFixed(2));
    console.log("==================================================");
}

console.log("BOLETIM ESCOLAR - Paradigmas de Programacao\n");
imprimirBoletim(alunos);
