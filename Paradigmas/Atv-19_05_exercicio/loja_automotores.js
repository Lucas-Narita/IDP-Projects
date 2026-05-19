class LojaAutomotores {
    constructor(preco) {
        this.preco = preco;
    }

    calcularParcelado() {
        return (this.preco * 1.3) / 48;
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

function comprarVeiculo(preco) {
    let veiculo;
    if (preco <= 10000) {
        veiculo = new Moto(preco);
    } else if (preco <= 90000) {
        veiculo = new CarroPequeno(preco);
    } else if (preco <= 200000) {
        veiculo = new CarroGrande(preco);
    } else {
        console.log("Não vendemos veículos com preço acima de 200 mil.");
        return;
    }

    console.log('Preço total: R$', veiculo.preco);
    console.log('Valor da parcela (48x):', veiculo.calcularParcelado());
}

comprarVeiculo(15000); // Moto
