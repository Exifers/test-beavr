import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/queryClient.ts";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { RequirementsList } from "./pages/RequirementsList.tsx";
import { DocumentsList } from "./pages/DocumentsList.tsx";
import { DocumentDetail } from "./pages/DocumentDetail.tsx";
import { Layout } from "./pages/Layout.tsx";

export function App() {
  return (
    <QueryClientProvider client={queryClient} >
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="" element={<Navigate to="/requirements"/>} />
            <Route path="requirements" element={<RequirementsList/>} />
            <Route path="documents" element={<DocumentsList/>} />
            <Route path="documents/:id" element={<DocumentDetail/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}