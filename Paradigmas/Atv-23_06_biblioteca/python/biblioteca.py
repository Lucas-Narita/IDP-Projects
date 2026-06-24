"""
Atividade - Paradigmas de Programacao
Sistema de Biblioteca - Modelagem com POO
Classe que gerencia o acervo de livros.
"""

from livro import Livro


class Biblioteca:
    """Gerencia uma colecao de livros: cadastro, emprestimo e devolucao."""

    def __init__(self, nome: str):
        self.__nome = nome
        self.__acervo = []

    def get_nome(self) -> str:
        return self.__nome

    def get_acervo(self) -> list:
        return self.__acervo

    def cadastrar(self, livro: Livro) -> None:
        self.__acervo.append(livro)

    def buscar_por_titulo(self, titulo: str):
        """Retorna o primeiro livro com o titulo informado, ou None."""
        for livro in self.__acervo:
            if livro.get_titulo().lower() == titulo.lower():
                return livro
        return None

    def emprestar(self, titulo: str) -> bool:
        livro = self.buscar_por_titulo(titulo)
        if livro is None:
            print(f"Livro '{titulo}' nao encontrado.")
            return False
        if not livro.emprestar():
            print(f"Livro '{titulo}' ja esta emprestado.")
            return False
        print(f"Emprestimo de '{titulo}' realizado.")
        return True

    def devolver(self, titulo: str) -> bool:
        livro = self.buscar_por_titulo(titulo)
        if livro is None:
            print(f"Livro '{titulo}' nao encontrado.")
            return False
        if not livro.devolver():
            print(f"Livro '{titulo}' nao estava emprestado.")
            return False
        print(f"Devolucao de '{titulo}' registrada.")
        return True
