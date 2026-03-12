const express = require("express");
const controller = require("../controllers/contatosController");

const router = express.Router();

router.post("/contatos", controller.criar);
router.get("/contatos", controller.listar);
router.patch("/contatos/:id", controller.atualizar);
router.delete("/contatos/:id", controller.remover);

module.exports = router;