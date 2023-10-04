// Isso permite que o Dotenv configure as variáveis de ambiente
import "dotenv/config";
import app from "./src/app.js";

const PORT = process.env.APP_PORT || 3000;

// Servidor ativo na porta {PORT} que recebe e retorna strings
app.listen(PORT, () => {
  console.log(`Servidor escutando em http://localhost:${PORT}`);
});
