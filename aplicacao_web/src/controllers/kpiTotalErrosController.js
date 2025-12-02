var kpiTotalErrosModel = require("../models/kpiTotalErrosModel");

function kpiTotalErros (req, res) {
    var idUsuario = req.params.idUsuario;

    kpiTotalErrosModel.kpiTotalErros(idUsuario)
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
    kpiTotalErros
}