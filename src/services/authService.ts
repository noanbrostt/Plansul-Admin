import axios from "axios";

const API_KEY = import.meta.env.VITE_LOGIN_API_KEY;

export const login = (matricula: string, senha: string) =>
  axios.post("/auth/login", { matricula, senha, api_key: API_KEY });

export const cadastro = (matricula: string, cpf: string, senha: string) =>
  axios.post("/auth/cadastro", { matricula, cpf, senha, api_key: API_KEY });
