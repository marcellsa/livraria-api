import request from "supertest";
import app from "../src/app";
import mongoose from "mongoose";
import Livro from "../models/Livro";

describe("Testes para o LivroController", () => {
  
  it("Deve listar livros com sucesso", async () => {
    await Livro.create({ titulo: "Livro 1" });

    const response = await request(app).get("/api/livros");

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
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
