import { type FC, type ReactNode, useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useAnimationFrame, useMotionValue } from 'motion/react';
import './About.css';
import { ContactSection, Footer } from '../components/SharedUI';

// ---- Asset slots: replace with your imports / URLs ---------------------------
const LOGO_LIGHT_URL = 'https://raw.githubusercontent.com/gbunmi/logolita/main/Frame%2049%20(3).svg'; // big wordmark above the bio
const HERO_IMAGE_URL = 'https://raw.githubusercontent.com/gbunmi/images/main/About%20us%20(2).jpg'; // boardroom / meeting photo
const FOUNDER_IMAGE_URL = 'https://raw.githubusercontent.com/gbunmi/images/main/images.jpg'; // Jamie Gerrard photo

// ---- Data -------------------------------------------------------------------
type FocusArea = { n: string; title: string; copy: string };

const FOCUS_AREAS: FocusArea[] = [
  {
    n: '01',
    title: 'User Experience',
    copy: 'We design digital products that feel natural, focusing on how people think and act to remove friction.',
  },
  {
    n: '02',
    title: 'Customer Experience',
    copy: 'Mapping the entire journey to find the gaps between what you promise and what customers receive.',
  },
  {
    n: '03',
    title: 'Digital Products',
    copy: 'Building scalable software solutions that balance high-level strategy with pixel-perfect execution.',
  },
  {
    n: '04',
    title: 'Service Experiences',
    copy: 'Bridging the divide between physical and digital service points for a unified brand experience.',
  },
  {
    n: '05',
    title: 'Digital Strategy',
    copy: 'Helping organizations navigate complex digital transformations with research-backed decisions.',
  },
  {
    n: '06',
    title: 'Employee Experience',
    copy: 'Optimizing internal tools and workflows to empower your team to deliver their best work.',
  },
];

type Stat = { value: string; label: string };

const STATS: Stat[] = [
  { value: '25+', label: 'Years Experience' },
  { value: '150+', label: 'Projects Delivered' },
  { value: '40+', label: 'Client Partners' },
  { value: '12', label: 'Core Industries' },
];

const SERVICE_TAGS = [
  'Team & Leadership Advisory',
  'Product Strategy & Design',
  'Customer & Product Research',
  'Interim UX Leadership',
  'Workshops & Training',
  'Service Design',
  'Usability Testing',
];

type ExperienceRow = { role: string; company: string; period: string };

const EXPERIENCE: ExperienceRow[] = [
  { role: 'Principal Consultant', company: '20/20 Digital', period: '2017 — Present' },
  { role: 'Principal, Service Design', company: 'Davis Pier Consulting', period: '2017' },
  { role: 'Director, Product & Marketing', company: 'aioTV', period: '2016 — 2017' },
  { role: 'Director, Digital Strategy & User Experience', company: 'VERB Interactive', period: '2014 — 2016' },
  { role: 'Strategy, Development & Production', company: 'VERB Interactive', period: '2005 — 2013' },
  { role: 'Branch Operations Supervisor', company: 'Halifax Public Libraries', period: '2004 — 2005' },
  { role: 'Library Assistant', company: 'Halifax Public Libraries', period: '1998 — 2004' },
];

// ---- Reusable bits ----------------------------------------------------------
type ImgSlotProps = { src?: string; alt?: string; label: string; className?: string };
const ImgSlot: FC<ImgSlotProps> = ({ src, alt, label, className }) =>
  src ? (
    <img src={src} alt={alt ?? label} className={className} />
  ) : (
    <div className={`slot ${className ?? ''}`} aria-label={label}>
      <span>{label}</span>
    </div>
  );

const SERVICE_COLORS = [
  '#d73a3b', // Deep Red
  '#fbbf24', // Amber/Yellow
  '#f97316', // Orange
  '#ec4899', // Pink
  '#dc2626', // Bright Red
  '#ea580c', // Dark Orange
  '#f43f5e', // Rose
];

const Pill: FC<{ children: ReactNode; color?: string }> = ({ children, color }) => (
  <div className="pill">
    <span className="pill__dot" aria-hidden="true" style={{ backgroundColor: color ?? 'var(--primary)' }} />
    <span className="pill__label">{children}</span>
  </div>
);

// ---- Sections ---------------------------------------------------------------
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

