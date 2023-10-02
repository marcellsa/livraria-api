import crypto from "crypto";
import livro from "../../models/Livro.js";

// Gerar uma string aleatória de comprimento específico
const generateRandomString = (length) => {
  const bytes = crypto.randomBytes(Math.ceil(length / 2));
  return bytes.toString("hex").slice(0, length);
};

// Gerar um número de ponto flutuante aleatório entre um mínimo e um máximo
const generateRandomFloat = (min, max) => {
  return Math.random() * (max - min + min);
};

// Gerar um número aleatório entre um mínimo e máximo
const generateRandomNumber = (min, max) => {
  const range = max - min + 1;
  return Math.floor(Math.random() * range) + min;
};

describe("Testando o modelo Livro", () => {
  const objetoLivro = {
    titulo: generateRandomString(20),
    editora: generateRandomString(10),
    preco: generateRandomFloat(20, 200),
    paginas: generateRandomNumber(100, 300)
  };

  test("Deve instanciar um novo livro", () => {
    const book = new livro(objetoLivro);

    expect(book).toEqual(
      expect.objectContaining(objetoLivro),
    );
  });

});