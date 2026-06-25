import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import PageTransition from "./PageTransition";

/** Shared chrome for every routed page. */
export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <PageTransition />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
