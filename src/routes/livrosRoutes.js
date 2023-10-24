import express from "express";
import LivroController from "../controllers/livroController.js";

const router = express.Router();

router
  .get("/livros", LivroController.listarLivros)
  .get("/livros/:id", LivroController.listarLivroPorId)
  .post("/livros", LivroController.cadastrarLivro);

export default router;