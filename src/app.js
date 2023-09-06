import express from "express";

// Ao executar a função express, todas as funções do Express serão atribuídas à variável app
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("API Rest com Express e MongoDB");
});

// Exportar o módulo app para se comunicar com o servidor
export default app;
