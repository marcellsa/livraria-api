import app from "./src/app.js";

const PORT = 3000;

// Servidor está ativo, recebe requisições na porta {PORT}, e retorna uma string
app.listen(PORT, () => {
  console.log(`Servidor escutando em http://localhost:${PORT}`);
});
