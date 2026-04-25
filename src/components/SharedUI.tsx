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
    <section id="contact" className="bg-[#f3f3f3] w-full relative z-10 border-t border-black/[0.03]">
      <div className="px-6 md:px-10 py-20 md:py-32 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-20 max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-8 w-full lg:max-w-[602px] text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-bold text-5xl md:text-7xl lg:text-[100px] leading-[1.1] lg:leading-[88px] tracking-tight lg:tracking-[-3px] text-[#1e1e1e]"
          >
            Let's have a conversation
          </motion.h2>
          <p className="font-normal text-base md:text-lg text-[#5d5d5d] max-w-[470px]">
            Whether you have a project ready or just want to talk something through, get in touch. You'll hear back within one business day.
          </p>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 md:p-10 w-full md:max-w-[603px] flex flex-col gap-8 shadow-[0_12px_40px_rgba(0,0,0,0.04)]"
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <input 
                type="text" 
                placeholder="Your name" 
                value={form.name} 
                onChange={(e) => setForm({ ...form, name: e.target.value })} 
                className="h-14 border border-[#cecece] rounded-xl px-5 text-base outline-none w-full focus:border-[#d73a3b] focus:ring-1 focus:ring-[#d73a3b]/20 transition-all"
                style={{ fontFamily: font }}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <input 
                type="email" 
                placeholder="Your email" 
                value={form.email} 
                onChange={(e) => setForm({ ...form, email: e.target.value })} 
                className="h-14 border border-[#cecece] rounded-xl px-5 text-base outline-none w-full focus:border-[#d73a3b] focus:ring-1 focus:ring-[#d73a3b]/20 transition-all"
                style={{ fontFamily: font }}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <textarea 
                placeholder="Leave a message" 
                value={form.message} 
                onChange={(e) => setForm({ ...form, message: e.target.value })} 
                className="h-48 border border-[#cecece] rounded-xl p-5 text-base outline-none resize-none w-full focus:border-[#d73a3b] focus:ring-1 focus:ring-[#d73a3b]/20 transition-all"
                style={{ fontFamily: font }}
              />
            </div>
          </div>
          <CTAButton label="Send message" fullWidth large onClick={() => console.log("Form submitted", form)} />
        </motion.div>
      </div>
    </section>
  );
}

export function Footer(): React.JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#d73a3b] w-full relative z-10 overflow-hidden">
      <div className="px-6 md:px-10 py-16 flex flex-col gap-16 max-w-[1440px] mx-auto text-white">
        <div className="flex flex-col gap-12 md:gap-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-10">
            <div className="flex-1 flex flex-col gap-8">
              <span className="font-medium text-base leading-relaxed tracking-wider uppercase text-white/60">Reach us</span>
              <div className="flex flex-col gap-6">
                {["Instagram", "LinkedIn", "Behance", "Email"].map((l) => (
                  <a 
                    key={l} 
                    href="#" 
                    className="text-white no-underline inline-block group"
                  >
                    <TextRoll text={l} fontSize={28} fontWeight={600} hoverColor="rgba(255,255,255,0.6)" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-center">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 inline-flex flex-col items-center cursor-pointer border border-white/20"
              >
                <span className="text-white font-bold text-4xl md:text-5xl tracking-tighter" style={{ fontFamily: font }}>20/20</span>
                <span className="text-white/60 text-xs font-bold tracking-[0.2em] uppercase mt-2">Digital</span>
              </motion.div>
            </div>

            <div className="flex-1 flex flex-col gap-8 items-start md:items-end w-full">
              <span className="font-medium text-base leading-relaxed tracking-wider uppercase text-white/60">Navigation</span>
              <div className="flex flex-col gap-6 items-start md:items-end">
                {["About", "Services", "Experience", "Blog", "Contact"].map((l) => (
                  <Link 
                    key={l}
                    to={l === "Contact" ? "/#contact" : l === "Experience" ? "/about" : `/${l.toLowerCase()}`} 
                    className="text-white no-underline inline-block group"
                  >
                    <TextRoll text={l} fontSize={28} fontWeight={600} hoverColor="rgba(255,255,255,0.6)" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-full h-px bg-white/10 origin-center"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-10 text-base tracking-tight">
          <span className="flex-1 font-medium text-white/50 text-center md:text-left order-2 md:order-1">
            © {currentYear} 20/20 Digital. All rights reserved.
          </span>
          <div className="flex-1 flex justify-center order-1 md:order-2">
            <button
              className="font-bold text-white cursor-pointer hover:text-white/70 transition-colors uppercase tracking-widest text-xs"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Back to top
            </button>
          </div>
          <div className="flex-1 flex justify-center md:justify-end gap-8 order-3">
            <a href="#" className="no-underline text-white/50 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="no-underline text-white/50 hover:text-white transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
