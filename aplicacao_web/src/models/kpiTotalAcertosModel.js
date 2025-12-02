var database = require("../database/config");

function kpiTotalAcertos(idUsuario){
    var instrucao = `
    SELECT melhorPontuacao FROM vwTotalAcertos
	WHERE idUsuario = (SELECT idUsuario FROM usuario WHERE idUsuario = ${idUsuario});;
    `;
    console.log(instrucao);
    return database.executar(instrucao);
}

module.exports = {
    kpiTotalAcertos
}