var express = require("express"); // Chamando o Framework Express para o arquivo
var router = express.Router(); // Tipo um roteador para guardar as rotas para o express utilizar posteriormente

var dadosAcertosGraficoController = require("../controllers/dadosAcertosGraficoController")

router.get("/dadosAcertosGrafico/:idUsuario", function(req,res){
    dadosAcertosGraficoController.dadosAcertosGrafico(req, res);
})

module.exports = router; // exportando para o express utilizar o que está acima