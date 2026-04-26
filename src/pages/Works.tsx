import { useEffect, useState, type FC } from 'react';
import { motion } from 'motion/react';
import './Works.css';

/* =============================================================================
   20/20 Digital — Works page
   Faithful build of Figma node 46:425 of file 0GqFHHV3PpalVzSKo9R7YJ.

   Same nav / contact / footer system as the About and Services pages.
   Drop your assets into the constants below and the page renders end to end.
   ============================================================================= */

// ---- Asset slots ------------------------------------------------------------
const LOGO_DARK_URL = 'https://raw.githubusercontent.com/gbunmi/logolita/main/Frame%2049%20(3).svg'; // small wordmark in nav
const LOGO_FOOTER_URL = 'https://raw.githubusercontent.com/gbunmi/logolita/main/Frame%2049%20(3).svg'; // wordmark in footer

type WorkId = 'datolite-1' | 'burlington-1' | 'datolite-2' | 'burlington-2';
const WORK_IMAGES: Record<WorkId, string> = {
  'datolite-1': 'https://raw.githubusercontent.com/gbunmi/images/main/Work%201.jpg',
  'burlington-1': 'https://raw.githubusercontent.com/gbunmi/images/main/Work%203.jpg',
  'datolite-2': 'https://raw.githubusercontent.com/gbunmi/images/main/Work%202.jpg',
  'burlington-2': 'https://raw.githubusercontent.com/gbunmi/images/main/Work%203.jpg',
};

// One avatar per testimonial. Same person in this design, but kept per-entry
// so it's trivial to swap to different testimonials later.
const TESTIMONIAL_AVATARS: Record<WorkId, string> = {
  'datolite-1': 'https://raw.githubusercontent.com/gbunmi/images/main/Frame%2017%20(1).jpg',
  'burlington-1': 'https://raw.githubusercontent.com/gbunmi/images/main/Frame%2017%20(1).jpg',
  'datolite-2': 'https://raw.githubusercontent.com/gbunmi/images/main/Frame%2017%20(1).jpg',
  'burlington-2': 'https://raw.githubusercontent.com/gbunmi/images/main/Frame%2017%20(1).jpg',
};

// ---- Data -------------------------------------------------------------------
type Work = {
  id: WorkId;
  year: string;
  title: string;
  description: string;
  tags: string[];
  testimonial: {
    quote: string;
    name: string;
    role: string;
  };
};

const SHARED_DESCRIPTION =
  'PulseCart is a smart grocery shopping experience that adapts to users\u2019 habits, budgets, and timing. Instead of static lists, it predicts what you\u2019ll need based on your past purchases, suggests optimized shopping routes inside stores, and adjusts recommendations in real time based on price changes and availability.';

const SHARED_TAGS = ['HEALTH TECH', 'UX DESIGN', 'DIGITAL STRATEGY'];

const SHARED_TESTIMONIAL = {
  quote:
    "We've worked with Jamie on many projects and consider him an arm's length extension of our team. He's facilitated workshops and training, led product research, and worked directly with our agency and technology partners.",
  name: 'Paul Paruch',
  role: 'Vice President Digital & Payments, Atlantic Central',
};

const WORKS: Work[] = [
  {
    id: 'datolite-1',
    year: '2024',
    title: 'Datolite',
    description: SHARED_DESCRIPTION,
    tags: SHARED_TAGS,
    testimonial: SHARED_TESTIMONIAL,
  },
  {
    id: 'burlington-1',
    year: '2024',
    title: 'Burlington',
    description: SHARED_DESCRIPTION,
    tags: SHARED_TAGS,
    testimonial: SHARED_TESTIMONIAL,
  },
  {
    id: 'datolite-2',
    year: '2024',
    title: 'Datolite',
    description: SHARED_DESCRIPTION,
    tags: SHARED_TAGS,
    testimonial: SHARED_TESTIMONIAL,
  },
  {
    id: 'burlington-2',
    year: '2024',
    title: 'Burlington',
    description: SHARED_DESCRIPTION,
    tags: SHARED_TAGS,
    testimonial: SHARED_TESTIMONIAL,
  },
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

const Tag: FC<{ children: string }> = ({ children }) => (
  <span className="tag">{children}</span>
);

// Inline open-quote glyph used at the top of each testimonial.
const QuoteMark: FC = () => (
  <svg width="16" height="13" viewBox="0 0 16 13" aria-hidden="true">
    <path
      d="M0 13V8.4Q0 5.6 1.4 3.4 2.8 1.2 5.4 0v3.5Q4 4.2 3.3 5.5q-.7 1.3-.6 2.5h2.7V13H0Zm9 0V8.4q0-2.8 1.4-5T15.8 0v3.5q-1.4.7-2.1 2-.7 1.3-.6 2.5h2.7V13H9Z"
      fill="#1e1e1e"
    />
  </svg>
);

// ---- Sections ---------------------------------------------------------------
const Nav: FC = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a className="nav__logo" href="#top" aria-label="20/20 Digital home">
          <ImgSlot src={LOGO_DARK_URL} label="20/20" className="nav__logo-mark" />
        </a>
        <nav className="nav__links" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#works">Works</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="nav__cta-wrap">
          <button className="btn-primary btn-primary--sm" type="button">
            Get in touch
          </button>
        </div>
      </div>
    </header>
  );
};

