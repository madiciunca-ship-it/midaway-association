import { Outlet } from "react-router-dom";
import Header from "./Header";
import PageArrows from "./PageArrows";

function SiteLayout() {
  return (
    <>
      <Header />

      <Outlet />

      <PageArrows />
    </>
  );
}

export default SiteLayout;