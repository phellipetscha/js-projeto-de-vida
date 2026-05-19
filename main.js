import java.time.Duration;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Cronometro {

    public static void main(String[] args) throws InterruptedException {

        DateTimeFormatter formato =
                DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

        // Datas futuras
        LocalDateTime tempoObjetivo1 =
                LocalDateTime.parse("2026-06-05 00:00:00", formato);

        LocalDateTime tempoObjetivo2 =
                LocalDateTime.parse("2026-08-05 00:00:00", formato);

        LocalDateTime tempoObjetivo3 =
                LocalDateTime.parse("2026-10-30 00:00:00", formato);

        LocalDateTime tempoObjetivo4 =
                LocalDateTime.parse("2026-12-01 00:00:00", formato);

        LocalDateTime[] tempos = {
                tempoObjetivo1,
                tempoObjetivo2,
                tempoObjetivo3,
                tempoObjetivo4
        };

        while (true) {

            for (int i = 0; i < tempos.length; i++) {

                long[] resultado = calculaTempo(tempos[i]);

                System.out.println("Cronômetro " + (i + 1));
                System.out.println(
                        resultado[0] + " dias, " +
                        resultado[1] + " horas, " +
                        resultado[2] + " minutos, " +
                        resultado[3] + " segundos"
                );

                System.out.println("-------------------");
            }

            Thread.sleep(1000);

            // limpa o console
            System.out.print("\033[H\033[2J");
            System.out.flush();
        }
    }

    public static long[] calculaTempo(LocalDateTime tempoObjetivo) {

        LocalDateTime agora = LocalDateTime.now();

        Duration duracao = Duration.between(agora, tempoObjetivo);

        long segundosTotais = duracao.getSeconds();

        // quando acabar o tempo
        if (segundosTotais <= 0) {
            return new long[]{0, 0, 0, 0};
        }

        long dias = segundosTotais / 86400;
        long horas = (segundosTotais % 86400) / 3600;
        long minutos = (segundosTotais % 3600) / 60;
        long segundos = segundosTotais % 60;

        return new long[]{dias, horas, minutos, segundos};
    }
}