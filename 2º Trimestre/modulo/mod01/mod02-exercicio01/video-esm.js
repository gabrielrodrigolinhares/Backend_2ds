
export function alugarFilme(nomeFilme, dataAlugel, preco) {
    return `Filme: "${nomeFilme}" alugado em ${dataAlugel} por R$ ${preco.toFixed(2)}.`;
}

export function devolverFilme(nomeFilme, dataDevolucao) {
    return `Filme: "${nomeFilme}" devolvido com sucesso em ${dataDevolucao}.`;
}
