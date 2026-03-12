const service = require("../services/contatosService");
const { validarNome } = require("../validators/nomeValidator");

async function criar(req, res) {
  const { nome, telefone } = req.body;

  if (!validarNome(nome)) {
    return res.status(400).json({ error: "Nome inválido" });
  }

  const contato = await service.criarContato(nome, telefone);

  res.status(201).json(contato);
}

async function listar(req, res) {
  const contatos = await service.listarContatos();
  res.status(200).json(contatos);
}

async function atualizar(req, res) {
  const { id } = req.params;
  const { nome, telefone } = req.body;

  if (!validarNome(nome)) {
    return res.status(400).json({ error: "Nome inválido" });
  }

  const contato = await service.atualizarContato(id, nome, telefone);

  res.status(200).json(contato);
}

async function remover(req, res) {
  const { id } = req.params;

  await service.deletarContato(id);

  res.status(204).send();
}

module.exports = {
  criar,
  listar,
  atualizar,
  remover
};