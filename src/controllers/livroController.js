import livro from "../models/Livro.js";

class LivroController {

  // métodos estáticos assim não há obrigação de criar uma instância prévia da classe
  static async listarLivros (req, res) {
    try {
      const listaDeLivros =  await livro.find({});
      res.status(200).json(listaDeLivros);
    }  catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição` });
    }
  }

  static async listarLivroPorId (req, res) {
    try {
      const { id } = req.params;
      const livroEncontrado = await livro.findById(id);
      res.status(200).json(livroEncontrado);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição do livro` });
    }
  }

  static async cadastrarLivro (req, res) {
    try {
      const novoLivro = await livro.create(req.body);
      res.status(201).json({ message: "Livro cadastrado com sucesso", livro: novoLivro });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` });
    }
  }

}

export default LivroController;