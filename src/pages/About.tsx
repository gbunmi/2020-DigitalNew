import * as React from "react";
import { motion } from "motion/react";
import { ContactSection, Footer } from "../components/SharedUI";

const font = "'Instrument Sans', sans-serif";

interface FocusCardProps {
  number: string;
  title: string;
  description: string;
}

const FocusCard: React.FC<FocusCardProps> = ({ number, title, description }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.15)" }}
      style={{
        backgroundColor: "rgba(255,255,255,0.1)",
        borderRadius: 24,
        padding: 40,
        color: "white",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
        height: 240,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end"
      }}
    >
      <div style={{ position: "absolute", top: 40, left: 40, fontSize: 16, fontWeight: 700, opacity: 0.8 }}>{number}</div>
      <div style={{ position: "absolute", top: 20, right: 0, fontSize: 140, fontWeight: 700, opacity: 0.1, pointerEvents: "none", lineHeight: 1 }}>{number}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, zIndex: 1 }}>
        <h3 style={{ margin: 0, fontSize: 24, fontWeight: 700 }}>{title}</h3>
        <p style={{ margin: 0, fontSize: 14, opacity: 0.7, maxWidth: 320 }}>{description}</p>
      </div>
    </motion.div>
  );
}

const StatCard: React.FC<{ value: string; label: string }> = ({ value, label }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      style={{
        border: "1px solid #e1e1e1",
        borderRadius: 40,
        padding: "48px 64px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        minWidth: 200,
        backgroundColor: "white"
      }}
    >
      <span style={{ fontSize: 48, fontWeight: 700, color: "#1e1e1e" }}>{value}</span>
      <span style={{ fontSize: 16, color: "#5d5d5d", fontWeight: 500 }}>{label}</span>
    </motion.div>
  );
}

