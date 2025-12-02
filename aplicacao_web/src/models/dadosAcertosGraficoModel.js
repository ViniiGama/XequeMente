var database = require("../database/config");

function dadosAcertosGrafico(idUsuario){
    var instrucao = `
        SELECT idTentativa, qtdAcerto FROM vwPartidasGrafico WHERE idUsuario = ${idUsuario}
        ORDER BY idTentativa DESC LIMIT 10;
    `;
    console.log(instrucao);
    return database.executar(instrucao);
}


module.exports = {
    dadosAcertosGrafico
}