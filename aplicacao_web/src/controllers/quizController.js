var quizModel = require("../models/quizModel");

function cadastrarRespostas(req, res) {
  console.log("DADOS RECEBIDOS NO BACK:", req.body);
  var acertos = req.body.acertos;
  var erros = req.body.erros;
  var idUsuario = req.body.idUsuario;
  var idQuiz = 1;
 
quizModel.cadastrarRespostas(acertos, erros, idUsuario, idQuiz)
    .then((resultado) => {
      res.status(201).json(resultado);
    })
    .catch((erro) => {
      console.error(erro);
      res.status(500).json({ erro: "Erro ao cadastrar respostas no banco" });
    });
}

// function receberDados(req,res) {
//   console.log("deu certo", req.body)
//   var acertos = req.body.acertos;
//   var erros = req.body.erros;

// quizModel.receberDados(acertos, erros)
// }

module.exports = {
  cadastrarRespostas,
};
