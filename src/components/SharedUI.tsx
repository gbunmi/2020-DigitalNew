import { useState, useEffect, CSSProperties } from "react";
import * as React from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const font = "'Instrument Sans', sans-serif";

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

// ── Shared Types ──
export interface PlaceholderProps {
  width?: number | string;
  height?: number | string;
  label?: string;
  radius?: number;
  style?: CSSProperties;
}

// ── Shared Components ──
export function Placeholder({ width, height, label, radius, style }: PlaceholderProps): React.JSX.Element {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{
        width: width || "100%",
        height: height || "100%",
        backgroundColor: "#c4c4c4",
        borderRadius: radius !== undefined ? radius : "24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#8a8a8a",
        fontSize: 14,
        fontWeight: 500,
        fontFamily: font,
        flexShrink: 0,
        overflow: "hidden",
        ...style,
      }}
    >
      {label || ""}
    </motion.div>
  );
}

export function CTAButton({ label, onClick, fullWidth, large }: { label: string; onClick?: () => void; fullWidth?: boolean; large?: boolean }): React.JSX.Element {
  return (
    <motion.button
      whileHover={{ scale: 1.05, backgroundColor: "#c03435" }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      style={{
        backgroundColor: "#d73a3b",
        color: "white",
        border: "none",
        borderRadius: 999,
        padding: large ? "16px" : "12px 16px",
        fontFamily: font,
        fontWeight: 600,
        fontSize: 14,
        cursor: "pointer",
        width: fullWidth ? "100%" : "auto",
        height: large ? 56 : "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background-color 0.2s ease",
      }}
    >
      {label}
    </motion.button>
  );
}

export function Tag({ label }: { label: string; key?: React.Key }): React.JSX.Element {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{
        border: "1px solid #e2e2e2",
        borderRadius: 999,
        padding: "6px 12px",
        fontFamily: font,
        fontWeight: 600,
        fontSize: 10,
        color: "#5d5d5d",
        whiteSpace: "nowrap",
        display: "inline-block",
        cursor: "default",
        transition: "background-color 0.2s, color 0.2s, border-color 0.2s"
      }}
    >
      {label}
    </motion.span>
  );
}

export function TextRoll({ text, color = "inherit", hoverColor, fontSize = 14, fontWeight = 600 }: { 
  text: string; 
  color?: string; 
  hoverColor?: string;
  fontSize?: string | number;
  fontWeight?: string | number;
}): React.JSX.Element {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      style={{
        position: "relative",
        display: "inline-flex",
        overflow: "hidden",
        cursor: "pointer",
        fontSize,
        fontWeight,
        fontFamily: font,
        color,
        lineHeight: "1.2",
        verticalAlign: "middle"
      }}
    >
      <motion.div
        variants={{
          initial: { y: 0 },
          hover: { y: "-100%" }
        }}
        transition={{ duration: 0.45, ease: [0.6, 0.01, 0.05, 0.95] }}
        style={{ position: "relative" }}
      >
        <span style={{ display: "block" }}>{text}</span>
        <span 
          style={{ 
            display: "block", 
            position: "absolute", 
            top: "100%", 
            left: 0, 
            width: "100%",
            color: hoverColor || color 
          }} 
          aria-hidden="true"
        >
          {text}
        </span>
      </motion.div>
    </motion.div>
  );
}

export { default as ContactSection } from './ContactSection';

export function CustomCursor(): React.JSX.Element {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const [cursorState, setCursorState] = useState<{ active: boolean; text?: string }>({ active: false });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleCursorChange = (e: any) => {
      if (e.detail) {
        setCursorState(e.detail);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("cursorChange", handleCursorChange);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("cursorChange", handleCursorChange);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 80,
        height: 80,
        borderRadius: "50%",
        backgroundColor: "rgba(243, 243, 243, 0.75)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "0.5px solid rgba(0,0,0,0.05)",
        pointerEvents: "none",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        scale: cursorState.active ? 1 : 0,
        opacity: cursorState.active ? 1 : 0,
      }}
      transition={{ scale: { type: "spring", stiffness: 300, damping: 30 } }}
    >
      <ArrowUpRight size={32} color="#1e1e1e" />
    </motion.div>
  );
}

