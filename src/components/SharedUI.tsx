import { useState, CSSProperties } from "react";
import * as React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const font = "'Instrument Sans', sans-serif";

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
        borderRadius: radius || 0,
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
        borderRadius: 8,
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
        borderRadius: 8,
        padding: "6px 8px",
        fontFamily: font,
        fontWeight: 600,
        fontSize: 12,
        color: "#1e1e1e",
        whiteSpace: "nowrap",
        display: "inline-block",
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

export function ContactSection(): React.JSX.Element {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" style={{ backgroundColor: "#f3f3f3", padding: "120px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 32, maxWidth: 602 }}>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontWeight: 700, fontSize: 100, lineHeight: "88px", letterSpacing: -3, color: "#1e1e1e", margin: 0 }}
        >
          Let's have a conversation
        </motion.h2>
        <p style={{ fontWeight: 400, fontSize: 16, color: "#5d5d5d", margin: 0, maxWidth: 470 }}>
          Whether you have a project ready or just want to talk something through, get in touch. You'll hear back within one business day.
        </p>
      </div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        style={{ backgroundColor: "white", borderRadius: 12, padding: "32px 16px", width: 603, display: "flex", flexDirection: "column", gap: 32, boxSizing: "border-box", flexShrink: 0, boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <input type="text" placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} style={{ height: 48, border: "0.5px solid #cecece", borderRadius: 8, padding: "0 16px", fontSize: 14, outline: "none", boxSizing: "border-box", width: "100%", fontFamily: font }} />
          <input type="email" placeholder="Your email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} style={{ height: 48, border: "0.5px solid #cecece", borderRadius: 8, padding: "0 16px", fontSize: 14, outline: "none", boxSizing: "border-box", width: "100%", fontFamily: font }} />
          <textarea placeholder="Leave a message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} style={{ height: 196, border: "0.5px solid #cecece", borderRadius: 8, padding: 16, fontSize: 14, outline: "none", resize: "none", boxSizing: "border-box", width: "100%", fontFamily: font }} />
        </div>
        <CTAButton label="Send" fullWidth large />
      </motion.div>
    </section>
  );
}

export function Footer(): React.JSX.Element {
  return (
    <footer style={{ backgroundColor: "#d73a3b", padding: "64px 40px", display: "flex", flexDirection: "column", gap: 32 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24 }}>
            <span style={{ fontWeight: 500, fontSize: 16, lineHeight: "26px", letterSpacing: -0.08, color: "white" }}>Reach us</span>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {["Instagram", "LinkedIn", "Behance", "Email"].map((l) => (
                <a 
                  key={l} 
                  href="#" 
                  style={{ color: "white", textDecoration: "none", display: "inline-block" }}
                >
                  <TextRoll text={l} fontSize={24} fontWeight={600} hoverColor="rgba(255,255,255,0.7)" />
                </a>
              ))}
            </div>
          </div>
          <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <motion.div 
              whileHover={{ rotate: [0, -5, 5, 0] }}
              style={{ backgroundColor: "rgba(255,255,255,0.15)", borderRadius: 8, padding: "12px 20px", display: "inline-flex", alignItems: "center", cursor: "pointer" }}
            >
              <span style={{ color: "white", fontWeight: 700, fontSize: 28, fontFamily: font }}>20/20</span>
            </motion.div>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, alignItems: "flex-end" }}>
            <span style={{ fontWeight: 500, fontSize: 16, lineHeight: "26px", letterSpacing: -0.08, color: "white" }}>Navigation</span>
            <div style={{ display: "flex", flexDirection: "column", gap: 24, alignItems: "flex-end" }}>
              {["About", "Services", "Experience", "Blog", "Contact"].map((l) => (
                <Link 
                  key={l}
                  to={l === "Contact" ? "/#contact" : l === "Experience" ? "/about" : `/${l.toLowerCase()}`} 
                  style={{ color: "white", textDecoration: "none", display: "inline-block" }}
                >
                  <TextRoll text={l} fontSize={24} fontWeight={600} hoverColor="rgba(255,255,255,0.7)" />
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
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 16, letterSpacing: -0.32 }}>
        <span style={{ flex: 1, fontWeight: 500, color: "rgba(255,255,255,0.8)" }}>© 2026 20/20 Digital</span>
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <motion.span
            style={{ fontWeight: 700, color: "white", cursor: "pointer", display: "inline-block" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <TextRoll text="Back to top" fontSize={16} fontWeight={700} hoverColor="rgba(255,255,255,0.6)" />
          </motion.span>
        </div>
        <a href="#" style={{ flex: 1, display: "flex", justifyContent: "flex-end", textDecoration: "none" }}>
          <TextRoll text="Privacy Policy" fontSize={16} fontWeight={700} color="white" hoverColor="rgba(255,255,255,0.6)" />
        </a>
      </div>
    </footer>
  );
}
