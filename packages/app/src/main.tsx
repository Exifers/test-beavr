import { createRoot } from "react-dom/client"
import { App } from "./App"
import './api/axios.ts'

createRoot(document.getElementById("root")!).render(<App/>)