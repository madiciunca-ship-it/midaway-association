import { Outlet } from "react-router-dom";
import Header from "./Header";
import PageArrows from "./PageArrows";
import ScrollToTop from "./ScrollToTop.jsx";

function SiteLayout() {
  return (
    <>
      <ScrollToTop />
      
      <Header />

      <Outlet />

      <PageArrows />
    </>
  );
}

export default SiteLayout;