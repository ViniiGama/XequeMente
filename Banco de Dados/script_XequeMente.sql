CREATE DATABASE XequeMente;
USE XequeMente;

CREATE TABLE usuario(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
email VARCHAR(100),
senha VARCHAR(45),
experienciaUsuario INT
);

select * from usuario;

CREATE TABLE quiz(
idQuiz INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
descricao VARCHAR(100),
experienciaTotal INT
);

CREATE TABLE tentativa(
idTentativa INT AUTO_INCREMENT,
fkUsuario INT,
fkQuiz INT,
CONSTRAINT PkComposta
PRIMARY KEY (idTentativa, fkUsuario, fkQuiz),
CONSTRAINT fkUsuarioTentativa
	FOREIGN KEY (fkUsuario)
		REFERENCES usuario(idUsuario),
CONSTRAINT fkQuizTentativa
	FOREIGN KEY (fkQuiz)
		REFERENCES quiz(idQuiz),
qtdAcerto INT,
qtdErro INT

);

INSERT INTO quiz (nome, descricao, experienciaTotal) VALUES
	('Básico','Perguntas de iniciantes do Xadrez para praticar e entender o conceito', 50);

SELECT * FROM usuario;
SELECT * FROM tentativa;
SELECT * FROM quiz;


-- Partidas jogadas
SELECT COUNT(idTentativa) FROM tentativa;

-- Maior quantidade de acertos por partida
CREATE OR REPLACE VIEW vwTotalPartidas AS 
SELECT t.fkUsuario AS idUsuario, COUNT(t.idTentativa) AS totalPartidas
FROM tentativa t JOIN quiz q
ON q.idQuiz = t.fkUsuario
GROUP by t.fkUsuario;

SELECT totalPartidas FROM vwTotalPartidas
	WHERE idUsuario = (SELECT idUsuario FROM usuario WHERE idUsuario = 1);

-- Maior quantidade de acertos por partida
CREATE OR REPLACE VIEW vwTotalAcertos AS 
SELECT t.fkUsuario AS idUsuario, MAX(t.qtdAcerto) AS melhorPontuacao
FROM tentativa t JOIN quiz q
ON q.idQuiz = t.fkUsuario
GROUP by t.fkUsuario;

SELECT melhorPontuacao FROM vwTotalAcertos
	WHERE idUsuario = (SELECT idUsuario FROM usuario WHERE idUsuario = 1);

-- Menor quantidade de acertos por partida
CREATE OR REPLACE VIEW vwTotalErros AS 
SELECT t.fkUsuario AS idUsuario, MIN(t.qtdErro) AS piorPontuacao
FROM tentativa t JOIN quiz q
ON q.idQuiz = t.fkUsuario
GROUP by t.fkUsuario;

	SELECT piorPontuacao FROM vwTotalErros
		WHERE idUsuario = (SELECT idUsuario FROM usuario WHERE idUsuario = 1);
        
-- Todas as partidas e maior quantidade de acertos em cada uma delas

CREATE OR REPLACE VIEW vwPartidasGrafico AS 
SELECT 
  t.idTentativa,
  t.fkUsuario AS idUsuario, 
  t.qtdAcerto AS qtdAcerto
FROM tentativa t
ORDER BY t.idTentativa;

SELECT idTentativa, qtdAcerto
FROM vwPartidasGrafico
WHERE idUsuario = 1
ORDER BY idTentativa;

CREATE OR REPLACE VIEW vwErrosAcertosUltimo AS
SELECT t.idTentativa,
		t.fkUsuario AS idUsuario,
        t.qtdAcerto AS qtdAcerto,
        t.qtdErro AS qtdErro
FROM tentativa t;
	

SELECT qtdAcerto FROM vwErrosAcertosUltimo WHERE idUsuario = 1 ORDER BY idTentativa DESC LIMIT 1;
SELECT qtdErro FROM vwErrosAcertosUltimo WHERE idUsuario = 1 ORDER BY idTentativa DESC LIMIT 1;


