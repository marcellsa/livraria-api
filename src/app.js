import "dotenv/config";
import express from "express";
import connectToDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connection = await connectToDatabase();

// Antes de tratar o sucesso da conexão, receberemos um aviso se a conexão falhar
connection.on("error", (erro) => console.error("Erro de conexão!", erro));
connection.once("open", () => {
  console.log("Conexão com o banco estabelecida com sucesso!");
});

// A função 'express' atribui todas as funções do Express à variável 'app'
const app = express();
routes(app);

// Exportar o módulo 'app' para comunicação com o servidor
export default app;