const Hero: FC = () => (
  <section className="hero" id="top">
    <div className="hero__copy">
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="display-xl"
      >
        Works
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
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformOrigin: "left" }}
      className="hero__divider" 
    />
  </section>
);

const WorkEntry: FC<{ work: Work; isLast?: boolean }> = ({ work, isLast }) => (
  <div className="work-entry">
    <motion.article 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="work-card"
    >
      <div className="work-card__media">
        <ImgSlot
          src={WORK_IMAGES[work.id]}
          label={`${work.title} cover`}
          className="work-card__img"
        />
      </div>
      <div className="work-card__body">
        <div className="work-card__head">
          <Tag>{work.year}</Tag>
          <h2 className="work-card__title">{work.title}</h2>
        </div>
        <p className="work-card__desc">{work.description}</p>
        <div className="work-card__tags">
          {work.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>
    </motion.article>

    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="testimonial"
    >
      <div className="testimonial__inner">
        <div className="testimonial__quote-block">
          <QuoteMark />
          <p className="testimonial__quote">{work.testimonial.quote}</p>
        </div>
        <div className="testimonial__byline">
          <ImgSlot
            src={TESTIMONIAL_AVATARS[work.id]}
            label="avatar"
            className="testimonial__avatar"
          />
          <div className="testimonial__attrib">
            <div className="testimonial__name">{work.testimonial.name}</div>
            <div className="testimonial__role">{work.testimonial.role}</div>
          </div>
        </div>
      </div>
    </motion.div>

    {!isLast && <div className="work-entry__divider" />}
  </div>
);

const Contact: FC = () => (
  <section className="contact" id="contact">
    <div className="contact__copy">
      <h2 className="display-xxl">Let&rsquo;s have a conversation</h2>
      <p className="contact__lede">
        Whether you have a project ready or just want to talk something through, get in touch.
        You&rsquo;ll hear back within one business day.
      </p>
    </div>
    <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
      <div className="contact__fields">
        <input className="field" type="text" placeholder="Your name" />
        <input className="field" type="email" placeholder="Your email" />
        <textarea className="field field--area" placeholder="Leave a message" rows={6} />
      </div>
      <button className="btn-primary btn-primary--lg" type="submit">
        Send
      </button>
    </form>
  </section>
);

const Footer: FC = () => (
  <footer className="footer" id="footer">
    <div className="footer__top">
      <div className="footer__col">
        <div className="footer__heading">Reach us</div>
        <ul>
          <li>Instagram</li>
          <li>LinkedIn</li>
          <li>Behance</li>
          <li>Email</li>
        </ul>
      </div>
      <div className="footer__center">
        <ImgSlot src={LOGO_FOOTER_URL} label="20/20 Digital" className="footer__logo" />
      </div>
      <div className="footer__col footer__col--right">
        <div className="footer__heading">Navigation</div>
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Experience</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
    <div className="footer__divider" />
    <div className="footer__meta">
      <span>&copy; 2026 20/20 Digital</span>
      <button
        type="button"
        className="footer__back"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Back to top
      </button>
      <span className="footer__privacy">Privacy Policy</span>
    </div>
  </footer>
);

// ---- Page -------------------------------------------------------------------
const WorksPage: FC = () => (
  <div className="works-page">
    <main>
      <Hero />
      <section className="works" id="works">
        <div className="works__inner">
          {WORKS.map((w, i) => (
            <WorkEntry key={w.id} work={w} isLast={i === WORKS.length - 1} />
          ))}
        </div>
      </section>
      <Contact />
    </main>
    <Footer />
  </div>
);

export default WorksPage;
