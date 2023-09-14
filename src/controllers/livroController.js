import livro from "../models/Livro.js";

class LivroController {

  // métodos estáticos assim não há obrigação de criar uma instância prévia da classe
  static async listarLivros (req, res) {
    const listaDeLivros =  await livro.find({});
    res.status(200).json(listaDeLivros);
  }

}

export default LivroController;