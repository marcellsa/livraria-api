import request from "supertest";
import app from "../../app.js";

describe("Testes para a Rota Raiz", () => {
  it("deve retornar status 200 e a mensagem correta", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("API Rest com Express e MongoDB");
  });

  it("deve retornar status 404 para rota inexistente", async () => {
    const resposta = await request(app).get("/naoexiste");
    expect(resposta.status).toBe(404);
  });

  // it("deve retornar status 405 para outros métodos", async () => {
  //   const resposta = await request(app).post("/");
  //   expect(resposta.status).toBe(405);
  // });
});
