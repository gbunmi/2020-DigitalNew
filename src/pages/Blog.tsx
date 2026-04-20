import * as React from "react";
import { motion } from "motion/react";
import { ContactSection, Footer } from "../components/SharedUI";

const font = "'Instrument Sans', sans-serif";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

const BlogCard: React.FC<BlogPost> = ({ title, excerpt, date, image }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
      style={{ display: "flex", flexDirection: "column", gap: 20, cursor: "pointer" }}
    >
      <div style={{ borderRadius: 20, overflow: "hidden", aspectRatio: "1.5/1", backgroundColor: "#c4c4c4" }} />
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <h3 style={{ fontSize: 24, fontWeight: 700, margin: 0, color: "#1e1e1e", letterSpacing: "-0.48px" }}>“{title}”</h3>
        <p style={{ fontSize: 16, lineHeight: "24px", color: "#5d5d5d", margin: 0 }}>{excerpt}</p>
        <span style={{ fontSize: 14, fontWeight: 500, color: "#a1a1a1" }}>{date}</span>
      </div>
    </motion.div>
  );
};

export default function Blog(): React.JSX.Element {
  const posts: BlogPost[] = [
    { title: "We Need Our UX Fixed", excerpt: "When organizations come to me saying they need their UX fixed, that phrase is usually doing more work than they realize.", date: "March 13, 2026", image: "https://picsum.photos/seed/workspace/600/400" },
    { title: "We Need Our UX Fixed", excerpt: "When organizations come to me saying they need their UX fixed, that phrase is usually doing more work than they realize.", date: "March 13, 2026", image: "https://picsum.photos/seed/setup/600/400" },
    { title: "We Need Our UX Fixed", excerpt: "When organizations come to me saying they need their UX fixed, that phrase is usually doing more work than they realize.", date: "March 13, 2026", image: "https://picsum.photos/seed/desk/600/400" },
    { title: "We Need Our UX Fixed", excerpt: "When organizations come to me saying they need their UX fixed, that phrase is usually doing more work than they realize.", date: "March 13, 2026", image: "https://picsum.photos/seed/retail/600/400" },
    { title: "We Need Our UX Fixed", excerpt: "When organizations come to me saying they need their UX fixed, that phrase is usually doing more work than they realize.", date: "March 13, 2026", image: "https://picsum.photos/seed/tech/600/400" },
    { title: "We Need Our UX Fixed", excerpt: "When organizations come to me saying they need their UX fixed, that phrase is usually doing more work than they realize.", date: "March 13, 2026", image: "https://picsum.photos/seed/robot/600/400" },
    { title: "We Need Our UX Fixed", excerpt: "When organizations come to me saying they need their UX fixed, that phrase is usually doing more work than they realize.", date: "March 13, 2026", image: "https://picsum.photos/seed/vision/600/400" },
    { title: "We Need Our UX Fixed", excerpt: "When organizations come to me saying they need their UX fixed, that phrase is usually doing more work than they realize.", date: "March 13, 2026", image: "https://picsum.photos/seed/watch/600/400" },
    { title: "We Need Our UX Fixed", excerpt: "When organizations come to me saying they need their UX fixed, that phrase is usually doing more work than they realize.", date: "March 13, 2026", image: "https://picsum.photos/seed/network/600/400" },
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
            Latest Articles
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

      {/* Grid Section */}
      <section style={{ padding: "0 40px 120px", maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "64px 40px" }}>
          {posts.map((post, i) => (
            <BlogCard key={i} {...post} />
          ))}
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}
