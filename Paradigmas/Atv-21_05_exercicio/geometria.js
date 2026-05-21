class Geometria {
    constructor(raio) {
        this.raio = raio;
    }
}

class Esfera extends Geometria {
    constructor(raio) {
        super(raio);
    }
    calcularArea() {
        return 4 * Math.PI * this.raio ** 2;
    }
    calcularVolume() {
        return (4 / 3) * Math.PI * this.raio ** 3;
    }
}

class Circunferencia extends Geometria {
    constructor(raio) {
        super(raio);
    }
    calcularArea() {
        return Math.PI * this.raio ** 2;
    }
    calcularPerimetro() {
        return 2 * Math.PI * this.raio;
    }
}

class Cilindro extends Geometria {
    constructor(raio, altura) {
        super(raio);
        this.altura = altura;
    }
    calcularArea() {
        return 2 * Math.PI * this.raio * (this.raio + this.altura);
    }
    calcularVolume() {
        return Math.PI * this.raio ** 2 * this.altura;
    }
}

const readline = require('readline');

let opcao= prompt('=== Geometria=\n 1. Esfera\n 2. Circunferencia\n 3. Cilindro\n Escolha uma opcao: ');

    switch (opcao) {
    
        case '1':{
             let r = parseFloat(prompt("raio = "))
                const esfera = new Esfera(r);
                console.log('Raio:', esfera.raio);
                console.log('Area:', esfera.calcularArea().toFixed(2));
                console.log('Volume:', esfera.calcularVolume().toFixed(2));
                
            
            break;}

        case '2': {
            let r = parseFloat(prompt("raio = "));
            const circ = new Circunferencia(r);
            console.log('Raio:', circ.raio);
            console.log('Area:', circ.calcularArea().toFixed(2));
            console.log('Perimetro:', circ.calcularPerimetro().toFixed(2));
            break;
        }

        case '3': {
            let r = parseFloat(prompt("raio = "));
            let h = parseFloat(prompt("altura = "));
            const cilindro = new Cilindro(r, h);
            console.log('Raio:', cilindro.raio);
            console.log('Altura:', cilindro.altura);
            console.log('Area:', cilindro.calcularArea().toFixed(2));
            console.log('Volume:', cilindro.calcularVolume().toFixed(2));
            break;
        }

        default:
            console.log('Opcao invalida');
    }