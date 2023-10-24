import request from "supertest";
import app from "../../app.js";
import LivroController from "../../controllers/livroController.js";

describe("Testes para LivroController", () => {
  // let booksList;

  beforeAll(() => {
    // Configurar o controlador com alguns livros de teste uma vez antes dos testes
    const livrosDeTeste = [
      {
        titulo: "Livro de Teste 1",
        editora: "Editora de Teste 1",
        preco: 19.99,
        paginas: 100,
      },
      {
        titulo: "Livro de Teste 2",
        editora: "Editora de Teste 2",
        preco: 29.99,
        paginas: 200,
      }
    ];
    booksList = new LivroController(livrosDeTeste);
  });

  // it.skip("deve retornar uma lista vazia quando não há livros", async () => {
  //   const response = await request(app)
  //     .get("/livros")
  //     .expect(200);

  //   expect(response.body).toHaveLength(0);
  // });

  it("deve listar todos os livros na base de dados", async () => {
    const response = await request(app)
      .get("/livros")
      .expect(200);

    expect(response.body).not.toHaveLength(0);
  });

  // Outros testes para outros métodos da classe LivroController
});
