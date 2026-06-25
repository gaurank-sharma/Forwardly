import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SmoothScroll from "./lib/SmoothScroll";
import Cursor from "./components/ui/Cursor";
import Noise from "./components/ui/Noise";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Router>
      <SmoothScroll>
        <Cursor />
        <Noise />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SmoothScroll>
    </Router>
  );
}
