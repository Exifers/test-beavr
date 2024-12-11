import { NavLink, useParams } from "react-router";
import { assert } from "utils";
import { Document as Document_ } from "../api/Document";
import { Routes } from "../Routes.ts";

function useDocumentId() {
  const { id } = useParams()
  assert(id)
  return id
}

export function Document() {
  const id = useDocumentId()
  const { data: document } = Document_.useRetrieve(id)
  return (
    <>
      <h2>
        <NavLink to={Routes.documents()}>Documents</NavLink> {'>'} {document?.title}
      </h2>
      <NavLink to={Routes.documents()}>{'<'} Back</NavLink>
      <br/>
      <br/>
      <div>
        {document?.description}
      </div>
    </>
  )
}