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
    
    await request(app)
      .get("/livros")
      .expect(200);

  });
});