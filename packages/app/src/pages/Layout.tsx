import { Outlet } from "react-router";
import { Routes } from "../Routes.ts";
import { NavItem } from "../components/NavItem.tsx";

export function Layout() {
  return (
    <>
      <nav className="flex gap-2">
        <NavItem to={Routes.requirements()}>
          Requirements
        </NavItem>
        <NavItem to={Routes.documents()}>
          Documents
        </NavItem>
      </nav>
      <Outlet/>
    </>
  )
}