import { useState, useEffect } from "react";
import * as React from "react";
import { motion, useAnimation } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Tag, CTAButton, Placeholder, ContactSection, Footer } from "../components/SharedUI";
import Partners from "../components/Partners";

const font = "'Instrument Sans', sans-serif";

interface ServiceCard {
  id: string;
  title: string[];
  desc: string;
  bg: string;
  text: string;
  descC: string;
}

interface WorkItem {
  year: string;
  title: string;
  desc: string;
  tags: string[];
  imgFirst: boolean;
  img?: string;
}

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  img?: string;
}

const services: ServiceCard[] = [
  { id: "research", title: ["Research", "& Understanding"], desc: "Uncovering real user needs, motivations, and frustrations through journey mapping and evidence-based analysis.", bg: "#1e1e1e", text: "white", descC: "rgba(255,255,255,0.7)" },
  { id: "strategy", title: ["Strategy", "& Planning"], desc: "Aligning product roadmaps with business objectives to create a realistic, research-backed path for growth.", bg: "#d3d3d3", text: "#1e1e1e", descC: "rgba(30,30,28,0.7)" },
  { id: "design", title: ["Design", "& Testing"], desc: "Building and refining scalable interfaces based on rapid prototyping and direct feedback from your actual users.", bg: "#4d7459", text: "white", descC: "rgba(255,255,255,0.7)" },
  { id: "leadership", title: ["UX Leadership", "& Advisory"], desc: "Upskilling internal teams and providing senior oversight to bridge the gap between design and delivery.", bg: "#2c444b", text: "white", descC: "rgba(255,255,255,0.7)" },
];

const works: WorkItem[] = [
  { 
    year: "2024", 
    title: "Datolite Intelligence", 
    desc: "A complete overhaul of an enterprise legal tech platform. We analyzed complex billing workflows to design a streamlined interface that reduced data entry errors by 40%.", 
    tags: ["Legal tech", "Product design", "UX architecture"], 
    imgFirst: true, 
    img: "https://raw.githubusercontent.com/gbunmi/images/main/Work%201.jpg" 
  },
  { 
    year: "2023", 
    title: "HealthPath Connect", 
    desc: "A telehealth coordination tool designed for specialized care providers. We mapped the patient journey to identify friction points, resulting in a 25% increase in retention.", 
    tags: ["Healthcare", "User research", "Mobile app"], 
    imgFirst: false, 
    img: "https://raw.githubusercontent.com/gbunmi/images/main/Work%202.jpg" 
  },
  { 
    year: "2023", 
    title: "Burlington Portal", 
    desc: "Redesigning a citizen engagement platform for a municipal government, focusing on accessibility and intuitive information architecture for essential resident services.", 
    tags: ["Government", "Service design", "Accessibility"], 
    imgFirst: true, 
    img: "https://raw.githubusercontent.com/gbunmi/images/main/Work%203.jpg" 
  },
];