const Hero: FC = () => (
  <section className="hero" id="top">
    <motion.h1 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="display-l"
    >
      Making better products by fixing what&rsquo;s behind them.
    </motion.h1>
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="lede"
    >
      From product flows to team dynamics, we uncover the friction points holding you back and
      work with you to resolve them in a way that lasts.
    </motion.p>
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="hero__image-wrap"
    >
      <ImgSlot src={HERO_IMAGE_URL} label="Hero image" className="hero__image" />
    </motion.div>
  </section>
);

const Focus: FC = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section className="focus" id="services">
    <div className="container">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="display-m focus__title"
      >
        What we focus on
      </motion.h2>
      <div className="focus__grid">
        {FOCUS_AREAS.map((f, i) => (
          <motion.article 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -8, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
            onMouseEnter={() => window.dispatchEvent(new CustomEvent("cursorChange", { detail: { active: true } }))}
            onMouseLeave={() => window.dispatchEvent(new CustomEvent("cursorChange", { detail: { active: false } }))}
            style={{ cursor: isMobile ? "pointer" : "none" }}
            key={f.n} 
            className="focus-card"
          >
            <div className="focus-card__inner">
              <span className="focus-card__num-top">{f.n}</span>
              <div className="focus-card__body">
                <h3 className="focus-card__title">{f.title}</h3>
                <p className="focus-card__copy">{f.copy}</p>
              </div>
            </div>
            <span className="focus-card__num-ghost" aria-hidden="true">
              {f.n}
            </span>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
  );
};

const Stats: FC = () => (
  <section className="stats">
    <div className="container">
      <div className="stats__row">
        {STATS.map((s, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.1, color: "var(--primary)" }}
            key={i} 
            className="stat"
          >
            <div className="stat__value">{s.value}</div>
            <div className="stat__label">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Services: FC = () => {
  const row1 = SERVICE_TAGS.slice(0, 4);
  const row2 = SERVICE_TAGS.slice(4, 7);

  return (
    <section className="services">
      <div className="container">
        <div className="services__grid">
          <div className="services__row services__row--top">
            {row1.map((t, i) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                key={i}
              >
                <Pill color={SERVICE_COLORS[i]}>{t}</Pill>
              </motion.div>
            ))}
          </div>
          <div className="services__row services__row--bottom">
            {row2.map((t, i) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 4) * 0.05, duration: 0.4 }}
                key={i}
              >
                <Pill color={SERVICE_COLORS[i + 4]}>{t}</Pill>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Founder: FC = () => (
  <section className="founder">
    <div className="container">
      <div className="founder__divider" />
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="display-m founder__title"
      >
        Meet our founder
      </motion.h2>
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="founder__card"
      >
        <div className="founder__photo">
          <ImgSlot src={FOUNDER_IMAGE_URL} label="Founder photo" className="founder__img" />
          <div className="founder__name-block">
            <div className="founder__name">Jamie Gerrard</div>
            <div className="founder__role">Principal Consultant</div>
          </div>
        </div>
        <div className="founder__experience">
          {EXPERIENCE.map((row, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
              whileHover={{ x: 10, color: "var(--primary)" }}
              className="exp-row"
            >
              <div>
                <div className="exp-row__role">{row.role}</div>
                <div className="exp-row__company">{row.company}</div>
              </div>
              <div className="exp-row__period">{row.period}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

const Bio: FC = () => (
  <section className="bio" id="about">
    <div className="container">
      <div className="bio__inner">
        <ImgSlot src={LOGO_LIGHT_URL} label="20/20 Digital" className="bio__logo" />
        <div className="bio__copy">
          <p className="bio__lede">
            25 years working with organizations to understand what&rsquo;s actually happening with their digital products, service experiences, and the teams behind them.
          </p>
          <p>
            20/20 Digital was founded in 2017 and has worked with organizations across industries that
            include financial services, healthcare, government, technology, legal, education,
            startups, and travel &amp; tourism.
          </p>
          <p>
            Before starting 20/20 Digital, nearly eleven years at VERB Interactive built the
            foundation, growing from front-end developer to Director of User Experience and senior
            leadership. A year as Director of Product and Marketing at aioTV added product ownership,
            team leadership, and marketing to the mix. Building things, not just advising on them, is
            what shapes how every project gets done.
          </p>
          <p>
            Six years in public library operations covered everything from working directly with the
            public and providing research assistance to supervising teams and managing budgets. That
            range of experience built the organizational and people skills that inform everything
            today.
          </p>
          <p>
            Working across all levels of an organization is intentional, from executives setting
            direction to managers navigating delivery and the people closest to it.
          </p>
        </div>
      </div>
    </div>
  </section>
);

type TalkRow = { title: string; event: string; year: string };

const TALKS: TalkRow[] = [
  { title: "Creating Memorable Experiences", event: "Volta, Community Event", year: "2026" },
  { title: "The Human Side of Tech", event: "Atlantic Tech Summit", year: "2025" },
  { title: "Responsible AI in the Workplace", event: "Private, Senior Communication Leaders", year: "2025" },
  { title: "Can You Fix Our UX?", event: "Ignite, Marketing Your Startup", year: "2025" },
  { title: "The Business of UX", event: "Ignite, Marketing Your Startup", year: "2024" }
];

const TICKER_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=800&auto=format&fit=crop',
    alt: 'Leading a main stage keynote presentation at a global design summit'
  },
  {
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop',
    alt: 'High-attendance presentation auditorium hosting UX strategy talks'
  },
  {
    src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop',
    alt: 'Bright, premium digital leadership summit event'
  },
  {
    src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop',
    alt: 'Interactive workshop session on digital product experience'
  },
  {
    src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop',
    alt: 'Co-designing user interfaces with workshop attendees'
  },
  {
    src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop',
    alt: 'Jamie Gerrard speaking live on audience panel engagement'
  },
  {
    src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop',
    alt: 'Keynote presentation slides on design system scalability'
  },
  {
    src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop',
    alt: 'Executive roundtable on responsible product governance'
  }
];

const RecentTalks: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position of the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Base auto-scroll value (percentage value from 0 to -50)
  const baseX = useMotionValue(0);

  // Scroll factor adds up to a subtle shift as the page scrolls
  const rawScrollFactor = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const scrollFactor = useSpring(rawScrollFactor, { stiffness: 60, damping: 20, mass: 0.1 });

  // Update baseX on each animation frame for auto movement
  useAnimationFrame((time, delta) => {
    // 50% in 50 seconds => 50 / 50000 = 0.001 % per ms
    const speed = 0.001 * delta;
    let newX = baseX.get() - speed;
    if (newX <= -50) {
      newX = newX + 50;
    }
    baseX.set(newX);
  });

  // Combine baseX and scrollFactor safely, wrapping inside [-50, 0] range
  const x = useTransform([baseX, scrollFactor], ([latestBaseVal, latestScrollFactor]) => {
    let total = (latestBaseVal as number) + (latestScrollFactor as number);
    while (total <= -50) {
      total += 50;
    }
    while (total > 0) {
      total -= 50;
    }
    return `${total}%`;
  });

  return (
    <section className="talks" id="talks" ref={containerRef}>
      <div className="container talks__container-top">
        <div className="talks__divider" />
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="display-m talks__title"
        >
          Recent Talks
        </motion.h2>
      </div>

      <div className="talks__ticker-container">
        <div className="talks__ticker">
          <motion.div className="talks__ticker-track" style={{ x }}>
            {TICKER_IMAGES.map((img, i) => (
              <div className="talks__ticker-item" key={`orig-${i}`}>
                <img src={img.src} alt={img.alt} referrerPolicy="no-referrer" />
              </div>
            ))}
            {TICKER_IMAGES.map((img, i) => (
              <div className="talks__ticker-item" key={`dup-${i}`}>
                <img src={img.src} alt={img.alt} referrerPolicy="no-referrer" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="container talks__container-bottom">
        <div className="talks__list">
          {TALKS.map((row, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ x: 10, color: "var(--primary)" }}
              className="talk-row"
            >
              <div>
                <div className="talk-row__title">{row.title}</div>
                <div className="talk-row__event">{row.event}</div>
              </div>
              <div className="talk-row__year">{row.year}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ---- Page -------------------------------------------------------------------
const About: FC = () => (
  <div className="about-page">
    <main>
      <Hero />
      <Focus />
      <Stats />
      <Services />
      <RecentTalks />
      <Founder />
      <Bio />
      <ContactSection />
      <Footer />
    </main>
  </div>
);

export default About;
