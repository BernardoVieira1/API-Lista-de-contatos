const db = require("../database/connection");

async function criarContato(nome, telefone) {
  const [result] = await db.query(
    "INSERT INTO contatos (nome, telefone) VALUES (?, ?)",
    [nome, telefone]
  );

  return {
    id: result.insertId,
    nome,
    telefone
  };
}

async function listarContatos() {
  const [rows] = await db.query("SELECT * FROM contatos");
  return rows;
}

async function atualizarContato(id, nome, telefone) {
  await db.query(
    "UPDATE contatos SET nome = ?, telefone = ? WHERE id = ?",
    [nome, telefone, id]
  );

  return { id, nome, telefone };
}

async function deletarContato(id) {
  await db.query("DELETE FROM contatos WHERE id = ?", [id]);
}

module.exports = {
  criarContato,
  listarContatos,
  atualizarContato,
  deletarContato
};