import app from "../../app.js";
import request from "supertest";

describe("Testando rota livros", () => {
  
  let server;
  beforeEach(() => {
    const port = 3000;
    server = app.listen(port);
  });
  
  afterEach(() => {
    server.close();
  });

  test("Deve retornar a lista de livros", async () => {
    await request(app)
      .get("/livros")
      .expect(200);

  });
});