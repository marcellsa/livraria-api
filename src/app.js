import express from "express";
import connectToDatabase from "./config/dbConnect.js";

const connection = await connectToDatabase();

// Antes de tratar o sucesso da conexão, receberemos um aviso se a conexão falhar
connection.on("error", (erro) => console.error("Erro de conexão!", erro));
connection.once("open", () => {
  console.log("Conexão com o banco estabelecida com sucesso!");
});

// A função 'express' atribui todas as funções do Express à variável 'app'
const app = express();
// O middleware converte e analisa requisições JSON com objetos ou arrays de objetos
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("API Rest com Express e MongoDB");
});

// Exportar o módulo 'app' para comunicação com o servidor
export default app;
