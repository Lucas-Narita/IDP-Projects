"""
Atividade - Paradigmas de Programacao
Sistema de Biblioteca - Processamento Funcional (Parte 2)
Usa map, filter, reduce, lambda e list comprehension sobre o acervo.
"""

from functools import reduce

from livro import Livro
from biblioteca import Biblioteca


def montar_biblioteca() -> Biblioteca:
    biblioteca = Biblioteca("Biblioteca Central")
    biblioteca.cadastrar(Livro("Dom Casmurro", "Machado de Assis", 1899))
    biblioteca.cadastrar(Livro("O Cortico", "Aluisio Azevedo", 1890))
    biblioteca.cadastrar(Livro("Memorias Postumas", "Machado de Assis", 1881))
    biblioteca.cadastrar(Livro("Vidas Secas", "Graciliano Ramos", 1938))
    biblioteca.cadastrar(Livro("Capitaes da Areia", "Jorge Amado", 1937))
    return biblioteca


def processamento_funcional(acervo: list) -> None:
    # 1. Lista com os titulos (map + lambda)
    titulos = list(map(lambda l: l.get_titulo(), acervo))
    print("1. Titulos do acervo:")
    print(f"   {titulos}\n")

    # 2. Livros publicados antes de 1900 (filter + lambda)
    classicos = list(filter(lambda l: l.get_ano() < 1900, acervo))
    print("2. Livros anteriores a 1900:")
    for l in classicos:
        print(f"   - {l.get_titulo()} ({l.get_ano()})")
    print()

    # 3. Ano medio de publicacao (reduce + lambda)
    soma_anos = reduce(lambda acc, l: acc + l.get_ano(), acervo, 0)
    ano_medio = soma_anos / len(acervo)
    print(f"3. Ano medio de publicacao: {ano_medio:.0f}\n")

    # 4. Livro mais antigo (reduce + lambda)
    mais_antigo = reduce(lambda a, b: a if a.get_ano() <= b.get_ano() else b, acervo)
    print(f"4. Livro mais antigo: {mais_antigo.get_titulo()} ({mais_antigo.get_ano()})\n")

    # 5. Mensagens formatadas (list comprehension)
    fichas = [f"{l.get_titulo()} - {l.get_autor()}" for l in acervo]
    print("5. Fichas catalograficas:")
    for ficha in fichas:
        print(f"   {ficha}")


def main():
    print("=" * 60)
    print("   BIBLIOTECA - Processamento Funcional")
    print("=" * 60)
    print()

    biblioteca = montar_biblioteca()
    processamento_funcional(biblioteca.get_acervo())

    print("\n" + "=" * 60)


if __name__ == "__main__":
    main()
