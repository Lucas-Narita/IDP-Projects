# Recebe o valor do veículo
valor_veiculo = float(input("Digite o valor do veículo (R$): "))

if valor_veiculo <= 0 or valor_veiculo > 200000:
    print("Valor inválido.")
    exit()

# Identifica a categoria
if valor_veiculo <= 80000:
    categoria = 1
elif valor_veiculo <= 120000:
    categoria = 2
elif valor_veiculo <= 140000:
    categoria = 3
elif valor_veiculo <= 160000:
    categoria = 4
else:
    categoria = 5

print(f"Categoria do veículo: {categoria}")

# Escolhe a forma de pagamento
print("1 - À vista (10% de desconto)")
print("2 - Entrada de 50% (juros de 5% a.a. em 4 anos)")
print("3 - Entrada de 25% (juros de 8% a.a. em 4 anos)")

opcao = int(input("Escolha a forma de pagamento: "))

if opcao < 1 or opcao > 3:
    print("Opção inválida.")
    exit()

# Calcula o valor final
if opcao == 1:
    valor_final = valor_veiculo * 0.90
    print(f"Valor final à vista: R$ {valor_final:.2f}")

elif opcao == 2:
    entrada = valor_veiculo * 0.50
    restante = valor_veiculo * 0.50
    juros = restante * 0.05 * 4
    valor_final = entrada + restante + juros
    parcela = (restante + juros) / 48
    print(f"Entrada: R$ {entrada:.2f}")
    print(f"48x de R$ {parcela:.2f}")
    print(f"Total: R$ {valor_final:.2f}")

elif opcao == 3:
    entrada = valor_veiculo * 0.25
    restante = valor_veiculo * 0.75
    juros = restante * 0.08 * 4
    valor_final = entrada + restante + juros
    parcela = (restante + juros) / 48
    print(f"Entrada: R$ {entrada:.2f}")
    print(f"48x de R$ {parcela:.2f}")
    print(f"Total: R$ {valor_final:.2f}")