const ExperienceRow: React.FC<{ role: string; company: string; years: string }> = ({ role, company, years }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      style={{
        borderBottom: "1px solid #e1e1e1",
        padding: "24px 0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <span style={{ fontWeight: 700, fontSize: 18, color: "#1e1e1e" }}>{role}</span>
        <span style={{ fontSize: 14, color: "#5d5d5d" }}>{company}</span>
      </div>
      <div style={{ backgroundColor: "#f3f3f3", borderRadius: 4, padding: "4px 8px", fontSize: 12, fontWeight: 600, color: "#1e1e1e" }}>
        {years}
      </div>
    </motion.div>
  );
}

export default function About(): React.JSX.Element {
  const focusItems = [
    { number: "01", title: "User Experience", description: "20/20 Digital was founded in 2017 and has worked with organizations across industries that include financial" },
    { number: "02", title: "Customer Experience", description: "20/20 Digital was founded in 2017 and has worked with organizations across industries that include financial" },
    { number: "03", title: "Digital Products", description: "20/20 Digital was founded in 2017 and has worked with organizations across industries that include financial" },
    { number: "04", title: "Service Experiences", description: "20/20 Digital was founded in 2017 and has worked with organizations across industries that include financial" },
    { number: "05", title: "Digital Strategy", description: "20/20 Digital was founded in 2017 and has worked with organizations across industries that include financial" },
    { number: "06", title: "Employee Experience", description: "20/20 Digital was founded in 2017 and has worked with organizations across industries that include financial" },
  ];

  const statItems = [
    { value: "100", label: "Projects" },
    { value: "98%", label: "Client Retention" },
    { value: "24", label: "Projects" },
    { value: "100", label: "Projects" },
  ];

  const marqueeItems = [
    "Team & Leadership Advisory", "Product Strategy & Design", "Customer & Product Research", "Workshops & Training", "Service Design"
  ];

  return (
    <div style={{ fontFamily: font, backgroundColor: "white", overflowX: "hidden" }}>
      {/* Hero Section */}
      <section style={{ padding: "120px 40px 80px", maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ maxWidth: 900 }}>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ fontSize: 80, fontWeight: 700, lineHeight: "88px", letterSpacing: "-2.4px", color: "#1e1e1e", margin: "0 0 40px" }}
          >
            Making better products by fixing what’s behind them.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontSize: 18, lineHeight: "26px", color: "#5d5d5d", maxWidth: 660, margin: 0 }}
          >
            From product flows to team dynamics, we uncover the friction points holding you back and work with you to resolve them in a way that lasts.
          </motion.p>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{ marginTop: 80, borderRadius: 24, overflow: "hidden", height: 600, backgroundColor: "#c4c4c4" }}
        />
      </section>

      {/* Focus Section */}
      <section style={{ backgroundColor: "#d73a3b", padding: "120px 40px" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: 72, fontWeight: 700, color: "white", marginBottom: 80, letterSpacing: "-2.16px" }}
          >
            What we focus on
          </motion.h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: 24 }}>
            {focusItems.map(item => (
              <FocusCard 
                key={item.number} 
                number={item.number} 
                title={item.title} 
                description={item.description} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: "120px 40px", backgroundColor: "#f3f3f3" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 24 }}>
          {statItems.map((item, i) => (
            <StatCard 
              key={i} 
              value={item.value} 
              label={item.label} 
            />
          ))}
        </div>
      </section>

      {/* Marquee Section */}
      <section style={{ padding: "60px 0", borderTop: "1px solid #e1e1e1", borderBottom: "1px solid #e1e1e1", overflow: "hidden", backgroundColor: "white" }}>
        <div style={{ display: "flex", gap: 40, whiteSpace: "nowrap", alignItems: "center" }}>
          {[...Array(3)].map((_, i) => (
            <div key={i} style={{ display: "flex", gap: 40, alignItems: "center" }}>
              {marqueeItems.map((item, j) => (
                <React.Fragment key={j}>
                  <span style={{ fontSize: 18, fontWeight: 600, color: "#1e1e1e" }}>{item}</span>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#d73a3b" }} />
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Founder Section */}
      <section style={{ padding: "120px 40px" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: 72, fontWeight: 700, color: "#1e1e1e", marginBottom: 80 }}
          >
            Meet our founder
          </motion.h2>
          <div style={{ display: "flex", gap: 80, alignItems: "stretch" }}>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ flex: 1, position: "relative", borderRadius: 24, overflow: "hidden", height: 640, backgroundColor: "#c4c4c4" }}
            >
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: 40, background: "linear-gradient(transparent, rgba(0,0,0,0.8))", color: "white" }}>
                <h3 style={{ margin: 0, fontSize: 32, fontWeight: 700 }}>Jamie Gerrard</h3>
                <span style={{ fontSize: 16, opacity: 0.8 }}>Principal Consultant</span>
              </div>
            </motion.div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div style={{ borderTop: "1px solid #e1e1e1" }}>
                {[...Array(6)].map((_, i) => (
                  <ExperienceRow 
                    key={i}
                    role="Principal Consultant"
                    company="20/20 Digital"
                    years="2017 — Present"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section style={{ padding: "120px 40px", textAlign: "center", backgroundColor: "#f3f3f3" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 60 }}>
          <div style={{ backgroundColor: "#d73a3b", borderRadius: 8, padding: "8px 16px", display: "inline-flex", alignItems: "center" }}>
            <span style={{ color: "white", fontWeight: 700, fontSize: 24 }}>20/20 Digital</span>
          </div>
          <h2 style={{ fontSize: 36, fontWeight: 700, color: "#1e1e1e", maxWidth: 700, margin: 0, lineHeight: "44px" }}>
            25 years working with organizations to understand what's actually happening with their digital products, service experiences, and the teams behind them.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 32, fontSize: 16, color: "#5d5d5d", lineHeight: "26px", maxWidth: 700, textAlign: "left" }}>
            <p>20/20 Digital was founded in 2017 and has worked with organizations across industries that include financial services, healthcare, government, technology, legal, education, startups, and travel & tourism.</p>
            <p>Before starting 20/20 Digital, nearly eleven years at VERB Interactive built the foundation, growing from front-end developer to Director of User Experience and senior leadership. A year as Director of Product and Marketing at aioTV added product ownership, team leadership, and marketing to the mix. Building things, not just advising on them, is what shapes how every project gets done.</p>
            <p>Six years in public library operations covered everything from working directly with the public and providing research assistance to supervising teams and managing budgets. That range of experience built the organizational and people skills that inform everything today.</p>
            <p>Working across all levels of an organization is intentional, from executives setting direction to managers navigating delivery and the people closest to it.</p>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}
