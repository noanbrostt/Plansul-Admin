/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LOGIN_API_KEY: string;
  // outras variáveis que quiser declarar
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
