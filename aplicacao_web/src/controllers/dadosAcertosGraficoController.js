var dadosAcertosGraficoModel = require("../models/dadosAcertosGraficoModel");

function dadosAcertosGrafico (req, res) {
    var idUsuario = req.params.idUsuario;

    dadosAcertosGraficoModel.dadosAcertosGrafico(idUsuario)
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
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    dadosAcertosGrafico
}