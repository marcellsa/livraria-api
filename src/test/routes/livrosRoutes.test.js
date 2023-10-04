import app from "../../app.js";
import request from "supertest";

let server;
beforeEach(() => {
  const port = 3001;
  server = app.listen(port);
});

afterEach(() => {
  server.close();
});

describe("Testando rota livros", () => {

  test("Deve retornar a lista de livros", async () => {
    await request(app)
      .get("/livros")
      .expect(200);

  });
});