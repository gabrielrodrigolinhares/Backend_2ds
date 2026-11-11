// são estruturas complexa de dados 
// agrupamento de valores em pares chave:valor
const celular = {
    tela : '6.7',
    modelo : 'Samsung Galaxy S21',
    cor : ['violeta', 'ciano', 'cinza', 'branco', 'bege'],
    acao: function onOf() { console.log('liga/desliga'); }
}
console.log(celular.cor[1]);
console.log(celular.acao) // menciona, mas não executa
console.log(celular.acao()) // executa literalmente