import { useEffect, useState, type FC } from 'react';
import { motion } from 'motion/react';
import './Blog.css';
import { ContactSection, Footer } from '../components/SharedUI';

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
    cover: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop',
    title: 'The Hidden Cost of UX Debt',
    excerpt:
      'Understanding how cutting corners in design today leads to significant operational friction and customer loss tomorrow.',
    date: 'February 12, 2026',
  },
  {
    id: 'a2',
    cover: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    title: 'Beyond the Feature List',
    excerpt:
      'Why successful digital products are defined by the problems they solve, not the number of features they ship.',
    date: 'January 28, 2026',
  },
  {
    id: 'a3',
    cover: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop',
    title: 'Designing for Trust',
    excerpt:
      'How transparency and ethical design patterns build long-term loyalty in financial and healthcare services.',
    date: 'January 15, 2026',
  },
  {
    id: 'a4',
    cover: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1000&auto=format&fit=crop',
    title: 'The Role of Research in Strategy',
    excerpt:
      'How qualitative insights transform abstract business goals into actionable roadmaps for growth.',
    date: 'December 10, 2025',
  },
  {
    id: 'a5',
    cover: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop',
    title: 'Facilitating Better Workshops',
    excerpt:
      'Techniques for breaking down silos and getting stakeholders aligned on a unified product vision.',
    date: 'November 22, 2025',
  },
  {
    id: 'a6',
    cover: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop',
    title: 'UX Leadership Readiness',
    excerpt:
      'Scaling a design team requires more than hiring talent—it requires building a culture of measurement and accountability.',
    date: 'November 5, 2025',
  },
  {
    id: 'a7',
    cover: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop',
    title: 'The Myth of the Perfect Launch',
    excerpt:
      'Why day one is actually day zero, and how to structure your team for iterative success post-release.',
    date: 'October 18, 2025',
  },
  {
    id: 'a8',
    cover: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
    title: 'Employee Experience Matters',
    excerpt:
      'The direct link between internal tool usability and the quality of your customer-facing service delivery.',
    date: 'September 30, 2025',
  },
  {
    id: 'a9',
    cover: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop',
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

// ---- Sections ---------------------------------------------------------------
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

const ArticleCard: FC<{ article: Article }> = ({ article }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <motion.a 
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
      }}
      onMouseEnter={() => window.dispatchEvent(new CustomEvent("cursorChange", { detail: { active: true } }))}
      onMouseLeave={() => window.dispatchEvent(new CustomEvent("cursorChange", { detail: { active: false } }))}
      style={{ cursor: isMobile ? "pointer" : "none" }}
      className="article-card" 
      href={article.href ?? '#'}
    >
    <div className="article-card__cover">
      <motion.div whileHover={{ scale: 1.05, filter: "blur(8px)" }} transition={{ duration: 0.6 }} style={{ height: "100%" }}>
        <ImgSlot
          src={article.cover}
          label="article cover"
          className="article-card__img"
          alt={article.title}
        />
      </motion.div>
    </div>
    <div className="article-card__body">
      <h3 className="article-card__title">{article.title}</h3>
      <p className="article-card__excerpt">{article.excerpt}</p>
      <p className="article-card__date">{article.date}</p>
    </div>
  </motion.a>
  );
};

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

// ---- Page -------------------------------------------------------------------
const Blog: FC = () => (
  <div className="blog-page">
    <main>
      <Hero />
      <Articles />
    </main>
    <ContactSection />
    <Footer />
  </div>
);

export default Blog;
