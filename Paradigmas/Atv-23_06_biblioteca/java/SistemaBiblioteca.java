/*
 * Atividade - Paradigmas de Programacao
 * Sistema de Biblioteca - Modelagem com POO em Java
 * Demonstra encapsulamento, colecao de objetos e metodos.
 */

import java.util.ArrayList;
import java.util.List;

// ============================================================
// Classe que representa um livro do acervo
// ============================================================
class Livro {
    private String titulo;
    private String autor;
    private int ano;
    private boolean emprestado;

    public Livro(String titulo, String autor, int ano) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.emprestado = false;
    }

    public String getTitulo() { return titulo; }
    public String getAutor()  { return autor; }
    public int getAno()       { return ano; }
    public boolean estaEmprestado() { return emprestado; }

    public boolean emprestar() {
        if (emprestado) return false;
        emprestado = true;
        return true;
    }

    public boolean devolver() {
        if (!emprestado) return false;
        emprestado = false;
        return true;
    }
}

// ============================================================
// Classe que gerencia o acervo de livros
// ============================================================
class Biblioteca {
    private String nome;
    private List<Livro> acervo;

    public Biblioteca(String nome) {
        this.nome = nome;
        this.acervo = new ArrayList<>();
    }

    public String getNome() { return nome; }
    public List<Livro> getAcervo() { return acervo; }

    public void cadastrar(Livro livro) {
        acervo.add(livro);
    }

    public Livro buscarPorTitulo(String titulo) {
        for (Livro livro : acervo) {
            if (livro.getTitulo().equalsIgnoreCase(titulo)) {
                return livro;
            }
        }
        return null;
    }

    public boolean emprestar(String titulo) {
        Livro livro = buscarPorTitulo(titulo);
        if (livro == null) {
            System.out.println("Livro '" + titulo + "' nao encontrado.");
            return false;
        }
        if (!livro.emprestar()) {
            System.out.println("Livro '" + titulo + "' ja esta emprestado.");
            return false;
        }
        System.out.println("Emprestimo de '" + titulo + "' realizado.");
        return true;
    }

    public boolean devolver(String titulo) {
        Livro livro = buscarPorTitulo(titulo);
        if (livro == null) {
            System.out.println("Livro '" + titulo + "' nao encontrado.");
            return false;
        }
        if (!livro.devolver()) {
            System.out.println("Livro '" + titulo + "' nao estava emprestado.");
            return false;
        }
        System.out.println("Devolucao de '" + titulo + "' registrada.");
        return true;
    }
}

// ============================================================
// Programa principal
// ============================================================
public class SistemaBiblioteca {

    static void listarAcervo(Biblioteca biblioteca) {
        System.out.println("ACERVO ATUAL:");
        for (Livro livro : biblioteca.getAcervo()) {
            String estado = livro.estaEmprestado() ? "EMPRESTADO" : "disponivel";
            System.out.println("  - " + livro.getTitulo() + " (" + livro.getAutor()
                    + ", " + livro.getAno() + ") [" + estado + "]");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        System.out.println("============================================================");
        System.out.println("   SISTEMA DE BIBLIOTECA - Paradigmas de Programacao");
        System.out.println("============================================================\n");

        Biblioteca biblioteca = new Biblioteca("Biblioteca Central");
        biblioteca.cadastrar(new Livro("Dom Casmurro", "Machado de Assis", 1899));
        biblioteca.cadastrar(new Livro("O Cortico", "Aluisio Azevedo", 1890));
        biblioteca.cadastrar(new Livro("Memorias Postumas", "Machado de Assis", 1881));
        biblioteca.cadastrar(new Livro("Vidas Secas", "Graciliano Ramos", 1938));
        biblioteca.cadastrar(new Livro("Capitaes da Areia", "Jorge Amado", 1937));

        System.out.println("Biblioteca: " + biblioteca.getNome());
        System.out.println("Total de livros: " + biblioteca.getAcervo().size() + "\n");

        listarAcervo(biblioteca);

        System.out.println("--- Operacoes ---");
        biblioteca.emprestar("Dom Casmurro");
        biblioteca.emprestar("Dom Casmurro");   // ja emprestado
        biblioteca.emprestar("O Hobbit");        // nao existe
        biblioteca.devolver("Dom Casmurro");
        System.out.println();

        listarAcervo(biblioteca);
        System.out.println("============================================================");
    }
}
