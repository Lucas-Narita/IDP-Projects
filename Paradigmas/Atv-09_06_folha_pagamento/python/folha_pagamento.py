VALOR_HORA_AULA = 50
SEMANAS_NO_MES = 4.5


def calcular_salario_bruto(horas_semanais):
    salario_bruto = (horas_semanais * SEMANAS_NO_MES) * VALOR_HORA_AULA
    return salario_bruto


def calcular_inss(salario_bruto):
    inss = salario_bruto * 0.11
    return inss


def calcular_imposto_renda(salario_bruto, inss):
    base = salario_bruto - inss

    if base <= 2500:
        aliquota = 0
    elif base <= 5000:
        aliquota = 0.075
    else:
        aliquota = 0.15

    imposto = base * aliquota
    return imposto


def calcular_sindicato(salario_bruto):
    sindicato = salario_bruto * 0.02
    return sindicato


def calcular_parcela_emprestimo(valor_emprestimo, salario_bruto):
    if valor_emprestimo <= 0:
        return 0

    total_com_juros = valor_emprestimo * (1 + 0.03 * 24)
    parcela = total_com_juros / 24

    if parcela > salario_bruto * 0.30:
        print("ATENCAO: parcela acima de 30% do salario bruto.")
        print("Emprestimo NAO liberado para este professor.")
        return 0

    return parcela


def calcular_salario_liquido(salario_bruto, inss, ir, sindicato, parcela):
    liquido = salario_bruto - inss - ir - sindicato - parcela
    return liquido


def processar_professor(nome, horas_semanais, valor_emprestimo):
    salario_bruto = calcular_salario_bruto(horas_semanais)
    inss = calcular_inss(salario_bruto)
    ir = calcular_imposto_renda(salario_bruto, inss)
    sindicato = calcular_sindicato(salario_bruto)
    parcela = calcular_parcela_emprestimo(valor_emprestimo, salario_bruto)
    liquido = calcular_salario_liquido(salario_bruto, inss, ir, sindicato, parcela)

    professor = {
        "nome": nome,
        "horas": horas_semanais,
        "bruto": salario_bruto,
        "inss": inss,
        "ir": ir,
        "sindicato": sindicato,
        "parcela": parcela,
        "liquido": liquido,
    }
    return professor


def imprimir_contracheque(professor):
    print("CONTRACHEQUE -", professor["nome"])
    print(f"Horas semanais: {professor['horas']}")
    print(f"Salario bruto: R$ {professor['bruto']:.2f}")
    print(f"Desconto INSS: R$ {professor['inss']:.2f}")
    print(f"Imposto de Renda: R$ {professor['ir']:.2f}")
    print(f"Contribuicao sindical: R$ {professor['sindicato']:.2f}")
    print(f"Parcela emprestimo: R$ {professor['parcela']:.2f}")
    print(f"SALARIO LIQUIDO: R$ {professor['liquido']:.2f}")
    print()


def gerar_relatorio_geral(lista_professores):
    total_bruto = 0
    total_liquido = 0
    total_descontos = 0

    for professor in lista_professores:
        total_bruto += professor["bruto"]
        total_liquido += professor["liquido"]
        total_descontos += professor["bruto"] - professor["liquido"]

    print("RESUMO GERAL DA FOLHA DE PAGAMENTO")
    print(f"Quantidade de professores: {len(lista_professores)}")
    print(f"Total salario bruto: R$ {total_bruto:.2f}")
    print(f"Total de descontos: R$ {total_descontos:.2f}")
    print(f"Total salario liquido: R$ {total_liquido:.2f}")
