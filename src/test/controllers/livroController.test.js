import "dotenv/config";
import request from "supertest";
import app from "../../app.js";

describe("Testes do LivroController", () => {
  it("deve listar todos os livros", async () => {
    const response = await request(app)
      .get("/livros")
      .expect(200);
    expect(response.status).toBe(200);
  });

  it.skip("deve listar um livro por ID", async () => {
    const livroId = "id-do-livro";
    const response = await request(app).get(`/livro/${livroId}`);
    expect(response.status).toBe(200);
  });

  it("deve cadastrar um livro", async () => {
    const novoLivro = { titulo: "O Hobbit" };
    const response = await request(app)
      .post("/livros")
      .expect(201)
      .send(novoLivro);
    expect(response.status).toBe(201);
  });
});
