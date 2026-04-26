import { useEffect, useState, type FC } from 'react';
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
    title: '\u201CWe Need Our UX Fixed\u201D',
    excerpt:
      'When organizations come to me saying they need their UX fixed, that phrase is usually doing more work than they realize',
    date: 'March 13, 2026',
  },
  {
    id: 'a2',
    cover: '',
    title: '\u201CWe Need Our UX Fixed\u201D',
    excerpt:
      'When organizations come to me saying they need their UX fixed, that phrase is usually doing more work than they realize',
    date: 'March 13, 2026',
  },
  {
    id: 'a3',
    cover: '',
    title: '\u201CWe Need Our UX Fixed\u201D',
    excerpt:
      'When organizations come to me saying they need their UX fixed, that phrase is usually doing more work than they realize',
    date: 'March 13, 2026',
  },
  {
    id: 'a4',
    cover: '',
    title: '\u201CWe Need Our UX Fixed\u201D',
    excerpt:
      'When organizations come to me saying they need their UX fixed, that phrase is usually doing more work than they realize',
    date: 'March 13, 2026',
  },
  {
    id: 'a5',
    cover: '',
    title: '\u201CWe Need Our UX Fixed\u201D',
    excerpt:
      'When organizations come to me saying they need their UX fixed, that phrase is usually doing more work than they realize',
    date: 'March 13, 2026',
  },
  {
    id: 'a6',
    cover: '',
    title: '\u201CWe Need Our UX Fixed\u201D',
    excerpt:
      'When organizations come to me saying they need their UX fixed, that phrase is usually doing more work than they realize',
    date: 'March 13, 2026',
  },
  {
    id: 'a7',
    cover: '',
    title: '\u201CWe Need Our UX Fixed\u201D',
    excerpt:
      'When organizations come to me saying they need their UX fixed, that phrase is usually doing more work than they realize',
    date: 'March 13, 2026',
  },
  {
    id: 'a8',
    cover: '',
    title: '\u201CWe Need Our UX Fixed\u201D',
    excerpt:
      'When organizations come to me saying they need their UX fixed, that phrase is usually doing more work than they realize',
    date: 'March 13, 2026',
  },
  {
    id: 'a9',
    cover: '',
    title: '\u201CWe Need Our UX Fixed\u201D',
    excerpt:
      'When organizations come to me saying they need their UX fixed, that phrase is usually doing more work than they realize',
    date: 'March 13, 2026',
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
    <div className="hero__copy">
      <h1 className="display-xl">Latest Articles</h1>
      <p className="lede">
        From product flows to team dynamics, we uncover the friction points holding you back and
        work with you to resolve them in a way that lasts.
      </p>
    </div>
    <div className="hero__divider" />
  </section>
);

const ArticleCard: FC<{ article: Article }> = ({ article }) => (
  <a className="article-card" href={article.href ?? '#'}>
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
  </a>
);

const Articles: FC = () => (
  <section className="articles" id="articles">
    <div className="articles__grid">
      {ARTICLES.map((a) => (
        <ArticleCard key={a.id} article={a} />
      ))}
    </div>
  </section>
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
