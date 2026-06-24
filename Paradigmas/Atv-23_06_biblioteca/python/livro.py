"""
Atividade - Paradigmas de Programacao
Sistema de Biblioteca - Modelagem com POO
Classe que representa um livro do acervo.
"""


class Livro:
    """Representa um livro com titulo, autor, ano e estado de emprestimo."""

    def __init__(self, titulo: str, autor: str, ano: int):
        self.__titulo = titulo
        self.__autor = autor
        self.__ano = ano
        self.__emprestado = False

    # Getters
    def get_titulo(self) -> str:
        return self.__titulo

    def get_autor(self) -> str:
        return self.__autor

    def get_ano(self) -> int:
        return self.__ano

    def esta_emprestado(self) -> bool:
        return self.__emprestado

    # Comportamentos
    def emprestar(self) -> bool:
        """Marca o livro como emprestado. Retorna False se ja estava."""
        if self.__emprestado:
            return False
        self.__emprestado = True
        return True

    def devolver(self) -> bool:
        """Marca o livro como disponivel. Retorna False se nao estava emprestado."""
        if not self.__emprestado:
            return False
        self.__emprestado = False
        return True

    def __repr__(self):
        estado = "emprestado" if self.__emprestado else "disponivel"
        return f"Livro('{self.__titulo}', {self.__autor}, {self.__ano}, {estado})"
