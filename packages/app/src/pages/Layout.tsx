import { NavLink, Outlet } from "react-router";
import { Routes } from "../Routes.ts";

export function Layout() {
  return (
    <>
      <nav>
        <NavLink to={Routes.requirements()}>
          Requirements
        </NavLink>
        <NavLink to={Routes.documents()}>
          Documents
        </NavLink>
      </nav>
      <Outlet/>
    </>
  )
}