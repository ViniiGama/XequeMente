var express = require("express"); // Chamando o Framework Express para o arquivo
var router = express.Router(); // Tipo um roteador para guardar as rotas para o express utilizar posteriormente

var kpiTotalAcertosController = require("../controllers/kpiTotalAcertosController")

router.get("/kpiTotalAcertos/:idUsuario", function(req,res){
    kpiTotalAcertosController.kpiTotalAcertos(req, res);
})

module.exports = router; // exportando para o express utilizar o que está acima