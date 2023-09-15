// Ponto de entrada das rotas que a aplicação vai acessar
import express from "express";
import livros from "./livrosRoutes.js";

const routes = (app) => {
  app.route("/").get(
    (req, res) => {
      res.status(200).send("API Rest com Express e MongoDB");
    });
  
  app.use(
    // O middleware analisa e converte requisições JSON com objetos ou arrays de objetos
    express.json(), 
    livros
  );
};

export default routes;
