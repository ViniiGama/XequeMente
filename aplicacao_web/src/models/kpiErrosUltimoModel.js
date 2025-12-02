var database = require("../database/config");

function kpiErrosUltimo(idUsuario){
    var instrucao = `
        SELECT qtdErro FROM vwErrosAcertosUltimo WHERE idUsuario = ${idUsuario} ORDER BY idTentativa DESC LIMIT 1;
    `;
    console.log(instrucao);
    return database.executar(instrucao);
}


module.exports = {
    kpiErrosUltimo
}