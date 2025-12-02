var database = require("../database/config");

function kpiAcertosUltimo(idUsuario){
    var instrucao = `
        SELECT qtdAcerto FROM vwErrosAcertosUltimo WHERE idUsuario = ${idUsuario} ORDER BY idTentativa DESC LIMIT 1;
    `;
    console.log(instrucao);
    return database.executar(instrucao);
}


module.exports = {
    kpiAcertosUltimo
}