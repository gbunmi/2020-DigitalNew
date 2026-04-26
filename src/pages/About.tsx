import { type FC, type ReactNode } from 'react';
import { motion } from 'motion/react';
import './About.css';
import { ContactSection, Footer } from '../components/SharedUI';

// ---- Asset slots: replace with your imports / URLs ---------------------------
const LOGO_LIGHT_URL = 'https://raw.githubusercontent.com/gbunmi/logolita/main/Frame%2049%20(3).svg'; // big wordmark above the bio
const HERO_IMAGE_URL = 'https://raw.githubusercontent.com/gbunmi/images/main/About%20us%20(2).jpg'; // boardroom / meeting photo
const FOUNDER_IMAGE_URL = ''; // Jamie Gerrard photo

// ---- Data -------------------------------------------------------------------
type FocusArea = { n: string; title: string; copy: string };

const FOCUS_AREAS: FocusArea[] = [
  {
    n: '01',
    title: 'User Experience',
    copy: '20/20 Digital was founded in 2017 and has worked with organizations across industries that include financial',
  },
  {
    n: '02',
    title: 'Customer Experience',
    copy: '20/20 Digital was founded in 2017 and has worked with organizations across industries that include financial',
  },
  {
    n: '03',
    title: 'Digital Products',
    copy: '20/20 Digital was founded in 2017 and has worked with organizations across industries that include financial',
  },
  {
    n: '04',
    title: 'Service Experiences',
    copy: '20/20 Digital was founded in 2017 and has worked with organizations across industries that include financial',
  },
  {
    n: '05',
    title: 'Digital Strategy',
    copy: '20/20 Digital was founded in 2017 and has worked with organizations across industries that include financial',
  },
  {
    n: '06',
    title: 'Employee Experience',
    copy: '20/20 Digital was founded in 2017 and has worked with organizations across industries that include financial',
  },
];

type Stat = { value: string; label: string };

const STATS: Stat[] = [
  { value: '100', label: 'Projects' },
  { value: '98%', label: 'Client Retention' },
  { value: '24', label: 'Projects' },
  { value: '100', label: 'Projects' },
];

const SERVICE_TAGS = [
  'Team & Leadership Advisory',
  'Team & Leadership Advisory',
  'Product Strategy & Design',
  'Customer & Product Research',
  'Workshops & Training',
  'Service Design',
  'Usability Testing',
];

type ExperienceRow = { role: string; company: string; period: string };

const EXPERIENCE: ExperienceRow[] = [
  { role: 'Principal Consultant', company: '20/20 Digital', period: '2017 — Present' },
  { role: 'Principal Consultant', company: '20/20 Digital', period: '2017 — Present' },
  { role: 'Principal Consultant', company: '20/20 Digital', period: '2017 — Present' },
  { role: 'Principal Consultant', company: '20/20 Digital', period: '2017 — Present' },
  { role: 'Principal Consultant', company: '20/20 Digital', period: '2017 — Present' },
  { role: 'Principal Consultant', company: '20/20 Digital', period: '2017 — Present' },
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

const Pill: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="pill">
    <span className="pill__dot" aria-hidden="true" />
    <span className="pill__label">{children}</span>
  </div>
);

// ---- Sections ---------------------------------------------------------------
const Hero: FC = () => (
  <section className="hero" id="top">
    <div className="container">
      <div className="hero__copy">
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
      </div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="hero__image-wrap"
      >
        <ImgSlot src={HERO_IMAGE_URL} label="Hero image" className="hero__image" />
      </motion.div>
    </div>
  </section>
);

const Focus: FC = () => (
  <section className="focus" id="services">
    <div className="container">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
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

const Services: FC = () => (
  <section className="services">
    <div className="container">
      <div className="services__row">
        {SERVICE_TAGS.map((t, i) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            key={i}
          >
            <Pill key={i}>{t}</Pill>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Founder: FC = () => (
  <section className="founder">
    <div className="container">
      <div className="founder__divider" />
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
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
            <div key={i} className="exp-row">
              <div>
                <div className="exp-row__role">{row.role}</div>
                <div className="exp-row__company">{row.company}</div>
              </div>
              <div className="exp-row__period">{row.period}</div>
            </div>
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

// ---- Page -------------------------------------------------------------------
const About: FC = () => (
  <div className="about-page">
    <main>
      <Hero />
      <Focus />
      <Stats />
      <Services />
      <Founder />
      <Bio />
    </main>
    <ContactSection />
    <Footer />
  </div>
);

export default About;
