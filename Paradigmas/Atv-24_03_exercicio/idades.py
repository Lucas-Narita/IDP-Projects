# Constante
total_pessoas = 5

# Listas
nomes  = []
idades = []

# Entrada
for i in range(total_pessoas):
    print(f"--- Pessoa {i + 1} ---")
    nomes.append(input("Nome: "))          
    idades.append(int(input("Idade: ")))   
    print()

# Compara idades
mais_velha = 0

for i in range(1, total_pessoas):
    if idades[i] > idades[mais_velha]:
        mais_velha = i

# Calcula Media
soma = 0
for i in range(total_pessoas):
    soma += idades[i]

media = soma / total_pessoas

# Resultado
print("=" * 40)
print(f"Mais velha: {nomes[mais_velha]} ({idades[mais_velha]} anos)")
print(f"Média:      {media:.1f} anos")
print("=" * 40)
