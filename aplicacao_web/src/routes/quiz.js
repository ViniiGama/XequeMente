var express = require("express"); // Chamando o Framework Express para o arquivo
var router = express.Router(); // Tipo um roteador para guardar as rotas para o express utilizar posteriormente

var quizController = require("../controllers/quizController")

router.post("/cadastrarRespostas", function (req, res){
    quizController.cadastrarRespostas(req, res);
})

// router.get("/receberDados", function(req,res){
//     quizController.receberDados(req, res);
// })

module.exports = router; // exportando para o express utilizar o que está acima
