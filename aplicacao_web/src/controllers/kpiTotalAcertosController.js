var kpiTotalAcertosModel = require("../models/kpiTotalAcertosModel");

function kpiTotalAcertos (req, res) {
    var idUsuario = req.params.idUsuario;

    kpiTotalAcertosModel.kpiTotalAcertos(idUsuario)
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
    kpiTotalAcertos
}