import crypto from "crypto";
import axios from "axios";
import livroController from "../controllers/livroController.js";

// Gerar uma string aleatória de comprimento específico
const generateRandomString = (length) => {
  const bytes = crypto.randomBytes(Math.ceil(length / 2));
  return bytes.toString("hex").slice(0, length);
};

// Gerar um número de ponto flutuante aleatório entre um mínimo e um máximo
// const generateRandomFloat = (min, max) => {
//   return Math.random() * (max - min + min);
// };

// Gerar um número aleatório entre um mínimo e máximo
const generateRandomNumber = (min, max) => {
  const range = max - min + 1;
  return Math.floor(Math.random() * range) + min;
};

// Envia uma solicitação HTTP usando a biblioteca Axios
const request = (url, method, data) => axios({ url, method, data });

describe("Testando rota livros", () => {

  test("Deve retornar livros", async () => {
    
    // given - dado que
    const livro1 = await livroController.cadastrarLivro({ 
      titulo: generateRandomString(20),
      editora: generateRandomString(10), 
      preco: generateRandomNumber(0, 100), 
      paginas: generateRandomNumber(99, 500)
    });

    console.log("Livro1:", livro1);

    const livro2 = await livroController.cadastrarLivro({
      titulo: generateRandomString(20),
      editora: generateRandomString(10), 
      preco: generateRandomNumber(0, 100), 
      paginas: generateRandomNumber(99, 500)
    });

    console.log("Livro2:", livro2);

    // when - quando
    const response = await request("http://localhost:3000/livros", "get");
    const livros = response.data;

    // then - então
    expect(livros).toHaveLength(3);
  }, 50000);
});