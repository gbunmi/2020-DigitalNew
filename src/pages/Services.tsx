import * as React from "react";
import { motion } from "motion/react";
import { ContactSection, Footer, CTAButton } from "../components/SharedUI";

const font = "'Instrument Sans', sans-serif";

interface ServiceItemProps {
  title: string;
  image: string;
  points: { title: string; desc: string }[];
}

const ServiceSection: React.FC<ServiceItemProps> = ({ title, image, points }) => {
  return (
    <section style={{ padding: "80px 40px", borderBottom: "1px solid #e1e1e1" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 4, height: 32, backgroundColor: "#d73a3b" }} />
            <h2 style={{ fontSize: 48, fontWeight: 700, margin: 0, letterSpacing: "-1.44px", color: "#1e1e1e" }}>{title}</h2>
          </div>
          <motion.a href="#contact" style={{ textDecoration: "none" }}>
            <CTAButton label="Get in touch" />
          </motion.a>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ borderRadius: 24, overflow: "hidden", marginBottom: 48, height: 600, backgroundColor: "#c4c4c4" }}
        />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40 }}>
          {points.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ display: "flex", flexDirection: "column", gap: 16 }}
            >
              <h3 style={{ fontSize: 20, fontWeight: 700, margin: 0, color: "#1e1e1e" }}>{p.title}</h3>
              <p style={{ fontSize: 16, lineHeight: "26px", color: "#5d5d5d", margin: 0 }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Services(): React.JSX.Element {
  const commonPoints = [
    { 
      title: "Customer Insights", 
      desc: "Understanding what customers need, expect, and experience by going beyond assumptions. This means uncovering real needs, motivations, and frustrations through observation, feedback, and journey mapping." 
    },
    { 
      title: "Experience Gaps", 
      desc: "Finding out what is driving a gap in a product or service experience by looking beneath surface issues. This involves identifying where expectations are not being met and what's causing the disconnect." 
    },
    { 
      title: "Data Sensemaking", 
      desc: "Making sense of the data and feedback you already have by turning scattered inputs into clear patterns. From analytics to support logs, this helps translate information into decisions you can act on." 
    }
  ];

  const serviceData = [
    {
      title: "Research & Understanding",
      image: "https://picsum.photos/seed/research-2020/1440/800",
      points: commonPoints
    },
    {
      title: "Strategy & Planning",
      image: "https://picsum.photos/seed/strategy-2020/1440/800",
      points: commonPoints
    },
    {
      title: "Design & Testing",
      image: "https://picsum.photos/seed/design-2020/1440/800",
      points: commonPoints
    },
    {
      title: "UX Leadership & Advisory",
      image: "https://picsum.photos/seed/leadership-2020/1440/800",
      points: commonPoints
    }
  ];

  return (
    <div style={{ fontFamily: font, backgroundColor: "#fcfcfc", overflowX: "hidden" }}>
      {/* Hero Section */}
      <section style={{ padding: "120px 40px 80px", maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ maxWidth: 900 }}>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ fontSize: 80, fontWeight: 700, lineHeight: "88px", letterSpacing: "-2.4px", color: "#1e1e1e", margin: "0 0 40px" }}
          >
            Our Services
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
      </section>

      {/* Services List */}
      <div>
        {serviceData.map((service, index) => (
          <ServiceSection key={index} {...service} />
        ))}
      </div>

      <ContactSection />
      <Footer />
    </div>
  );
}
