// Isso permite que o Dotenv configure as variáveis de ambiente
import "dotenv/config";
import mongoose from "mongoose";

// Conexão com o banco de dados
const connectToDatabase = async () => {
  mongoose.connect(process.env.DB_CONNECTION_STRING);
  return mongoose.connection;
};

export default connectToDatabase;
