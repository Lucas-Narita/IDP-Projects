/*
 * Atividade - Paradigmas de Programacao
 * Conversor de Temperatura - JavaScript (paradigma funcional)
 * Funcoes puras de conversao entre Celsius, Fahrenheit e Kelvin.
 */

// ---- Funcoes puras de conversao (sem efeitos colaterais) ----
const celsiusParaFahrenheit = (c) => c * 9 / 5 + 32;
const celsiusParaKelvin = (c) => c + 273.15;
const fahrenheitParaCelsius = (f) => (f - 32) * 5 / 9;
const kelvinParaCelsius = (k) => k - 273.15;

// Tabela de valores em Celsius para demonstracao
const valoresCelsius = [-40, 0, 25, 37, 100];

function imprimirTabela(valores) {
    console.log("=".repeat(48));
    console.log("CELSIUS    FAHRENHEIT      KELVIN");
    console.log("=".repeat(48));

    // map gera uma linha formatada para cada temperatura
    const linhas = valores.map((c) => {
        const f = celsiusParaFahrenheit(c);
        const k = celsiusParaKelvin(c);
        return (
            `${c.toFixed(1).padStart(6)} C ` +
            `${f.toFixed(1).padStart(9)} F ` +
            `${k.toFixed(2).padStart(11)} K`
        );
    });

    linhas.forEach((linha) => console.log(linha));
    console.log("=".repeat(48));
}

function exemplosInversos() {
    console.log("\nConversoes inversas (exemplos):");
    console.log(`212 F  -> ${fahrenheitParaCelsius(212).toFixed(1)} C`);
    console.log(`300 K  -> ${kelvinParaCelsius(300).toFixed(2)} C`);
}

console.log("CONVERSOR DE TEMPERATURA - Paradigmas de Programacao\n");
imprimirTabela(valoresCelsius);
exemplosInversos();
