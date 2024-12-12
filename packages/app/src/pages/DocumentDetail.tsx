import { NavLink, useParams } from "react-router";
import { assert } from "utils";
import { Document } from "../api/Document";
import { Routes } from "../Routes.ts";
import { FullScreenModal } from "../components/FullScreenModal.tsx";
import { useState } from "react";

function useDocumentId() {
  const { id } = useParams()
  assert(id)
  return id
}

export function DocumentDetail() {
  const id = useDocumentId()
  const [open, setOpen] = useState(false)
  const { data: document } = Document.useRetrieve(id)
  return (
    <>
      <h2>
        <NavLink to={Routes.documents()}>Documents</NavLink> {'>'} {document.title}
      </h2>
      <NavLink to={Routes.documents()}>{'<'} Back</NavLink>
      <br/>
      <p>
        {document.description}
      </p>
      <h4 className="m-0">Validates</h4>
      <div className="flex items-center justify-between">
        <h4 className="m-0">Versions</h4>
        <u className="cursor-pointer" onClick={() => { setOpen(true) }}>Add a version</u>
      </div>
      <ul>
        {document.documentVersions.map(documentVersion => (
          <li key={documentVersion.id}>
            {documentVersion.status}
          </li>
        ))}
      </ul>
      {document.documentVersions.length === 0 ? (
        <div className="flex flex-col items-center gap-2 bg-gray-100 py-4">
          <span>No versions yet</span>
          <button type="button" className="m-0" onClick={() => {
            setOpen(true)
          }}>Create a version
          </button>
        </div>
      ) : null}
      <FullScreenModal title="Create a version" open={open} setOpen={setOpen}>
        <form className="w-[656px]">
          <label>Effective date</label>
          <input type="date"/>
          <label>End date</label>
          <input type="date"/>
          <label>Content</label>
          <textarea name="content"/>
          <input type="submit"/>
        </form>
      </FullScreenModal>
    </>
  )
}