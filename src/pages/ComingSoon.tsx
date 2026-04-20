import * as React from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

const font = "'Instrument Sans', sans-serif";

export default function ComingSoon({ title }: { title: string }): React.JSX.Element {
  const navigate = useNavigate();

  return (
    <div style={{ 
      fontFamily: font, 
      backgroundColor: "#f3f3f3", 
      height: "100vh", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center",
      textAlign: "center",
      padding: "0 20px"
    }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          whileHover={{ scale: 1.05 }}
          style={{ 
            backgroundColor: "#d73a3b", 
            borderRadius: 8, 
            padding: "8px 16px", 
            display: "inline-flex", 
            alignItems: "center",
            marginBottom: 40
          }}
        >
          <span style={{ color: "white", fontWeight: 700, fontSize: 18, fontFamily: font }}>20/20</span>
        </motion.div>
        
        <h1 style={{ 
          fontWeight: 700, 
          fontSize: 64, 
          lineHeight: "64px", 
          letterSpacing: -1.92, 
          color: "#1e1e1e", 
          margin: "0 0 24px" 
        }}>
          {title}
        </h1>
        
        <p style={{ 
          fontWeight: 400, 
          fontSize: 18, 
          color: "#5d5d5d", 
          margin: "0 0 40px",
          maxWidth: 500
        }}>
          We're currently refining this section to bring you the best experience possible. Stay tuned for updates.
        </p>

        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#1e1e1e", color: "white" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/")}
          style={{
            backgroundColor: "transparent",
            color: "#1e1e1e",
            border: "2px solid #1e1e1e",
            borderRadius: 8,
            padding: "12px 24px",
            fontFamily: font,
            fontWeight: 600,
            fontSize: 16,
            cursor: "pointer",
            transition: "all 0.2s ease"
          }}
        >
          Back to Home
        </motion.button>
      </motion.div>
    </div>
  );
}
