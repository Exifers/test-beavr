
export const Routes = {
  requirements: () => `/requirements`,
  documents: () => `/documents`,
  document: ({ id }: { id: string }) => `/documents/${id}`
}