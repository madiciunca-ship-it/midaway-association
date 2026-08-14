import { Outlet } from "react-router-dom";
import Header from "./Header";
import PageArrows from "./PageArrows";
import ScrollToTop from "./ScrollToTop.jsx";
import Footer from "./Footer";

function SiteLayout() {
  return (
    <>
      <ScrollToTop />

      <Header />

      <Outlet />

      <Footer />

      <PageArrows />
    </>
  );
}

export default SiteLayout;