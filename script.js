function atualizarContador() {
            // Data alvo (ano, mês - 1, dia)
            const dataAlvo = new Date(2026, 2, 20); // Mês 2 é Março (Janeiro é 0)
            const agora = new Date();

            // Calcula a diferença em milissegundos
            const diferencaEmMilissegundos = dataAlvo - agora;

            // Verifica se a data já passou
            if (diferencaEmMilissegundos < 0) {
                document.getElementById('contador').innerText = "The Mountain Lançou!";
                return;
            }

            // Converte milissegundos para dias, horas, minutos e segundos
            const segundosTotais = Math.floor(diferencaEmMilissegundos / 1000);
            const dias = Math.floor(segundosTotais / (3600 * 24));
            const horas = Math.floor((segundosTotais % (3600 * 24)) / 3600);
            const minutos = Math.floor((segundosTotais % 3600) / 60);
            const segundos = segundosTotais % 60;

            // Formata a string do contador
            const textoContador = `Falta ${dias} dias, ${horas}h, ${minutos}m, ${segundos}s para The Mountain lançar`;

            // Atualiza o conteúdo do parágrafo no HTML
            document.getElementById('contador').innerText = textoContador;
        }

        // Chama a função para exibir o contador imediatamente
        atualizarContador();

        // Atualiza o contador a cada segundo (1000 milissegundos)
        setInterval(atualizarContador, 1000);