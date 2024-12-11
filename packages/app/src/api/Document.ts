import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import * as Types from "types";

export const Document = {
  useList() {
    return useQuery({
      queryKey: ['documents'],
      queryFn: async () =>
        axios.get<Types.Documents>('/documents')
          .then(response => response.data)
    })
  },
  useRetrieve(id: string) {
    return useQuery({
      queryKey: ['documents', id],
      queryFn: async () =>
        axios.get<Types.Document>(`/documents/${id}`)
          .then(response => response.data)
    })
  }
}