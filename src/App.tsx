import { useEffect, useState } from "react";
import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Works from "./pages/Works";
import ComingSoon from "./pages/ComingSoon";
import { CTAButton, TextRoll } from "./components/SharedUI";
import { LoaderLogo } from "./components/LoaderLogo";

const font = "'Instrument Sans', sans-serif";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

function Navbar(): React.JSX.Element {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ position: "sticky", top: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 40px", backdropFilter: "blur(60px)", WebkitBackdropFilter: "blur(60px)", backgroundColor: "rgba(243,243,243,0.75)", borderBottom: "0.5px solid #cbcbcb" }}
    >
      <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            style={{ backgroundColor: "#d73a3b", borderRadius: 8, padding: "6px 12px", display: "inline-flex", alignItems: "center", cursor: "pointer" }}
          >
            <span style={{ color: "white", fontWeight: 700, fontSize: 14, fontFamily: font }}>20/20</span>
          </motion.div>
        </Link>
      </div>
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "space-between", fontWeight: 600, fontSize: 14, color: "#1e1e1e" }}>
        {["About", "Services", "Works", "Blog"].map((item) => (
          <Link 
            key={item}
            to={`/${item.toLowerCase()}`} 
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <TextRoll text={item} hoverColor="#d73a3b" />
          </Link>
        ))}
        <Link to="/#contact" style={{ color: "inherit", textDecoration: "none" }}>
          <TextRoll text="Contact" hoverColor="#d73a3b" />
        </Link>
      </div>
      <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
        <Link to="/#contact" style={{ textDecoration: "none" }}>
          <CTAButton label="Get in touch" />
        </Link>
      </div>
    </motion.nav>
  );
}

export default function App(): React.JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "#1e1e1e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
              pointerEvents: "all"
            }}
          >
            <LoaderLogo />
          </motion.div>
        )}
      </AnimatePresence>

      <BrowserRouter>
        <ScrollToTop />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/works" element={<Works />} />
          <Route path="/coming-soon" element={<ComingSoon title="More Content" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
