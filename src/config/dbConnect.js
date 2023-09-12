// Isso permite que o Dotenv configure as variáveis de ambiente
import "dotenv/config";
import mongoose from "mongoose";

// Conexão com o banco de dados
const { DB_USER, DB_PASSWORD } = process.env;


const MONGODB_URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster1.jhcbrkf.mongodb.net/livraria?retryWrites=true&w=majority`;


const connectToDatabase = async () => {
  mongoose.connect(MONGODB_URL);
  return mongoose.connection;
};

export default connectToDatabase;
