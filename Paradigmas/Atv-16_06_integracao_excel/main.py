import os
import subprocess
import sys

PASTA = os.path.dirname(os.path.abspath(__file__))
SCRIPT_JS = "processaFuncionarios.js"


def main():
    print("Chamando o processamento em JavaScript via Node.js...\n")

    try:
        resultado = subprocess.run(
            ["node", SCRIPT_JS],
            cwd=PASTA,
            capture_output=True,
            text=True,
            check=True,
        )
    except FileNotFoundError:
        print("Erro: Node.js nao encontrado. Instale o Node para continuar.")
        sys.exit(1)
    except subprocess.CalledProcessError as erro:
        print("O script JavaScript falhou:")
        print(erro.stderr)
        sys.exit(1)

    print(resultado.stdout)
    print("Relatorio salvo em relatorio.txt")


if __name__ == "__main__":
    main()
