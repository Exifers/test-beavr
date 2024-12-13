import type { ReactNode } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  children: ReactNode
  title: ReactNode
  open: boolean
  setOpen: (open: boolean) => void
}

export function Modal({ children, title, open, setOpen }: ModalProps) {
  if (!open)
    return null;

  return (
    createPortal(
      <>
        <div className="bg-black/30 w-full h-full absolute top-0 left-0" onClick={() => {
          setOpen(false)
        }}/>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white flex flex-col">
          <div className="h-16 flex justify-between items-center px-6 border-solid border-0 border-b border-neutral-200">
            <h4 className="m-0">{title}</h4>
            <div className="w-8 h-8 flex items-center justify-center cursor-pointer" onClick={() => {
              setOpen(false)
            }}>
              x
            </div>
          </div>
          <div className="p-6">
            {children}
          </div>
        </div>
      </>
      ,
      document.body
    )
  )
}