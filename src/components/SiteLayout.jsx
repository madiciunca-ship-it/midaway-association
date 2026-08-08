import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";

function SiteLayout() {
  return (
    <main className="site">
      <Header />

      <Outlet />
    </main>
  );
}

export default SiteLayout;