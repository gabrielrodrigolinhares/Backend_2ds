// funções são blocos de código realizáveis
// remete a alguma ação ou procedimento (replicável)
// exige nomes auto-explicativos
function montarCarros(pecas, regras, documentos, montador) {
 return {
itens : [[pecas, regras, documentos, montador]],
    montar: function() { console.log('Carros montados com sucesso \\o/')} }
 }
montarCarros('motor', 'manual', 'documentos', 'montador').montar();