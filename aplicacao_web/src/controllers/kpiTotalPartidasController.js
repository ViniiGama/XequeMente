var kpiTotalPartidasModel = require("../models/kpiTotalPartidasModel");

function kpiTotalPartidas (req, res) {
    var idUsuario = req.params.idUsuario;

    kpiTotalPartidasModel.kpiTotalPartidas(idUsuario)
        .then(
            function(resultado) {
                res.json(resultado);
            }
        ).catch(
            function(erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o SELECT! Erro: ",
                    erro.sqlMessage
                );
                res.statsu(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    kpiTotalPartidas
}