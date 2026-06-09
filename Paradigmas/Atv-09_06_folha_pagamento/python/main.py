import folha_pagamento as folha

QUANTIDADE_PROFESSORES = 2
MAX_HORAS = 60


def main():
    lista_professores = []

    print("SISTEMA DE FOLHA DE PAGAMENTO\n")

    for i in range(QUANTIDADE_PROFESSORES):
        print(f"Professor {i + 1}")
        nome = input("Nome: ")
        horas = float(input("Horas semanais: "))
        while horas > MAX_HORAS:
            print(f"Horas invalidas! O maximo e {MAX_HORAS}.")
            horas = float(input("Horas semanais: "))
        valor_emprestimo = float(input("Valor do emprestimo (0 se nao tiver): "))
        print()

        professor = folha.processar_professor(nome, horas, valor_emprestimo)
        lista_professores.append(professor)

    print("\nCONTRACHEQUES:\n")
    for professor in lista_professores:
        folha.imprimir_contracheque(professor)

    folha.gerar_relatorio_geral(lista_professores)


main()
