import * as React from "react";
import { motion } from "motion/react";
import { ContactSection, Footer, Tag } from "../components/SharedUI";

const font = "'Instrument Sans', sans-serif";

interface WorkItemProps {
  year: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
    avatar: string;
  };
}

const ProjectSection: React.FC<WorkItemProps> = ({ year, title, description, tags, image, testimonial }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ marginBottom: 120 }}
    >
      {/* Main Project Card */}
      <div style={{ 
        backgroundColor: "white", 
        borderRadius: 24, 
        padding: "48px", 
        display: "grid", 
        gridTemplateColumns: "1fr 1fr", 
        gap: 64, 
        boxShadow: "0 20px 40px rgba(0,0,0,0.02)",
        marginBottom: 48
      }}>
        {/* Project Image */}
        <div style={{ 
          borderRadius: 24, 
          overflow: "hidden", 
          aspectRatio: "4/3", 
          backgroundColor: "#c4c4c4",
          transform: "translateZ(0)",
          WebkitMaskImage: "-webkit-radial-gradient(white, black)"
        }}>
          {image && (
            <img 
              src={image} 
              alt={title} 
              referrerPolicy="no-referrer"
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 24 }}
            />
          )}
        </div>

        {/* Project Content */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 32 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: "#a1a1a1", letterSpacing: "0.05em" }}>{year}</span>
            <h2 style={{ fontSize: 48, fontWeight: 700, color: "#1e1e1e", margin: 0, letterSpacing: "-1.44px" }}>{title}</h2>
          </div>
          <p style={{ fontSize: 18, lineHeight: "28px", color: "#5d5d5d", margin: 0 }}>
            {description}
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {tags.map((tag, i) => <Tag label={tag} key={i} />)}
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div style={{ padding: "0 48px", maxWidth: 900 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <div style={{ position: "relative" }}>
            <span style={{ 
              position: "absolute", 
              left: -40, 
              top: -10, 
              fontSize: 64, 
              fontFamily: "serif", 
              color: "#d73a3b", 
              opacity: 0.3,
              lineHeight: 1
            }}>“</span>
            <p style={{ fontSize: 18, lineHeight: "26px", color: "#1e1e1e", fontStyle: "italic", margin: 0 }}>
              {testimonial.quote}
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ 
              width: 48, 
              height: 48, 
              borderRadius: 12, 
              overflow: "hidden", 
              backgroundColor: "#c4c4c4",
              transform: "translateZ(0)",
              WebkitMaskImage: "-webkit-radial-gradient(white, black)"
            }}>
              {testimonial.avatar && (
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  referrerPolicy="no-referrer"
                  style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 12 }}
                />
              )}
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 16, fontWeight: 700, color: "#1e1e1e" }}>{testimonial.author}</span>
              <span style={{ fontSize: 14, color: "#5d5d5d" }}>{testimonial.role}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Works(): React.JSX.Element {
  const worksData: WorkItemProps[] = [
    {
      year: "2024",
      title: "Datolite",
      description: "PulseCart is a smart grocery shopping experience that adapts to users' habits, budgets, and timing. Instead of static lists, it predicts what you'll need based on your past purchases, suggests optimized shopping routes inside stores, and adjusts recommendations in real time based on price changes and availability.",
      tags: ["HEALTH TECH", "UX DESIGN", "DIGITAL STRATEGY"],
      image: "https://picsum.photos/seed/datolite-1/1200/900",
      testimonial: {
        quote: "We've worked with Jamie on many projects and consider him an arm's length extension of our team. He's facilitated workshops and training, led product research, and worked directly with our agency and technology partners.",
        author: "Paul Paruch",
        role: "Vice President Digital & Payments, Atlantic Central",
        avatar: "https://i.pravatar.cc/150?u=paul1"
      }
    },
    {
      year: "2024",
      title: "Burlington",
      description: "PulseCart is a smart grocery shopping experience that adapts to users' habits, budgets, and timing. Instead of static lists, it predicts what you'll need based on your past purchases, suggests optimized shopping routes inside stores, and adjusts recommendations in real time based on price changes and availability.",
      tags: ["HEALTH TECH", "UX DESIGN", "DIGITAL STRATEGY"],
      image: "https://picsum.photos/seed/burlington-1/1200/900",
      testimonial: {
        quote: "We've worked with Jamie on many projects and consider him an arm's length extension of our team. He's facilitated workshops and training, led product research, and worked directly with our agency and technology partners.",
        author: "Paul Paruch",
        role: "Vice President Digital & Payments, Atlantic Central",
        avatar: "https://i.pravatar.cc/150?u=paul2"
      }
    },
    {
      year: "2024",
      title: "Datolite",
      description: "PulseCart is a smart grocery shopping experience that adapts to users' habits, budgets, and timing. Instead of static lists, it predicts what you'll need based on your past purchases, suggests optimized shopping routes inside stores, and adjusts recommendations in real time based on price changes and availability.",
      tags: ["HEALTH TECH", "UX DESIGN", "DIGITAL STRATEGY"],
      image: "https://picsum.photos/seed/datolite-2/1200/900",
      testimonial: {
        quote: "We've worked with Jamie on many projects and consider him an arm's length extension of our team. He's facilitated workshops and training, led product research, and worked directly with our agency and technology partners.",
        author: "Paul Paruch",
        role: "Vice President Digital & Payments, Atlantic Central",
        avatar: "https://i.pravatar.cc/150?u=paul3"
      }
    },
    {
      year: "2024",
      title: "Burlington",
      description: "PulseCart is a smart grocery shopping experience that adapts to users' habits, budgets, and timing. Instead of static lists, it predicts what you'll need based on your past purchases, suggests optimized shopping routes inside stores, and adjusts recommendations in real time based on price changes and availability.",
      tags: ["HEALTH TECH", "UX DESIGN", "DIGITAL STRATEGY"],
      image: "https://picsum.photos/seed/burlington-2/1200/900",
      testimonial: {
        quote: "We've worked with Jamie on many projects and consider him an arm's length extension of our team. He's facilitated workshops and training, led product research, and worked directly with our agency and technology partners.",
        author: "Paul Paruch",
        role: "Vice President Digital & Payments, Atlantic Central",
        avatar: "https://i.pravatar.cc/150?u=paul4"
      }
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
            Works
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

      {/* Projects List */}
      <section style={{ padding: "0 40px", maxWidth: 1440, margin: "0 auto" }}>
        {worksData.map((work, index) => (
          <ProjectSection key={index} {...work} />
        ))}
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}
