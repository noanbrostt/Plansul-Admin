import axios from "axios";

// const API_KEY_ENV = import.meta.env.VITE_LOGIN_API_KEY;
const API_KEY = "NQkOgDC8HdBl8VjXLVr7O4j";

export const login = (matricula: string, senha: string) =>
  axios.post("/auth/login", { matricula, senha, api_key: API_KEY });

export const reset = (matricula: string, cpf: string, nova_senha: string) =>
  axios.post("/auth/resetar_senha", { matricula, cpf, nova_senha, api_key: API_KEY });
