// é uma estrutura de dados para valores sequenciais
// inicia com indice ZERO - até INFINITY

const esportes = ['boxe', 'jiu-jitsu', 'vôlei', 'karate'];

esportes[3] // karatê
esportes[999] // undefined
// loop para pegar todos os valores
for (const esporte of esportes) {
    console.log(esporte);
}