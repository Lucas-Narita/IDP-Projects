"""
Atividade - Paradigmas de Programacao
Boletim Escolar - Programacao estruturada
Calcula a media de cada aluno e define a situacao (aprovado/recuperacao/reprovado).
"""

MEDIA_APROVACAO = 7.0
MEDIA_RECUPERACAO = 5.0

# Cada aluno: nome e 3 notas (dados fixos para demonstracao)
alunos = [
    ("Ana",      [8.0, 7.5, 9.0]),
    ("Bruno",    [6.0, 5.5, 4.0]),
    ("Carla",    [3.0, 4.5, 5.0]),
    ("Daniel",   [10.0, 9.5, 8.0]),
    ("Eduarda",  [5.0, 6.0, 7.0]),
]


def calcular_media(notas):
    return sum(notas) / len(notas)


def definir_situacao(media):
    if media >= MEDIA_APROVACAO:
        return "Aprovado"
    elif media >= MEDIA_RECUPERACAO:
        return "Recuperacao"
    else:
        return "Reprovado"


def imprimir_boletim(alunos):
    print("=" * 50)
    print(f"{'ALUNO':<12}{'MEDIA':>8}   SITUACAO")
    print("=" * 50)

    soma_medias = 0
    for nome, notas in alunos:
        media = calcular_media(notas)
        situacao = definir_situacao(media)
        soma_medias += media
        print(f"{nome:<12}{media:>8.1f}   {situacao}")

    print("=" * 50)
    media_turma = soma_medias / len(alunos)
    print(f"Media da turma: {media_turma:.2f}")
    print("=" * 50)


def main():
    print("BOLETIM ESCOLAR - Paradigmas de Programacao\n")
    imprimir_boletim(alunos)


if __name__ == "__main__":
    main()
