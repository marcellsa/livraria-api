import app from "../../app.js";
import request from "supertest";
import mongoose from "mongoose";

beforeEach(() => {
  // Conectar-se ao MongoDB no início de cada teste
  mongoose.connect(process.env.DB_CONNECTION_STRING);
});

afterEach(() => {
  // fechar a conexão após cada teste para evitar vazamentos de recursos e erros
  mongoose.connection.close();
});

describe("Testando rota livros", () => {

  test("Deve retornar a lista de livros", async () => {
    
    const response = await request(app)
      .get("/livros")
      .expect(200);

    expect(response.status).toEqual(200);

  });

  test("Deve cadastrar o livro quando os dados enviados forem válidos", async () => {
    
    const response = await request(app)
      .post("/livros")
      .send({
        titulo: "O Senhor dos Anéis 2",
        editora: "Allen & Unwin",
        paginas: 1000
      })
      .expect(201);

    expect(response.status).toEqual(201);
  });
});