import { createRoot } from "react-dom/client"
import { App } from "./App"
import './api/axios.ts'
import './index.css'

createRoot(document.getElementById("root")!).render(<App/>)