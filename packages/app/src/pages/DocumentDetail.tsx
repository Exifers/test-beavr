import { NavLink, useParams } from "react-router";
import { assert, Time } from "utils";
import { Document } from "../api/Document";
import { Routes } from "../Routes.ts";
import { Drawer } from "../components/Drawer.tsx";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Types from 'types';
import { FormUtils } from "../utils/FormUtils.ts";
import { DocumentVersion } from "../api/DocumentVersion.ts";
import { Display } from "../utils/Display.ts";
import { Modal } from "../components/Modal.tsx";

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
      <ul>
        {document.requirements.map(requirement => (
          <li key={requirement.id}>
            {requirement.name}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between">
        <h4 className="m-0">Versions</h4>
        <u className="cursor-pointer" onClick={() => {
          setOpen(true)
        }}>Add a version</u>
      </div>
      <ul className="p-0">
        {document.documentVersions
          .toSorted((d1, d2) => d2.effectiveUntil.getTime() - d1.effectiveUntil.getTime())
          .map(documentVersion => (
            <li key={documentVersion.id} className="flex justify-between">
              <div className="flex">
                <div className="flex gap-2 w-64">
                  <div>
                    {Display.formatDate(documentVersion.effectiveAt)}
                  </div>
                  <div>
                    {Display.formatDate(documentVersion.effectiveUntil)}
                  </div>
                </div>
                <div>
                  {documentVersion.status}
                </div>
              </div>
              <div className="flex gap-2">
                {documentVersion.status === 'DRAFT' ? <u className="cursor-pointer">Approve</u> : null}
                {documentVersion.status === 'VALIDATED' ? <u className="cursor-pointer">Unapprove</u> : null}
                <u className="cursor-pointer">Edit</u>
                <DeleteDocumentVersionButton documentVersion={documentVersion} />
              </div>
            </li>
          ))}
      </ul>
      {document.documentVersions.length === 0 ? (
        <div className="flex flex-col items-center gap-2 bg-gray-100 py-4">
          <span>No version yet</span>
          <button type="button" className="m-0" onClick={() => {
            setOpen(true)
          }}>Create a version
          </button>
        </div>
      ) : null}
      <CreateDocumentVersionDrawer open={open} setOpen={setOpen}/>
    </>
  )
}

interface DeleteDocumentVersionButtonProps {
  documentVersion: Types.Document['documentVersions'][number]
}

function DeleteDocumentVersionButton({ documentVersion }: DeleteDocumentVersionButtonProps) {
  const [open, setOpen] = useState(false)
  const { mutateAsync: deleteDocumentVersion } = DocumentVersion.useDelete()
  return (
    <>
      <Modal title="Delete version" open={open} setOpen={setOpen}>
        Are you sure you want to delete this version?
        <div className="flex justify-end gap-2">
          <button className="m-0" type="button" onClick={() => {
            setOpen(false);
          }}>Cancel
          </button>
          <button className="m-0" type="button" onClick={async () => {
            await deleteDocumentVersion(documentVersion.id)
            setOpen(false)
          }}>Delete
          </button>
        </div>
      </Modal>
      <u className="cursor-pointer" onClick={() => {
        setOpen(true)
      }}>Delete</u>
    </>
  )
}

interface CreateDocumentVersionDrawerProps {
  open: boolean
  setOpen: (open: boolean) => void
}

function CreateDocumentVersionDrawer({ open, setOpen }: CreateDocumentVersionDrawerProps) {
  const { mutateAsync: createDocumentVersion } = DocumentVersion.useCreate()
  const documentId = useDocumentId()
  return (
    <Drawer title="Create a version" open={open} setOpen={setOpen}>
      <DocumentVersionForm
        initialValues={{
          effectiveAt: Time.getCurrentYearStart(),
          effectiveUntil: Time.getCurrentYearEnd(),
          content: ''
        }}
        onSubmit={async (data) => {
          await createDocumentVersion({
            ...data,
            documentId,
            status: "DRAFT",
          })
          setOpen(false)
        }}/>
    </Drawer>
  )
}

type DocumentVersionFormData = Pick<
  Types.DocumentVersionCreatePayload | Types.DocumentVersionUpdatePayload,
  'effectiveAt' | 'effectiveUntil' | 'content'
>

interface DocumentVersionFormProps {
  initialValues?: DocumentVersionFormData
  onSubmit: (data: DocumentVersionFormData) => void
}

function DocumentVersionForm({ initialValues, onSubmit }: DocumentVersionFormProps) {
  const {
    register,
    handleSubmit
  } = useForm<DocumentVersionFormData>()

  return (
    <form className="w-[656px] flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="effectiveAt">Effective date</label>
        <input
          type="date"
          defaultValue={FormUtils.formatDate(initialValues?.effectiveAt)}
          {...register("effectiveAt", { valueAsDate: true, required: true })}
        />
      </div>
      <div>
        <label htmlFor="effectiveUntil">End date</label>
        <input
          type="date"
          defaultValue={FormUtils.formatDate(initialValues?.effectiveUntil)}
          {...register("effectiveUntil", { valueAsDate: true, required: true })}
        />
      </div>
      <div>
        <label htmlFor="content">Content</label>
        <textarea
          autoFocus
          defaultValue={initialValues?.content}
          {...register("content")}
        />
      </div>
      <div className="flex justify-end">
        <input className="m-0" type="submit"/>
      </div>
    </form>
  )
}