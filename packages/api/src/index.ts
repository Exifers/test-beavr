/// <reference path="./vite-env.d.ts" />
import { server } from "./server.ts";
import './routes.ts'

if (import.meta.env.PROD)
  await server.listen({ port: 3000, host: "0.0.0.0" });

export { server };