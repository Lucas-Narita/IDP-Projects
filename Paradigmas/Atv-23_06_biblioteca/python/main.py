"""
Atividade - Paradigmas de Programacao
Sistema de Biblioteca - Programa principal (POO)
Demonstra cadastro, emprestimo e devolucao de livros.
"""

from livro import Livro
from biblioteca import Biblioteca


def criar_acervo_inicial(biblioteca: Biblioteca) -> None:
    biblioteca.cadastrar(Livro("Dom Casmurro", "Machado de Assis", 1899))
    biblioteca.cadastrar(Livro("O Cortico", "Aluisio Azevedo", 1890))
    biblioteca.cadastrar(Livro("Memorias Postumas", "Machado de Assis", 1881))
    biblioteca.cadastrar(Livro("Vidas Secas", "Graciliano Ramos", 1938))
    biblioteca.cadastrar(Livro("Capitaes da Areia", "Jorge Amado", 1937))


def listar_acervo(biblioteca: Biblioteca) -> None:
    print("ACERVO ATUAL:")
    for livro in biblioteca.get_acervo():
        estado = "EMPRESTADO" if livro.esta_emprestado() else "disponivel"
        print(f"  - {livro.get_titulo()} ({livro.get_autor()}, {livro.get_ano()}) [{estado}]")
    print()


def main():
    print("=" * 60)
    print("   SISTEMA DE BIBLIOTECA - Paradigmas de Programacao")
    print("=" * 60)
    print()

    biblioteca = Biblioteca("Biblioteca Central")
    criar_acervo_inicial(biblioteca)

    print(f"Biblioteca: {biblioteca.get_nome()}")
    print(f"Total de livros: {len(biblioteca.get_acervo())}\n")

    listar_acervo(biblioteca)

    print("--- Operacoes ---")
    biblioteca.emprestar("Dom Casmurro")
    biblioteca.emprestar("Dom Casmurro")   # ja emprestado
    biblioteca.emprestar("O Hobbit")        # nao existe
    biblioteca.devolver("Dom Casmurro")
    print()

    listar_acervo(biblioteca)
    print("=" * 60)


if __name__ == "__main__":
    main()
