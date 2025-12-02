var database = require("../database/config");

function kpiTotalErros(idUsuario){
    var instrucao = `
    SELECT piorPontuacao FROM vwTotalErros
	WHERE idUsuario = (SELECT idUsuario FROM usuario WHERE idUsuario = ${idUsuario});
    `;
    console.log(instrucao);
    return database.executar(instrucao);
}

module.exports = {
    kpiTotalErros
}