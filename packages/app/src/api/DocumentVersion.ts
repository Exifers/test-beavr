import * as Types from "types"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const DocumentVersion = {
  useCreate() {
    const queryClient = useQueryClient()
    return useMutation( {
      mutationFn: async (data: Types.DocumentVersionCreatePayload) =>
        axios.post('/documentVersions', { data })
          .then(response => response.data),
      async onSuccess(_, variables) {
        await Promise.all([
          queryClient.invalidateQueries({queryKey: ['documents', variables.documentId]}),
          queryClient.invalidateQueries({queryKey: ['requirements']})
        ])
      }
    })
  },
  useUpdate() {
    const queryClient = useQueryClient()
    return useMutation( {
      mutationFn: async ({ id, data }: { id: string, data: Types.DocumentVersionUpdatePayload}) =>
        axios.put(`/documentVersions/${id}`, { data })
          .then(response => response.data),
      async onSuccess(_, variables) {
        await Promise.all([
          queryClient.invalidateQueries({queryKey: ['documents', variables.data.documentId]}),
          queryClient.invalidateQueries({queryKey: ['requirements']}),
        ])
      }
    })
  },
  useDelete() {
    const queryClient = useQueryClient()
    return useMutation( {
      mutationFn: async (id: string) =>
        axios.delete(`/documentVersions/${id}`)
          .then(response => response.data),
      async onSuccess(_, id) {
        await Promise.all([
          queryClient.invalidateQueries({queryKey: ['documents', id]}),
          queryClient.invalidateQueries({queryKey: ['requirements']})
        ])
      }
    })
  }
}