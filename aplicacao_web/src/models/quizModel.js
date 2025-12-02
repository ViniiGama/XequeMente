var database = require("../database/config");

function cadastrarRespostas(acertos, erros, idUsuario, idQuiz) {
    var instrucao = `
        INSERT INTO tentativa (fkUsuario, fkQuiz, qtdAcerto, qtdErro)
        VALUES (${idUsuario}, ${idQuiz}, ${acertos}, ${erros});
    `;
    
    return database.executar(instrucao);
}

module.exports = {
    cadastrarRespostas
}