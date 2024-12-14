import { Env } from "./Env.ts";

export namespace Config {
  export function getApiBaseUrl() {
    switch (Env.get()) {
      case "local":
        return "http://localhost:3000"
      case "production":
        return "https://test-beavr.onrender.com"
    }
  }
}