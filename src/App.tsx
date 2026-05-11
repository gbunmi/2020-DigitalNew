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
import { CTAButton, TextRoll, CustomCursor } from "./components/SharedUI";
import { SplashScreen } from "./components/SplashScreen";

const font = "'Instrument Sans', sans-serif";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Use a small timeout to ensure layout has settled
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

function Navbar(): React.JSX.Element {
  const location = useLocation();
  
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ 
        position: "sticky", 
        top: 20, 
        zIndex: 50, 
        maxWidth: 1120,
        margin: "20px auto",
        width: "calc(100% - 80px)",
        backdropFilter: "blur(60px)", 
        WebkitBackdropFilter: "blur(60px)", 
        backgroundColor: "rgba(243, 243, 243, 0.75)", 
        border: "0.5px solid #E8E8E8",
        borderRadius: 100,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)"
      }}
    >
      <div style={{ width: "100%", padding: "8px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <motion.img 
              whileHover={{ scale: 1.05 }}
              src="https://raw.githubusercontent.com/gbunmi/logolita/main/Frame%2049%20(3).svg"
              alt="20/20 Digital Logo"
              referrerPolicy="no-referrer"
              style={{ height: 32, width: "auto", cursor: "pointer", display: "block" }}
            />
          </Link>
        </div>
        <div style={{ flex: 1.2, display: "flex", alignItems: "center", justifyContent: "space-between", fontWeight: 600, fontSize: 13, color: "#1e1e1e" }}>
          {["About", "Services", "Works", "Blog"].map((item) => {
            const path = `/${item.toLowerCase()}`;
            const isActive = location.pathname === path;
            return (
              <Link 
                key={item}
                to={path} 
                style={{ color: isActive ? "#d73a3b" : "inherit", textDecoration: "none" }}
              >
                <TextRoll text={item} color={isActive ? "#d73a3b" : "inherit"} />
              </Link>
            );
          })}
          <Link to={{ pathname: location.pathname, hash: "#contact" }} style={{ textDecoration: "none", color: "inherit" }}>
            <TextRoll text="Contact" />
          </Link>
        </div>

        {/* CTA Container */}
        <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
          <Link to={{ pathname: location.pathname, hash: "#contact" }} style={{ textDecoration: "none" }}>
            <CTAButton label="Get in touch" />
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}

export default function App(): React.JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <SplashScreen 
            key="splash"
            onComplete={() => {
              setIsLoading(false);
              // Standard reset
              window.scrollTo(0, 0);
              // Secondary reset to ensure it sticks after layout
              setTimeout(() => window.scrollTo(0, 0), 0);
            }} 
          />
        ) : (
          <motion.div
            key="app-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <CustomCursor />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/works" element={<Works />} />
              <Route path="/coming-soon" element={<ComingSoon title="More Content" />} />
            </Routes>
          </motion.div>
        )}
      </AnimatePresence>
    </BrowserRouter>
  );
}
