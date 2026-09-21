import { Outlet } from "react-router";

import { Header } from "@/widgets/Header";

export function AppLayout() {
  return (
    <div className="page-shell">
      <Header />
      <Outlet />
    </div>
  );
}