export function Footer(): React.JSX.Element {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <footer id="footer" style={{ width: "100%", padding: isMobile ? "0 var(--gutter) var(--gutter) var(--gutter)" : "0 var(--gutter) var(--gutter) var(--gutter)", position: "relative", zIndex: 10, boxSizing: "border-box" }}>
      <div style={{ 
        backgroundColor: "#d73a3b", 
        borderRadius: 24, 
        padding: isMobile ? "48px 24px" : "64px 40px", 
        display: "flex", 
        flexDirection: "column", 
        gap: 32, 
        width: "100%",
        margin: "0 auto" 
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 32 : 40 }}>
          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "flex-end", gap: isMobile ? 48 : 0 }}>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: isMobile ? 24 : 24 }}>
              <span style={{ fontWeight: 500, fontSize: 16, lineHeight: "26px", letterSpacing: -0.08, color: "white", fontFamily: font }}>Reach us</span>
              <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 12 : 24 }}>
                {["Instagram", "LinkedIn", "Behance", "Email"].map((l) => (
                  <a 
                    key={l} 
                    href="#" 
                    style={{ color: "white", textDecoration: "none", display: "inline-block" }}
                  >
                    <TextRoll text={l} fontSize={isMobile ? 18 : 24} fontWeight={600} hoverColor="rgba(255,255,255,0.7)" />
                  </a>
                ))}
              </div>
            </div>
            {!isMobile && (
              <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
                <motion.img 
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  src="https://raw.githubusercontent.com/gbunmi/logolita/main/Frame%2049%20(3).svg"
                  alt="20/20 Digital Logo"
                  referrerPolicy="no-referrer"
                  style={{ height: 80, width: "auto", cursor: "pointer", display: "block" }}
                />
              </div>
            )}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, alignItems: isMobile ? "flex-start" : "flex-end" }}>
              <span style={{ fontWeight: 500, fontSize: 16, lineHeight: "26px", letterSpacing: -0.08, color: "white", fontFamily: font }}>Navigation</span>
              <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 12 : 16, alignItems: isMobile ? "flex-start" : "flex-end" }}>
                {["About", "Services", "Experience", "Blog", "Contact"].map((l) => (
                  <Link 
                    key={l}
                    to={l === "Contact" ? "#contact" : l === "Experience" ? "/about" : `/${l.toLowerCase()}`} 
                    style={{ color: "white", textDecoration: "none", display: "inline-block" }}
                  >
                    <TextRoll text={l} fontSize={isMobile ? 18 : 24} fontWeight={600} hoverColor="rgba(255,255,255,0.7)" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            style={{ width: "100%", height: 1, backgroundColor: "rgba(255,255,255,0.2)", transformOrigin: "center" }} 
          />
        </div>
        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center", gap: isMobile ? 32 : 0, fontSize: 16, letterSpacing: -0.32 }}>
          {isMobile && (
            <motion.img 
              src="https://raw.githubusercontent.com/gbunmi/logolita/main/Frame%2049%20(3).svg"
              alt="20/20 Digital Logo"
              referrerPolicy="no-referrer"
              style={{ height: 64, width: "auto", display: "block", marginBottom: 16 }}
            />
          )}
          <span style={{ flex: 1, fontWeight: 500, color: "rgba(255,255,255,0.8)", fontFamily: font, textAlign: "left" }}>© 2026 20/20 Digital</span>
          <div style={{ flex: 1, display: "flex", justifyContent: isMobile ? "flex-start" : "center" }}>
            <motion.span
              style={{ fontWeight: 700, color: "white", cursor: "pointer", display: "inline-block" }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <TextRoll text="Back to top" fontSize={16} fontWeight={700} hoverColor="rgba(255,255,255,0.6)" />
            </motion.span>
          </div>
          <a href="#" style={{ flex: 1, display: "flex", justifyContent: isMobile ? "flex-start" : "flex-end", textDecoration: "none" }}>
            <TextRoll text="Privacy Policy" fontSize={16} fontWeight={700} color="white" hoverColor="rgba(255,255,255,0.6)" />
          </a>
        </div>
      </div>
    </footer>
  );
}
