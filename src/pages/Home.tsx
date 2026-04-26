import { useState, useEffect } from "react";
import * as React from "react";
import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Tag, CTAButton, Placeholder, ContactSection, Footer } from "../components/SharedUI";

const font = "'Instrument Sans', sans-serif";

interface ServiceCard {
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
  { title: ["Research ", "& Understanding"], desc: "20/20 Digital was founded in 2017 and has worked with organizations across industries that include financial services, healthcare, government, technology, legal, education, startups, and travel & tourism.", bg: "#1e1e1e", text: "white", descC: "rgba(255,255,255,0.7)" },
  { title: ["Strategy ", "& Planning"], desc: "20/20 Digital was founded in 2017 and has worked with organizations across industries that include financial services, healthcare, government, technology, legal, education, startups, and travel & tourism.", bg: "#d3d3d3", text: "#1e1e1e", descC: "rgba(30,30,28,0.7)" },
  { title: ["Design ", "& Testing"], desc: "20/20 Digital was founded in 2017 and has worked with organizations across industries that include financial services, healthcare, government, technology, legal, education, startups, and travel & tourism.", bg: "#4d7459", text: "white", descC: "rgba(255,255,255,0.7)" },
  { title: ["UX Leadership ", "& Advisory"], desc: "20/20 Digital was founded in 2017 and has worked with organizations across industries that include financial services, healthcare, government, technology, legal, education, startups, and travel & tourism.", bg: "#2c444b", text: "white", descC: "rgba(255,255,255,0.7)" },
];

const works: WorkItem[] = [
  { year: "2024", title: "Datolite", desc: "PulseCart is a smart grocery shopping experience that adapts to users' habits, budgets, and timing. Instead of static lists, it predicts what you'll need based on your past purchases, suggests optimized shopping routes inside stores, and adjusts recommendations in real time based on price changes and availability.", tags: ["HEALTH TECH", "UX DESIGN", "DIGITAL STRATEGY"], imgFirst: true, img: "https://raw.githubusercontent.com/gbunmi/images/main/Work%201.jpg" },
  { year: "2024", title: "Paul Paruch", desc: "The focus of the project was reducing decision fatigue and time spent shopping, especially for busy urban users. I explored how subtle nudges, predictive patterns, and context-aware UI can turn a routine task into something faster and almost automatic.\nThe design process covered user research, behavioral mapping, interaction design, and building a responsive system that balances automation with user control.", tags: ["HEALTH TECH", "UX DESIGN", "DIGITAL STRATEGY"], imgFirst: false, img: "https://raw.githubusercontent.com/gbunmi/images/main/Work%202.jpg" },
  { year: "2024", title: "Burlington", desc: "PulseCart is a smart grocery shopping experience that adapts to users' habits, budgets, and timing. Instead of static lists, it predicts what you'll need based on your past purchases, suggests optimized shopping routes inside stores, and adjusts recommendations in real time based on price changes and availability.", tags: ["HEALTH TECH", "UX DESIGN", "DIGITAL STRATEGY"], imgFirst: true, img: "https://raw.githubusercontent.com/gbunmi/images/main/Work%203.jpg" },
];

const testimonials: Testimonial[] = [
  { quote: "The 20/20 team brought a level of user insight that we simply hadn't encountered before. Their methodology for gathering deep qualitative data changed our perspective on our own product roadmap.", name: "Aisling O'Connor", role: "Product Lead, Healthly" },
  { quote: "Collaborative, insightful, and technically grounded. They didn't just hand over designs; they partnered with our engineers to ensure the user experience was realized perfectly in code.", name: "Paul Paruch", role: "Vice President Digital & Payments, Atlantic Central", img: "https://raw.githubusercontent.com/gbunmi/images/main/Frame%2017%20(1).jpg" },
  { quote: "Their leadership during our accessibility audit was invaluable. They provided practical, actionable advice that bridged the gap between complex WCAG requirements and our core design system.", name: "Marcus Thorne", role: "Director of Innovation, GovConnect" },
  { quote: "The strategic approach to UX research provided us with a roadmap that completely transformed our product trajectory. We finally feel like we understand our users' core needs and can build with confidence.", name: "Sarah Jenkins", role: "Chief Product Officer, NexGen FinTech" },
  { quote: "Implementation was seamless. The attention to detail in the design system and the clear advisory role they took helped our internal team level up significantly. A truly collaborative partnership.", name: "David Chen", role: "Head of Design, Global Gov Services" },
];

