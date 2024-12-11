import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/queryClient.ts";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Requirements } from "./pages/Requirements.tsx";
import { Documents } from "./pages/Documents.tsx";
import { Document } from "./pages/Document.tsx";
import { Layout } from "./pages/Layout.tsx";

export function App() {
  return (
    <QueryClientProvider client={queryClient} >
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="" element={<Navigate to="/requirements"/>} />
            <Route path="requirements" element={<Requirements/>} />
            <Route path="documents" element={<Documents/>} />
            <Route path="documents/:id" element={<Document/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}