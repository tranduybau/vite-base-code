/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AUTHORITY_URL: string;
  readonly VITE_AUTHORITY_CLIENT_ID: string;
  readonly VITE_AUTHORITY_REDIRECT_URI: string;
  readonly VITE_API_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