function ServiceCardComponent({ service, height }: { service: ServiceCard; height: number }): React.JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundColor: service.bg,
        borderRadius: "24px",
        padding: "64px 40px 40px",
        height,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
        boxSizing: "border-box",
        cursor: "pointer",
      }}
    >
      <div>
        {service.title.map((line, i) => (
          <div key={i} style={{ fontFamily: font, fontWeight: 600, fontSize: 36, lineHeight: "44px", letterSpacing: -0.72, color: service.text }}>
            {line}
          </div>
        ))}
      </div>
      <p style={{ fontFamily: font, fontWeight: 400, fontSize: 16, color: service.descC, margin: 0, maxWidth: 479 }}>
        {service.desc}
      </p>
    </motion.div>
  );
}

function WorkCard({ work }: { work: WorkItem }): React.JSX.Element {
  const imageBlock = (
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{ 
        flexShrink: 0, 
        width: 656, 
        height: 484, 
        borderRadius: "24px", 
        overflow: "hidden", 
        backgroundColor: "#c4c4c4",
        transform: "translateZ(0)",
        WebkitMaskImage: "-webkit-radial-gradient(white, black)"
      }}
    >
      {work.img && (
        <img 
          src={work.img} 
          alt={work.title} 
          referrerPolicy="no-referrer"
          style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "24px" }}
        />
      )}
    </motion.div>
  );
  const textBlock = (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "24px 0", minWidth: 0 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div><Tag label={work.year} /></div>
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ fontFamily: font, fontWeight: 600, fontSize: 36, lineHeight: "44px", letterSpacing: -0.72, color: "#1e1e1e", margin: 0 }}
          >
            {work.title}
          </motion.h3>
        </div>
        <p style={{ fontFamily: font, fontWeight: 400, fontSize: 16, color: "#5d5d5d", margin: 0, maxWidth: 568, whiteSpace: "pre-line" }}>{work.desc}</p>
      </div>
      <div style={{ display: "flex", gap: 8 }}>{work.tags.map((t) => <React.Fragment key={t}><Tag label={t} /></React.Fragment>)}</div>
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      style={{ backgroundColor: "white", borderRadius: "24px", padding: 24, height: 532, display: "flex", gap: 48, overflow: "hidden", boxSizing: "border-box", border: "1px solid transparent" }}
      whileHover={{ borderColor: "rgba(215, 58, 59, 0.2)" }}
    >
      {work.imgFirst ? <>{imageBlock}{textBlock}</> : <>{textBlock}{imageBlock}</>}
    </motion.div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }): React.JSX.Element {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      style={{ 
        backgroundColor: "white", 
        borderRadius: "24px", 
        display: "flex", 
        overflow: "hidden", 
        width: 962, 
        height: 360, 
        flexShrink: 0, 
        scrollSnapAlign: "start" as const,
        transform: "translateZ(0)",
        WebkitMaskImage: "-webkit-radial-gradient(white, black)"
      }}
    >
      <div style={{ width: 300, height: "100%", backgroundColor: "#c4c4c4", flexShrink: 0, overflow: "hidden", borderRadius: "24px" }}>
        {testimonial.img && (
          <img 
            src={testimonial.img} 
            alt={testimonial.name} 
            referrerPolicy="no-referrer"
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "24px" }}
          />
        )}
      </div>
      <div style={{ flex: 1, padding: "62px 40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 26V15.6C0 10.92 1.08 7.28 3.24 4.68C5.48 2.08 8.6 0.4 12.6 0L13.8 4.2C11.4 4.68 9.52 5.72 8.16 7.32C6.88 8.92 6.2 10.84 6.12 13.08H12.6V26H0ZM18.6 26V15.6C18.6 10.92 19.68 7.28 21.84 4.68C24.08 2.08 27.2 0.4 31.2 0L32.4 4.2C30 4.68 28.12 5.72 26.76 7.32C25.48 8.92 24.8 10.84 24.72 13.08H31.2V26H18.6Z" fill="#1e1e1e"/>
            </svg>
            <p style={{ fontFamily: font, fontWeight: 600, fontSize: 18, lineHeight: "26px", letterSpacing: -0.09, color: "#1e1e1e", margin: 0 }}>{testimonial.quote}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={{ fontFamily: font, fontWeight: 600, fontSize: 24, lineHeight: "32px", letterSpacing: -0.48, color: "#1e1e1e" }}>{testimonial.name}</span>
            <span style={{ fontFamily: font, fontWeight: 500, fontSize: 16, lineHeight: "26px", letterSpacing: -0.08, color: "#5d5d5d" }}>{testimonial.role}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Home(): React.JSX.Element {
  return (
    <div style={{ fontFamily: font, overflowX: "hidden" }}>
      {/* Hero */}
      <section style={{ backgroundColor: "#f3f3f3", padding: "100px 0 120px", display: "flex", flexDirection: "column", gap: 80, overflow: "hidden" }}>
        <div style={{ display: "flex", padding: "0 40px", gap: 10, alignItems: "flex-end", justifyContent: "center", maxWidth: 1440, margin: "0 auto", width: "100%" }}>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ fontWeight: 600, fontSize: 72, lineHeight: "72px", letterSpacing: -2.16, color: "#1e1e1e", maxWidth: 869, margin: 0 }}
          >
            Better products and services start with understanding people.
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}
          >
            <Link to={{ pathname: "/", hash: "#contact" }} style={{ textDecoration: "none" }}>
              <CTAButton label="Get in touch" />
            </Link>
          </motion.div>
        </div>

        {/* Ticker Section */}
        <div style={{ width: "100%", overflow: "hidden" }}>
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            style={{ display: "flex", gap: 24, paddingLeft: 24, width: "max-content" }}
          >
            {[...Array(2)].map((_, listIdx) => (
              <React.Fragment key={listIdx}>
                {[
                  { src: "https://raw.githubusercontent.com/gbunmi/images/main/Hero%201.jpg", w: 454, h: 451, mt: 0 },
                  { src: "https://raw.githubusercontent.com/gbunmi/images/main/Hero%202.jpg", w: 523, h: 404, mt: 30 },
                  { src: "https://raw.githubusercontent.com/gbunmi/images/main/Hero%203.png", w: 431, h: 460, mt: -10 },
                  { w: 490, h: 420, mt: 20 },
                  { w: 510, h: 480, mt: -20 },
                  { w: 460, h: 440, mt: 40 }
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
        style={{ padding: "80px 0" }}
      >
        <div style={{ maxWidth: 1440, margin: "0 auto", width: "100%", padding: "0 40px", display: "flex", flexDirection: "column", gap: 80 }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {["Research", "Strategy", "Design"].map((p, i) => (
              <motion.div 
                key={p} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                style={{ flex: 1, display: "flex", alignItems: "center", gap: 12 }}
              >
                <div style={{ width: 8, height: 40, backgroundColor: "rgba(255,255,255,0.7)" }} />
                <span style={{ fontWeight: 600, fontSize: 48, lineHeight: "54px", letterSpacing: -1.44, color: "white" }}>{p}</span>
              </motion.div>
            ))}
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontWeight: 600, fontSize: 24, lineHeight: "32px", letterSpacing: -0.48, color: "white", maxWidth: 443, margin: 0 }}
          >
            Working with organizations across industries, from the first research question through design and delivery.
          </motion.p>
        </div>
      </motion.section>

      {/* Services Context */}
      <section style={{ backgroundColor: "#f3f3f3", padding: "120px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", width: "100%", padding: "0 40px", display: "flex", flexDirection: "column", gap: 80 }}>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ fontWeight: 700, fontSize: 56, lineHeight: "48px", letterSpacing: -1.68, color: "#1e1e1e", textAlign: "center", margin: 0 }}
          >
            The Right help at any stage
          </motion.h2>
          <div style={{ display: "flex", gap: 24 }}>
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
      <section style={{ backgroundColor: "#d73a3b", padding: "120px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", width: "100%", padding: "0 40px", display: "flex", flexDirection: "column", gap: 80 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <motion.h2 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={{ fontWeight: 700, fontSize: 56, lineHeight: "48px", letterSpacing: -1.68, color: "white", margin: 0 }}
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
                20/20 Digital was founded in 2017 and has worked with organizations across industries that include financial services, healthcare, government, technology, legal, education, startups, and travel & tourism.
              </motion.p>
            </div>
            <Link to="/about" style={{ width: "fit-content" }}>
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "white", color: "#d73a3b" }}
                whileTap={{ scale: 0.95 }}
                style={{ backgroundColor: "transparent", color: "white", border: "2px solid white", borderRadius: 12, padding: "12px 16px", fontWeight: 600, fontSize: 14, cursor: "pointer", alignSelf: "flex-start", fontFamily: font, transition: "background-color 0.2s, color 0.2s" }}
              >
                Learn more
              </motion.button>
            </Link>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ 
              height: 545, 
              borderRadius: "24px", 
              overflow: "hidden", 
              backgroundColor: "#c4c4c4",
              transform: "translateZ(0)",
              WebkitMaskImage: "-webkit-radial-gradient(white, black)"
            }}
          >
            <img 
              src="https://raw.githubusercontent.com/gbunmi/images/main/About%20us%20(2).jpg" 
              alt="Who we are" 
              referrerPolicy="no-referrer"
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "24px" }}
            />
          </motion.div>
        </div>
      </section>

      {/* Works Section */}
      <section style={{ backgroundColor: "#f3f3f3", padding: "120px 0 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", width: "100%", padding: "0 40px", display: "flex", flexDirection: "column", gap: 80 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 80 }}>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ fontWeight: 700, fontSize: 56, lineHeight: "48px", letterSpacing: -1.68, color: "#1e1e1e", margin: 0 }}
            >
              Featured Works
            </motion.h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 64, alignItems: "center" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 24, width: "100%" }}>
                {works.map((w, i) => <React.Fragment key={i}><WorkCard work={w} /></React.Fragment>)}
              </div>
              <Link to="/works">
                <motion.button 
                  whileHover={{ scale: 1.02, backgroundColor: "#1e1e1e", color: "white" }}
                  whileTap={{ scale: 0.98 }}
                  style={{ backgroundColor: "transparent", color: "#1e1e1e", border: "2px solid rgba(0,0,0,0.6)", borderRadius: 12, padding: 16, fontWeight: 600, fontSize: 16, letterSpacing: -0.32, cursor: "pointer", fontFamily: font, transition: "all 0.2s" }}
                >
                  See all works
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ backgroundColor: "#f3f3f3", padding: "120px 0", display: "flex", flexDirection: "column", gap: 80, overflow: "hidden" }}>
        <div style={{ display: "flex", justifyContent: "center", padding: "0 40px", maxWidth: 1440, margin: "0 auto", width: "100%" }}>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontWeight: 700, fontSize: 56, lineHeight: "48px", letterSpacing: -1.68, color: "#1e1e1e", margin: 0, textAlign: "center" }}
          >
            What people say about us
          </motion.h2>
        </div>
        <div style={{ width: "100%", overflow: "hidden" }}>
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 60, ease: "linear", repeat: Infinity }}
            style={{ display: "flex", gap: 40, width: "max-content", paddingLeft: 40 }}
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
