import request from "supertest";
import app from "../../app.js";
import mongoose from "mongoose";
import Livro from "../../models/Livro.js";
import LivroController from "../../controllers/livroController.js";

// Conexão com o banco de dados de teste (você deve configurar um banco de dados de teste separado)
mongoose.connect(process.env.DB_CONNECTION_STRING);

// Importe os métodos do controlador para uso nos testes
const { listarLivros, listarLivroPorId, cadastrarLivro, atualizarLivro, excluirLivro } = LivroController;

// Antes de cada teste, limpe a coleção de livros e adicione alguns dados de exemplo
beforeEach(async () => {
  await Livro.deleteMany({});
  await Livro.create({ titulo: "Livro 1" });
  await Livro.create({ titulo: "Livro 2" });
});

describe("Testes para o LivroController", () => {

  test("Deve listar todos os livros", async () => {
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    await listarLivros(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expect.arrayContaining([
      expect.objectContaining({ titulo: "Livro 1" }),
      expect.objectContaining({ titulo: "Livro 2" }),
    ]));
  });
  
  it.skip("Deve listar livros com sucesso", async () => {
    await Livro.create({ titulo: "Livro 1" });

    const response = await request(app).get("/livros");

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(8);
    expect(response.body[0].titulo).toBe("Livro 1");
  });

  it.skip("Deve tratar erros ao listar livros", async () => {
    // Simule um erro no controlador
    jest.spyOn(Livro, "find").mockImplementationOnce(() => {
      throw new Error("Erro simulado");
    });

    const response = await request(app).get("/api/livros");

    expect(response.status).toBe(500);
    expect(response.body).toEqual({ message: "Erro simulado - falha na requisição" });
  });
});
