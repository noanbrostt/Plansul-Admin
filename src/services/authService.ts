import axios from "axios";

const API_KEY = import.meta.env.VITE_LOGIN_API_KEY;
const API_BASE_URL = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

export const login = (matricula: string, senha: string) =>
  axiosInstance.post("/auth/login", { matricula, senha, api_key: API_KEY });

export const reset = (matricula: string, cpf: string, nova_senha: string) =>
  axiosInstance.post("/auth/resetar_senha", {
    matricula,
    cpf,
    nova_senha,
    api_key: API_KEY,
  });
