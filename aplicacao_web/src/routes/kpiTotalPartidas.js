var express = require("express"); // Chamando o Framework Express para o arquivo
var router = express.Router(); // Tipo um roteador para guardar as rotas para o express utilizar posteriormente

var kpiTotalPartidasController = require("../controllers/kpiTotalPartidasController")

router.get("/kpiTotalPartidas/:idUsuario", function(req,res){
    kpiTotalPartidasController.kpiTotalPartidas(req, res);
})

module.exports = router; // exportando para o express utilizar o que está acima