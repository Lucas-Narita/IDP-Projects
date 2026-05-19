class LojaAutomotores {
    constructor(preco) {
        this.preco = preco;
    }

    calcularTotal() {
        return this.preco * 1.3;
    }

    calcularParcelado() {
        return this.calcularTotal() / 48;
    }
}

class CarroPequeno extends LojaAutomotores {
    constructor(preco) {
        super(preco);
    }
}

class CarroGrande extends LojaAutomotores {
    constructor(preco) {
        super(preco);
    }
}

class Moto extends LojaAutomotores {
    constructor(preco) {
        super(preco);
    }
}

class Caminhonete extends LojaAutomotores {
    constructor(preco) {
        super(preco);
    }
}

class Caminhao extends LojaAutomotores {
    constructor(preco) {
        super(preco);
    }
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function exibirMenu() {
    console.log('\n=== Loja Automotores ===');
    console.log('1. Moto');
    console.log('2. Carro Pequeno');
    console.log('3. Caminhonete');
    console.log('4. Carro Grande');
    console.log('5. Caminhão');
    console.log('0. Sair');
}

const nomesVeiculo = {
    '1': 'Moto',
    '2': 'Carro Pequeno',
    '3': 'Caminhonete',
    '4': 'Carro Grande',
    '5': 'Caminhão'
};

function criarVeiculo(opcao, preco) {
    switch (opcao) {
        case '1': return new Moto(preco);
        case '2': return new CarroPequeno(preco);
        case '3': return new Caminhonete(preco);
        case '4': return new CarroGrande(preco);
        case '5': return new Caminhao(preco);
        default:  return null;
    }
}

function exibirPagamento(pagamento, veiculo) {
    console.log('\n=== Resumo da Compra ===');
    console.log(`Veículo:           ${veiculo.nome}`);
    console.log(`Preço do veículo:  R$ ${veiculo.preco.toFixed(2)}`);

    switch (pagamento) {
        case '1':
            console.log('Pagamento:         À vista');
            console.log(`Valor final:       R$ ${veiculo.preco.toFixed(2)}`);
            break;
        case '2':
            console.log('Pagamento:         Parcelado');
            console.log(`Valor total:       R$ ${veiculo.calcularTotal().toFixed(2)} (c/ 30% de juros)`);
            console.log(`Parcela (48x):     R$ ${veiculo.calcularParcelado().toFixed(2)}`);
            break;
        default:
            console.log('Opção de pagamento inválida!');
    }
}

exibirMenu();
rl.question('Escolha o veículo: ', (opcao) => {
    if (opcao === '0') {
        console.log('Saindo...');
        rl.close();
        return;
    }

    if (!nomesVeiculo[opcao]) {
        console.log('Opção inválida!');
        rl.close();
        return;
    }

    rl.question('Digite o preço: R$ ', (entrada) => {
        const preco = parseFloat(entrada);
        const veiculo = criarVeiculo(opcao, preco);
        veiculo.nome = nomesVeiculo[opcao];

        console.log('\n=== Forma de Pagamento ===');
        console.log('1. À vista');
        console.log('2. Parcelado (48x)');

        rl.question('Escolha: ', (pagamento) => {
            exibirPagamento(pagamento, veiculo);
            rl.close();
        });
    });
});
