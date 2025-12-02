var express = require("express"); // Chamando o Framework Express para o arquivo
var router = express.Router(); // Tipo um roteador para guardar as rotas para o express utilizar posteriormente

var kpiTotalErrosController = require("../controllers/kpiTotalErrosController")

router.get("/kpiTotalErros/:idUsuario", function(req,res){
    kpiTotalErrosController.kpiTotalErros(req, res);
})

module.exports = router; // exportando para o express utilizar o que está acima