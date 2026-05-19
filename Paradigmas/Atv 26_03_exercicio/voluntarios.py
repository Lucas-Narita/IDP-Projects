"""
Atividade 4 - Paradigmas de Programação
Sistema de cadastro e processamento de informações de voluntários
Utilizando: POO (Parte 1) e Programação Funcional (Parte 2)
"""

from functools import reduce


# ============================================================
# PARTE 1 - Modelagem com POO
# ============================================================

class Pessoa:
    """Classe que representa um voluntário com nome e idade."""

    def __init__(self, nome: str, idade: int):
        self.__nome = nome
        self.__idade = idade

    # Getters
    def get_nome(self) -> str:
        return self.__nome

    def get_idade(self) -> int:
        return self.__idade

    # Método para verificar se é maior de idade
    def eh_maior_de_idade(self) -> bool:
        return self.__idade >= 18

    def __repr__(self):
        return f"Pessoa(nome='{self.__nome}', idade={self.__idade})"


def criar_lista_voluntarios() -> list:
    voluntarios = [
        Pessoa("João", 25),
        Pessoa("Maria", 17),
        Pessoa("Carlos", 30),
        Pessoa("Ana", 15),
        Pessoa("Pedro", 22),
        Pessoa("Lucia", 19),
        Pessoa("Fernando", 16),
        Pessoa("Beatriz", 28),
        Pessoa("Rafael", 20),
        Pessoa("Juliana", 14),
        Pessoa("Lucas", 35),
        Pessoa("Camila", 21),
    ]
    return voluntarios


# ============================================================
# PARTE 2 - Processamento Funcional
# ============================================================

def processamento_funcional(voluntarios: list):
    """Realiza o processamento funcional usando map, filter, lambda, reduce e list comprehensions."""

    # 1. Criar uma lista com os nomes dos voluntários (usando map + lambda)
    nomes = list(map(lambda v: v.get_nome(), voluntarios))
    print("1. Lista de nomes dos voluntários:")
    print(f"   {nomes}\n")

    # 2. Filtrar voluntários maiores de 18 anos (usando filter + lambda)
    maiores_de_18 = list(filter(lambda v: v.get_idade() > 18, voluntarios))
    print("2. Voluntários maiores de 18 anos:")
    for v in maiores_de_18:
        print(f"   - {v.get_nome()}, {v.get_idade()} anos")
    print()

    # 3. Calcular a idade média (usando reduce + lambda)
    soma_idades = reduce(lambda acc, v: acc + v.get_idade(), voluntarios, 0)
    idade_media = soma_idades / len(voluntarios)
    print(f"3. Idade média dos voluntários: {idade_media:.1f} anos\n")

    # 4. Calcular a soma das idades (usando reduce + lambda)
    print(f"4. Soma das idades: {soma_idades}\n")

    # 5. Criar mensagens no formato "João tem 25 anos" (usando list comprehension)
    mensagens = [f"{v.get_nome()} tem {v.get_idade()} anos" for v in voluntarios]
    print("5. Mensagens formatadas:")
    for msg in mensagens:
        print(f"   {msg}")


# ============================================================
# EXECUÇÃO PRINCIPAL
# ============================================================

def main():
    print("=" * 60)
    print("   SISTEMA DE VOLUNTÁRIOS - Paradigmas de Programação")
    print("=" * 60)

    # Parte 1 - Criação dos objetos (POO)
    print("\n--- PARTE 1: Modelagem com POO ---\n")
    voluntarios = criar_lista_voluntarios()

    print(f"Total de voluntários cadastrados: {len(voluntarios)}\n")
    print("Lista de voluntários:")
    for v in voluntarios:
        status = "Maior de idade" if v.eh_maior_de_idade() else "Menor de idade"
        print(f"  - {v.get_nome()}, {v.get_idade()} anos ({status})")

    # Parte 2 - Processamento funcional
    print("\n\n--- PARTE 2: Processamento Funcional ---\n")
    processamento_funcional(voluntarios)

    print("\n" + "=" * 60)


if __name__ == "__main__":
    main()
