var database = require("../database/config");

function kpiTotalPartidas(idUsuario){
    var instrucao = `
    SELECT totalPartidas FROM vwTotalPartidas
	WHERE idUsuario = (SELECT idUsuario FROM usuario WHERE idUsuario = ${idUsuario});
    `;
    console.log(instrucao);
    return database.executar(instrucao);
}

module.exports = {
    kpiTotalPartidas
}