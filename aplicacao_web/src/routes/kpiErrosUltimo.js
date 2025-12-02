var express = require("express"); // Chamando o Framework Express para o arquivo
var router = express.Router(); // Tipo um roteador para guardar as rotas para o express utilizar posteriormente

var kpiErrosUltimoController = require("../controllers/kpiErrosUltimoController")

router.get("/kpiErrosUltimo/:idUsuario", function(req,res){
    kpiErrosUltimoController.kpiErrosUltimo(req, res);
})

module.exports = router; // exportando para o express utilizar o que está acima