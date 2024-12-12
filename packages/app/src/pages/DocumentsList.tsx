import { Document } from "../api/Document.ts";
import { Link } from "react-router";
import { Routes } from "../Routes.ts";

export function DocumentsList() {
  const { data: documents } = Document.useList()
  return (
    <>
      <h2>Documents</h2>
      <ul>
        {documents?.map(document => (
          <li key={document.id}>
            <Link to={Routes.document({ id: document.id })}>
              {document.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
