// Gerador de Senhas Seguras
function gerarSenha(tamanho = 12) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    let senha = '';
    for (let i = 0; i < tamanho; i++) {
        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return senha;
}

document.getElementById('gerar-senha').addEventListener('click', () => {
    const senhaSegura = gerarSenha();
    document.getElementById('senha-segurada').innerText = `Senha gerada: ${senhaSegura}`;
});

// Funções para o Quiz
const perguntas = [
    { pergunta: "Qual é o filme de terror mais icônico?", respostas: ["O Exorcista", "A Noite dos Mortos-Vivos", "Psycho"], respostaCorreta: 0 },
    { pergunta: "Quem dirigiu 'O Iluminado'?", respostas: ["Stanley Kubrick", "Steven Spielberg", "Alfred Hitchcock"], respostaCorreta: 0 },
    { pergunta: "Qual filme apresenta o personagem Freddy Krueger?", respostas: ["A Hora do Pesadelo", "Halloween", "Sexta-Feira 13"], respostaCorreta: 0 },
];

document.getElementById('iniciar-quiz').addEventListener('click', () => {
    let acertos = 0;
    perguntas.forEach((pergunta, index) => {
        const respostaUsuario = prompt(pergunta.pergunta + '\n' + pergunta.respostas.join('\n'));
        if (pergunta.respostas[pergunta.respostaCorreta].toLowerCase() === respostaUsuario.toLowerCase()) {
            acertos++;
        }
    });
    document.getElementById('resultado-quiz').innerText = `Você acertou ${acertos} de ${perguntas.length} perguntas!`;
});

// Criando Gráficos Dinâmicos
const ctx = document.getElementById('grafico').getContext('2d');
const dados = {
    labels: ['Filmes Clássicos', 'Filmes Modernos', 'Filmes Independentes'],
    datasets: [{
        label: 'Popularidade dos Filmes de Terror',
        data: [45, 32, 40],
        data: [40, 30, 20],
        backgroundColor: [
            'rgba(229, 57, 53, 0.5)',
            'rgba(255, 193, 7, 0.5)',
            'rgba(76, 175, 80, 0.5)',
        ],
        borderColor: [
            'rgba(229, 57, 53, 1)',
            'rgba(255, 193, 7, 1)',
            'rgba(76, 175, 80, 1)',
        ],
        borderWidth: 1
    }]
};

const grafico = new Chart (ctx, {
    type: 'bar',
    data: dados,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});