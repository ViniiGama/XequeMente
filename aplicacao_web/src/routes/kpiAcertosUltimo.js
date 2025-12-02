var express = require("express"); // Chamando o Framework Express para o arquivo
var router = express.Router(); // Tipo um roteador para guardar as rotas para o express utilizar posteriormente

var kpiAcertosUltimoController = require("../controllers/kpiAcertosUltimoController")

router.get("/kpiAcertosUltimo/:idUsuario", function(req,res){
    kpiAcertosUltimoController.kpiAcertosUltimo(req, res);
})

module.exports = router; // exportando para o express utilizar o que está acima