const testimonials: Testimonial[] = [
  { quote: "The 20/20 team brought a level of user insight that we simply hadn't encountered before. Their methodology for gathering deep qualitative data changed our perspective on our own product roadmap.", name: "Aisling O'Connor", role: "Product Lead, Healthly", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
  { quote: "Collaborative, insightful, and technically grounded. They didn't just hand over designs; they partnered with our engineers to ensure the user experience was realized perfectly in code.", name: "Paul Paruch", role: "Vice President Digital & Payments, Atlantic Central", img: "https://raw.githubusercontent.com/gbunmi/images/main/Frame%2017%20(1).jpg" },
  { quote: "Their leadership during our accessibility audit was invaluable. They provided practical, actionable advice that bridged the gap between complex WCAG requirements and our core design system.", name: "Marcus Thorne", role: "Director of Innovation, GovConnect", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
  { quote: "The strategic approach to UX research provided us with a roadmap that completely transformed our product trajectory. We finally feel like we understand our users' core needs and can build with confidence.", name: "Sarah Jenkins", role: "Chief Product Officer, NexGen FinTech", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" },
  { quote: "Implementation was seamless. The attention to detail in the design system and the clear advisory role they took helped our internal team level up significantly. A truly collaborative partnership.", name: "David Chen", role: "Head of Design, Global Gov Services", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
];

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);
  return matches;
}

function ServiceCardComponent({ service, height }: { service: ServiceCard; height: number }): React.JSX.Element {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Link to={`/services#service-${service.id}`} style={{ textDecoration: "none" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        onMouseEnter={() => window.dispatchEvent(new CustomEvent("cursorChange", { detail: { active: true } }))}
        onMouseLeave={() => window.dispatchEvent(new CustomEvent("cursorChange", { detail: { active: false } }))}
        style={{
          backgroundColor: service.bg,
          borderRadius: "24px",
          padding: isMobile ? "40px 24px" : "64px 40px 40px",
          height: isMobile ? "auto" : height,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: isMobile ? 32 : 0,
          overflow: "hidden",
          boxSizing: "border-box",
          cursor: isMobile ? "pointer" : "none",
        }}
      >
        <div>
          {service.title.map((line, i) => (
            <div key={i} style={{ fontFamily: font, fontWeight: 700, fontSize: isMobile ? 28 : 36, lineHeight: isMobile ? "34px" : "44px", letterSpacing: -0.72, color: service.text }}>
              {line}
            </div>
          ))}
        </div>
        <p style={{ fontFamily: font, fontWeight: 500, fontSize: 16, color: service.descC, margin: 0, maxWidth: 479 }}>
          {service.desc}
        </p>
      </motion.div>
    </Link>
  );
}

function WorkCard({ work }: { work: WorkItem }): React.JSX.Element {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const imageBlock = (
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{ 
        flexShrink: 0, 
        width: isMobile ? "100%" : 656, 
        height: isMobile ? 300 : 484, 
        borderRadius: "24px", 
        overflow: "hidden", 
        backgroundColor: "#c4c4c4",
        transform: "translateZ(0)",
        WebkitMaskImage: "-webkit-radial-gradient(white, black)"
      }}
    >
      {work.img && (
        <motion.img 
          src={work.img} 
          alt={work.title} 
          referrerPolicy="no-referrer"
          whileHover={{ scale: 1.05, filter: "blur(8px)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "24px" }}
        />
      )}
    </motion.div>
  );
  const textBlock = (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: isMobile ? "0" : "24px 0", minWidth: 0, gap: isMobile ? 24 : 0 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 24 : 48 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div><Tag label={work.year} /></div>
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ fontFamily: font, fontWeight: 600, fontSize: isMobile ? 28 : 36, lineHeight: isMobile ? "34px" : "44px", letterSpacing: -0.72, color: "#1e1e1e", margin: 0 }}
          >
            {work.title}
          </motion.h3>
        </div>
        <p style={{ fontFamily: font, fontWeight: 400, fontSize: 16, color: "#5d5d5d", margin: 0, maxWidth: 568, whiteSpace: "pre-line" }}>{work.desc}</p>
      </div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>{work.tags.map((t) => <React.Fragment key={t}><Tag label={t} /></React.Fragment>)}</div>
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      onMouseEnter={() => window.dispatchEvent(new CustomEvent("cursorChange", { detail: { active: true } }))}
      onMouseLeave={() => window.dispatchEvent(new CustomEvent("cursorChange", { detail: { active: false } }))}
      style={{ 
        backgroundColor: "white", 
        borderRadius: "24px", 
        padding: isMobile ? 16 : 24, 
        height: isMobile ? "auto" : 532, 
        display: "flex", 
        flexDirection: isMobile ? "column" : "row",
        gap: isMobile ? 32 : 48, 
        overflow: "hidden", 
        boxSizing: "border-box", 
        border: "1px solid #f0f0f0", 
        cursor: isMobile ? "pointer" : "none" 
      }}
      whileHover={{ transform: "translateY(-4px)", boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }}
    >
      {work.imgFirst || isMobile ? <>{imageBlock}{textBlock}</> : <>{textBlock}{imageBlock}</>}
    </motion.div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }): React.JSX.Element {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      style={{ 
        backgroundColor: "white", 
        borderRadius: "24px", 
        display: "flex", 
        flexDirection: isMobile ? "column" : "row",
        overflow: "hidden", 
        width: isMobile ? "calc(100vw - 32px)" : 962, 
        height: isMobile ? "auto" : 360, 
        flexShrink: 0, 
        scrollSnapAlign: "start" as const,
        transform: "translateZ(0)",
        WebkitMaskImage: "-webkit-radial-gradient(white, black)"
      }}
    >
      <div style={{ width: isMobile ? "100%" : 300, height: isMobile ? 240 : "100%", backgroundColor: "#c4c4c4", flexShrink: 0, overflow: "hidden", borderRadius: 0 }}>
        {testimonial.img && (
          <img 
            src={testimonial.img} 
            alt={testimonial.name} 
            referrerPolicy="no-referrer"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        )}
      </div>
      <div style={{ flex: 1, padding: isMobile ? "32px 24px" : "62px 40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 32 : 64 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 26V15.6C0 10.92 1.08 7.28 3.24 4.68C5.48 2.08 8.6 0.4 12.6 0L13.8 4.2C11.4 4.68 9.52 5.72 8.16 7.32C6.88 8.92 6.2 10.84 6.12 13.08H12.6V26H0ZM18.6 26V15.6C18.6 10.92 19.68 7.28 21.84 4.68C24.08 2.08 27.2 0.4 31.2 0L32.4 4.2C30 4.68 28.12 5.72 26.76 7.32C25.48 8.92 24.8 10.84 24.72 13.08H31.2V26H18.6Z" fill="#d73a3b"/>
            </svg>
            <p style={{ fontFamily: font, fontWeight: 400, fontSize: isMobile ? 16 : 18, lineHeight: isMobile ? "24px" : "26px", letterSpacing: -0.09, color: "#1e1e1e", margin: 0 }}>{testimonial.quote}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={{ fontFamily: font, fontWeight: 600, fontSize: isMobile ? 20 : 24, lineHeight: isMobile ? "28px" : "32px", letterSpacing: -0.48, color: "#1e1e1e" }}>{testimonial.name}</span>
            <span style={{ fontFamily: font, fontWeight: 500, fontSize: 14, lineHeight: "26px", letterSpacing: -0.08, color: "#5d5d5d" }}>{testimonial.role}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Home(): React.JSX.Element {
  const [isHeroPaused, setIsHeroPaused] = useState(false);
  const [isTestimonialPaused, setIsTestimonialPaused] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div style={{ fontFamily: font, overflowX: "hidden" }}>
      {/* Hero */}
      <section style={{ backgroundColor: "#f3f3f3", padding: isMobile ? "60px 0 80px" : "100px 0 120px", display: "flex", flexDirection: "column", gap: isMobile ? 40 : 80, overflow: "hidden" }}>
        <div style={{ display: "flex", padding: "0 var(--gutter)", gap: 10, alignItems: "flex-end", justifyContent: "flex-start", margin: "0 auto", width: "100%" }}>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ fontWeight: 600, fontSize: isMobile ? 40 : 72, lineHeight: isMobile ? "44px" : "72px", letterSpacing: isMobile ? -1 : -2.16, color: "#1e1e1e", maxWidth: 869, margin: 0, textAlign: "left" }}
          >
            Better products and services start with understanding people.
          </motion.h1>
        </div>


        {/* Ticker Section */}
        <div style={{ width: "100%", overflow: "hidden" }}>
          <motion.div
            className="ticker-animate"
            onMouseEnter={() => setIsHeroPaused(true)}
            onMouseLeave={() => setIsHeroPaused(false)}
            style={{ 
              display: "flex", 
              gap: isMobile ? 12 : 24, 
              paddingLeft: isMobile ? 16 : 24, 
              paddingTop: 24,
              paddingBottom: 12,
              width: "max-content",
              animationDuration: isMobile ? "20s" : "30s",
              animationPlayState: isHeroPaused ? "paused" : "running"
            }}
            whileHover={{ scale: 0.98, transition: { duration: 0.8 } }}
          >
            {[...Array(2)].map((_, listIdx) => (
              <React.Fragment key={listIdx}>
                {[
                  { src: "https://raw.githubusercontent.com/gbunmi/images/main/Hero%201.jpg", w: isMobile ? 280 : 454, h: isMobile ? 280 : 451, mt: 0 },
                  { src: "https://raw.githubusercontent.com/gbunmi/images/main/Hero%202.jpg", w: isMobile ? 320 : 523, h: isMobile ? 250 : 404, mt: isMobile ? 10 : 30 },
                  { src: "https://raw.githubusercontent.com/gbunmi/images/main/Hero%203.png", w: isMobile ? 260 : 431, h: isMobile ? 280 : 460, mt: isMobile ? -5 : -10 },
                  { src: "https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&q=80&w=600", w: isMobile ? 300 : 490, h: isMobile ? 260 : 420, mt: isMobile ? 6 : 20 },
                  { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600", w: isMobile ? 310 : 510, h: isMobile ? 290 : 480, mt: isMobile ? -10 : -20 },
                  { src: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=600", w: isMobile ? 280 : 460, h: isMobile ? 270 : 440, mt: isMobile ? 15 : 40 }
                ].map((img, i) => (
                  <motion.div
                    key={`${listIdx}-${i}`}
                    style={{ 
                      width: img.w, 
                      height: img.h, 
                      marginTop: img.mt, 
                      borderRadius: "24px", 
                      overflow: "hidden", 
                      flexShrink: 0,
                      backgroundColor: "#c4c4c4",
                      transform: "translateZ(0)",
                      WebkitMaskImage: "-webkit-radial-gradient(white, black)", 
                      isolation: "isolate"
                    }}
                  >
                    {img.src ? (
                      <img 
                        src={img.src} 
                        alt="Hero" 
                        referrerPolicy="no-referrer"
                        style={{ 
                          width: "100%", 
                          height: "100%", 
                          objectFit: "cover", 
                          borderRadius: "24px",
                          display: "block"
                        }}
                      />
                    ) : (
                      <div style={{ width: "100%", height: "100%", borderRadius: "24px", backgroundColor: "#c4c4c4" }} />
                    )}
                  </motion.div>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <motion.section 
        initial={{ backgroundColor: "#f3f3f3" }}
        whileInView={{ backgroundColor: "#d73a3b" }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ padding: isMobile ? "60px 0" : "80px 0" }}
      >
        <div style={{ margin: "0 auto", width: "100%", padding: "0 var(--gutter)", display: "flex", flexDirection: "column", gap: isMobile ? 48 : 80 }}>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: isMobile ? "flex-start" : "space-between", gap: isMobile ? 16 : 0, flexWrap: isMobile ? "nowrap" : "wrap" }}>
            {["Research", "Strategy", "Design"].map((p, i) => (
              <motion.div 
                key={p} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                style={{ flex: isMobile ? "none" : 1, display: "flex", alignItems: "center", gap: isMobile ? 6 : 12 }}
              >
                <div style={{ width: isMobile ? 4 : 8, height: isMobile ? 20 : 40, backgroundColor: "rgba(255,255,255,0.7)" }} />
                <span style={{ fontWeight: 600, fontSize: isMobile ? 20 : 48, lineHeight: isMobile ? "24px" : "54px", letterSpacing: isMobile ? -0.4 : -1.44, color: "white", whiteSpace: "nowrap" }}>{p}</span>
              </motion.div>
            ))}
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontWeight: 600, fontSize: isMobile ? 20 : 24, lineHeight: isMobile ? "28px" : "32px", letterSpacing: -0.48, color: "white", maxWidth: 443, margin: 0 }}
          >
            Working with organizations across industries, from the first research question through design and delivery.
          </motion.p>
        </div>
      </motion.section>

      {/* Services Context */}
      <section style={{ backgroundColor: "#f3f3f3", padding: isMobile ? "80px 0" : "120px 0" }}>
        <div style={{ margin: "0 auto", width: "100%", padding: "0 var(--gutter)", display: "flex", flexDirection: "column", gap: isMobile ? 48 : 80 }}>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ fontWeight: 700, fontSize: isMobile ? 36 : 56, lineHeight: isMobile ? "40px" : "48px", letterSpacing: -1.68, color: "#1e1e1e", textAlign: isMobile ? "left" : "center", margin: 0 }}
          >
            The Right help at any stage
          </motion.h2>
          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 24 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 24, flex: 1 }}>
              <ServiceCardComponent service={services[0]} height={321} />
              <ServiceCardComponent service={services[2]} height={375} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 24, flex: 1 }}>
              <ServiceCardComponent service={services[1]} height={356} />
              <ServiceCardComponent service={services[3]} height={342} />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={{ backgroundColor: "#d73a3b", padding: isMobile ? "80px 0" : "120px 0" }}>
        <div style={{ margin: "0 auto", width: "100%", padding: "0 var(--gutter)", display: "flex", flexDirection: "column", gap: isMobile ? 48 : 80 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 32 : 40 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <motion.h2 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={{ fontWeight: 700, fontSize: isMobile ? 36 : 56, lineHeight: isMobile ? "40px" : "48px", letterSpacing: -1.68, color: "white", margin: 0 }}
              >
                Who we are
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                style={{ fontWeight: 400, fontSize: 16, color: "white", maxWidth: 553, margin: 0 }}
              >
                At 20/20 Digital, we help organizations bridge the gap between their vision and their customers' reality. Whether you’re scaling a product or auditing a service, we provide the research and design leadership to build better.
              </motion.p>
            </div>
            <Link to="/about" style={{ width: "fit-content" }}>
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "white", color: "#d73a3b" }}
                whileTap={{ scale: 0.95 }}
                style={{ backgroundColor: "transparent", color: "white", border: "2px solid white", borderRadius: 999, padding: "12px 16px", fontWeight: 600, fontSize: 14, cursor: "pointer", alignSelf: "flex-start", fontFamily: font, transition: "background-color 0.2s, color 0.2s" }}
              >
                Learn more
              </motion.button>
            </Link>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -10, boxShadow: "0 30px 60px rgba(0,0,0,0.15)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ 
              height: isMobile ? 300 : 545, 
              borderRadius: "24px", 
              overflow: "hidden", 
              backgroundColor: "#c4c4c4",
              transform: "translateZ(0)",
              WebkitMaskImage: "-webkit-radial-gradient(white, black)",
              cursor: "pointer"
            }}
          >
            <motion.img 
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              src="https://raw.githubusercontent.com/gbunmi/images/main/About%20us%20(2).jpg" 
              alt="Who we are" 
              referrerPolicy="no-referrer"
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "24px" }}
            />
          </motion.div>
        </div>
      </section>

      {/* Works Section */}
      <section style={{ backgroundColor: "#f3f3f3", padding: isMobile ? "80px 0 0" : "120px 0 0" }}>
        <div style={{ margin: "0 auto", width: "100%", padding: "0 var(--gutter)", display: "flex", flexDirection: "column", gap: isMobile ? 48 : 80 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 48 : 80 }}>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ fontWeight: 700, fontSize: isMobile ? 36 : 56, lineHeight: isMobile ? "40px" : "48px", letterSpacing: -1.68, color: "#1e1e1e", margin: 0 }}
            >
              Featured Works
            </motion.h2>
            <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 40 : 64, alignItems: "center" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 24, width: "100%" }}>
                {works.map((w, i) => <React.Fragment key={i}><WorkCard work={w} /></React.Fragment>)}
              </div>
              <Link to="/works">
                <motion.button 
                  whileHover={{ scale: 1.02, backgroundColor: "#1e1e1e", color: "white" }}
                  whileTap={{ scale: 0.98 }}
                  style={{ backgroundColor: "transparent", color: "#1e1e1e", border: "2px solid rgba(0,0,0,0.6)", borderRadius: 999, height: 45, display: "flex", alignItems: "center", justifyContent: "center", padding: "12px 16px", fontWeight: 600, fontSize: 16, letterSpacing: -0.32, cursor: "pointer", fontFamily: font, transition: "all 0.2s" }}
                >
                  See all works
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ backgroundColor: "#f3f3f3", padding: isMobile ? "80px 0" : "120px 0", display: "flex", flexDirection: "column", gap: isMobile ? 48 : 80, overflow: "hidden" }}>
        <div style={{ display: "flex", justifyContent: "center", padding: "0 var(--gutter)", margin: "0 auto", width: "100%" }}>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontWeight: 700, fontSize: isMobile ? 36 : 56, lineHeight: isMobile ? "40px" : "48px", letterSpacing: -1.68, color: "#1e1e1e", margin: 0, textAlign: isMobile ? "left" : "center" }}
          >
            What people say about us
          </motion.h2>
        </div>
        <div style={{ width: "100%", overflow: "hidden" }}>
          <motion.div 
            className="ticker-animate"
            onMouseEnter={() => setIsTestimonialPaused(true)}
            onMouseLeave={() => setIsTestimonialPaused(false)}
            style={{ 
              display: "flex", 
              gap: isMobile ? 16 : 40, 
              width: "max-content", 
              paddingLeft: isMobile ? 16 : 40,
              animationDuration: isMobile ? "40s" : "60s",
              animationPlayState: isTestimonialPaused ? "paused" : "running"
            }}
          >
            {[...Array(2)].map((_, listIdx) => (
              <React.Fragment key={listIdx}>
                {testimonials.map((t, i) => (
                  <React.Fragment key={`${listIdx}-${i}`}>
                    <TestimonialCard testimonial={t} />
                  </React.Fragment>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </section>

      <Partners />

      <ContactSection />
      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
