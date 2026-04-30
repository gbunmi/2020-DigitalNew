import { useEffect, useState, type FC } from 'react';
import { motion } from 'motion/react';
import './Blog.css';

/* =============================================================================
   20/20 Digital — Blog (Latest Articles) page
   Faithful build of Figma node 2027:414 of file 0GqFHHV3PpalVzSKo9R7YJ.

   Same nav / contact / footer system as the About, Services, and Works pages.
   The body is a 3-column grid of article cards. Drop your assets into the
   constants below and the page renders end to end.
   ============================================================================= */

// ---- Asset slots ------------------------------------------------------------
const LOGO_DARK_URL = 'https://raw.githubusercontent.com/gbunmi/logolita/main/Frame%2049%20(3).svg'; // small wordmark in nav
const LOGO_FOOTER_URL = 'https://raw.githubusercontent.com/gbunmi/logolita/main/Frame%2049%20(3).svg'; // wordmark in footer

// ---- Data -------------------------------------------------------------------
type Article = {
  id: string;
  cover: string; // image URL — empty string renders the slot placeholder
  title: string;
  excerpt: string;
  date: string;
  href?: string;
};

// The Figma uses the same title/excerpt/date for every card; this is clearly
// placeholder content. Each card has its own cover image. Fill in real titles
// and dates here when you have them.
const ARTICLES: Article[] = [
  {
    id: 'a1',
    cover: '',
    title: 'The Hidden Cost of UX Debt',
    excerpt:
      'Understanding how cutting corners in design today leads to significant operational friction and customer loss tomorrow.',
    date: 'February 12, 2026',
  },
  {
    id: 'a2',
    cover: '',
    title: 'Beyond the Feature List',
    excerpt:
      'Why successful digital products are defined by the problems they solve, not the number of features they ship.',
    date: 'January 28, 2026',
  },
  {
    id: 'a3',
    cover: '',
    title: 'Designing for Trust',
    excerpt:
      'How transparency and ethical design patterns build long-term loyalty in financial and healthcare services.',
    date: 'January 15, 2026',
  },
  {
    id: 'a4',
    cover: '',
    title: 'The Role of Research in Strategy',
    excerpt:
      'How qualitative insights transform abstract business goals into actionable roadmaps for growth.',
    date: 'December 10, 2025',
  },
  {
    id: 'a5',
    cover: '',
    title: 'Facilitating Better Workshops',
    excerpt:
      'Techniques for breaking down silos and getting stakeholders aligned on a unified product vision.',
    date: 'November 22, 2025',
  },
  {
    id: 'a6',
    cover: '',
    title: 'UX Leadership Readiness',
    excerpt:
      'Scaling a design team requires more than hiring talent—it requires building a culture of measurement and accountability.',
    date: 'November 5, 2025',
  },
  {
    id: 'a7',
    cover: '',
    title: 'The Myth of the Perfect Launch',
    excerpt:
      'Why day one is actually day zero, and how to structure your team for iterative success post-release.',
    date: 'October 18, 2025',
  },
  {
    id: 'a8',
    cover: '',
    title: 'Employee Experience Matters',
    excerpt:
      'The direct link between internal tool usability and the quality of your customer-facing service delivery.',
    date: 'September 30, 2025',
  },
  {
    id: 'a9',
    cover: '',
    title: 'Navigating Change Management',
    excerpt:
      'Helping large organizations transition to a modern, user-centric approach without losing institutional knowledge.',
    date: 'September 12, 2025',
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
    <motion.h1 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="display-xl"
    >
      Latest Articles
    </motion.h1>
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="lede"
    >
      Thinking aloud about product strategy, design ethics, and the organizational patterns that shape the digital landscape.
    </motion.p>
    <motion.div 
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformOrigin: "left" }}
      className="hero__divider" 
    />
  </section>
);

const ArticleCard: FC<{ article: Article }> = ({ article }) => (
  <motion.a 
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
    }}
    className="article-card" 
    href={article.href ?? '#'}
  >
    <div className="article-card__cover">
      <ImgSlot
        src={article.cover}
        label="article cover"
        className="article-card__img"
        alt={article.title}
      />
    </div>
    <div className="article-card__body">
      <h3 className="article-card__title">{article.title}</h3>
      <p className="article-card__excerpt">{article.excerpt}</p>
      <p className="article-card__date">{article.date}</p>
    </div>
  </motion.a>
);

const Articles: FC = () => (
  <section className="articles" id="articles">
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
      className="articles__grid"
    >
      {ARTICLES.map((a) => (
        <ArticleCard key={a.id} article={a} />
      ))}
    </motion.div>
  </section>
);

const Contact: FC = () => (
  <section className="contact" id="contact">
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="contact__copy"
    >
      <h2 className="display-xxl">Let&rsquo;s have a conversation</h2>
      <p className="contact__lede">
        Whether you have a project ready or just want to talk something through, get in touch.
        You&rsquo;ll hear back within one business day.
      </p>
    </motion.div>
    <motion.form 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="contact__form" 
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="contact__fields">
        <input className="field" type="text" placeholder="Your name" />
        <input className="field" type="email" placeholder="Your email" />
        <textarea className="field field--area" placeholder="Leave a message" rows={6} />
      </div>
      <button className="btn-primary btn-primary--lg" type="submit">
        Send
      </button>
    </motion.form>
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
const Blog: FC = () => (
  <>
    {/* <Nav /> component omitted to use global App navbar */}
    <main>
      <Hero />
      <Articles />
      <Contact />
    </main>
    <Footer />
  </>
);

export default Blog;
