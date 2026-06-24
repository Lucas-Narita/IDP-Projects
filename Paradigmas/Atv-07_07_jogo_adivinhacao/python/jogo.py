"""
Atividade - Paradigmas de Programacao
Jogo de Adivinhacao - Programacao estruturada
O computador sorteia um numero e o jogador tenta adivinhar.
"""

import random

MINIMO = 1
MAXIMO = 100
MAX_TENTATIVAS = 7


def ler_palpite() -> int:
    """Le um palpite valido do jogador (inteiro dentro do intervalo)."""
    while True:
        try:
            palpite = int(input(f"Seu palpite ({MINIMO}-{MAXIMO}): "))
        except ValueError:
            print("Digite um numero inteiro valido.")
            continue

        if palpite < MINIMO or palpite > MAXIMO:
            print(f"O numero deve estar entre {MINIMO} e {MAXIMO}.")
            continue

        return palpite


def jogar():
    numero_secreto = random.randint(MINIMO, MAXIMO)
    tentativas = 0

    print("=" * 50)
    print("   JOGO DE ADIVINHACAO")
    print(f"   Adivinhe o numero entre {MINIMO} e {MAXIMO}.")
    print(f"   Voce tem {MAX_TENTATIVAS} tentativas.")
    print("=" * 50)

    while tentativas < MAX_TENTATIVAS:
        palpite = ler_palpite()
        tentativas += 1

        if palpite == numero_secreto:
            print(f"\nParabens! Voce acertou em {tentativas} tentativa(s).")
            return
        elif palpite < numero_secreto:
            print("O numero secreto e MAIOR.")
        else:
            print("O numero secreto e MENOR.")

        restantes = MAX_TENTATIVAS - tentativas
        print(f"Tentativas restantes: {restantes}\n")

    print(f"\nVoce perdeu! O numero secreto era {numero_secreto}.")


if __name__ == "__main__":
    jogar()
