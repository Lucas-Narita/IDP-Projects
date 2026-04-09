import java.util.Scanner;

public class LojaVeiculos {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Recebe o valor do veículo
        System.out.print("Digite o valor do veículo (R$): ");
        float valorVeiculo = scanner.nextFloat();

        if (valorVeiculo <= 0 || valorVeiculo > 200000) {
            System.out.println("Valor inválido.");
            return;
        }

        // Identifica a categoria
        int categoria;
        if (valorVeiculo <= 80000)
            categoria = 1;
        else if (valorVeiculo <= 120000)
            categoria = 2;
        else if (valorVeiculo <= 140000)
            categoria = 3;
        else if (valorVeiculo <= 160000)
            categoria = 4;
        else
            categoria = 5;

        System.out.println("Categoria do veículo: " + categoria);

        // Escolhe a forma de pagamento
        System.out.println("1 - À vista (10% de desconto)");
        System.out.println("2 - Entrada de 50% (juros de 5% a.a. em 4 anos)");
        System.out.println("3 - Entrada de 25% (juros de 8% a.a. em 4 anos)");
        System.out.print("Escolha a forma de pagamento: ");
        int opcao = scanner.nextInt();

        if (opcao < 1 || opcao > 3) {
            System.out.println("Opção inválida.");
            return;
        }

        // Calcula o valor final
        float valorFinal, entrada, restante, juros, parcela;

        if (opcao == 1) {
            valorFinal = valorVeiculo * 0.90f;
            System.out.printf("Valor final à vista: R$ %.2f\n", valorFinal);

        } else if (opcao == 2) {
            entrada = valorVeiculo * 0.50f;
            restante = valorVeiculo * 0.50f;
            juros = restante * 0.05f * 4;
            valorFinal = entrada + restante + juros;
            parcela = (restante + juros) / 48;
            System.out.printf("Entrada: R$ %.2f\n", entrada);
            System.out.printf("48x de R$ %.2f\n", parcela);
            System.out.printf("Total: R$ %.2f\n", valorFinal);

        } else {
            entrada = valorVeiculo * 0.25f;
            restante = valorVeiculo * 0.75f;
            juros = restante * 0.08f * 4;
            valorFinal = entrada + restante + juros;
            parcela = (restante + juros) / 48;
            System.out.printf("Entrada: R$ %.2f\n", entrada);
            System.out.printf("48x de R$ %.2f\n", parcela);
            System.out.printf("Total: R$ %.2f\n", valorFinal);
        }

        scanner.close();
    }
}
