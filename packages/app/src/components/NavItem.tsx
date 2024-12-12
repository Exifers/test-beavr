import { NavLink, useMatch } from "react-router";
import type { ReactNode } from "react";

interface NavItemProps {
  to: string
  children: ReactNode
}

export function NavItem({ to, children }: NavItemProps) {
  const match = useMatch({ path: to, end: false })
  return (
    <NavLink
      to={to}
      className="flex flex-col gap-1 hover:no-underline"
    >
      {children}
      {match ? <div className="h-0.5 bg-black"/> : null}
    </NavLink>
  )
}