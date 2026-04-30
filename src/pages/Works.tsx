import { useEffect, useState, type FC } from 'react';
import { motion } from 'motion/react';
import './Works.css';
import { ContactSection, Footer } from '../components/SharedUI';

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

const WORKS: Work[] = [
  {
    id: 'datolite-1',
    year: '2024',
    title: 'Datolite Intelligence',
    description: 'A complete overhaul of an enterprise legal tech platform. We analyzed the complex billing workflows of large law firms to design a streamlined interface that reduced data entry errors by 40% and improved reporting speed.',
    tags: ['LEGAL TECH', 'PRODUCT DESIGN', 'UX ARCHITECTURE'],
    testimonial: {
      quote: "Jamie's ability to dive into the deep complexities of our industry was impressive. He didn't just design a pretty interface; he rebuilt our workflow logic from the ground up.",
      name: 'Sarah Chen',
      role: 'Head of Product, Datolite',
    },
  },
  {
    id: 'burlington-1',
    year: '2023',
    title: 'Burlington Portal',
    description: 'Redesigning the citizen engagement platform for a municipal government. We focused on accessibility and intuitive information architecture to make essential services easy to find for all residents.',
    tags: ['GOVERNMENT', 'SERVICE DESIGN', 'ACCESSIBILITY'],
    testimonial: {
      quote: "The resident feedback since launch has been incredible. 20/20 Digital helped us turn a confusing legacy system into a modern, user-friendly service point.",
      name: 'Michael Ross',
      role: 'Director of IT, City of Burlington',
    },
  },
  {
    id: 'datolite-2',
    year: '2023',
    title: 'HealthPath Connect',
    description: 'A telehealth coordination tool designed for specialized care providers. We mapped the patient journey to identify friction points in booking and follow-ups, resulting in a 25% increase in patient retention.',
    tags: ['HEALTHCARE', 'USER RESEARCH', 'MOBILE APP'],
    testimonial: {
      quote: "Jamie worked directly with our clinical staff to understand the high-pressure environment they work in. The resulting designs are both functional and empathetic.",
      name: 'Dr. Elena Vance',
      role: 'Chief Medical Officer, HealthPath',
    },
  },
  {
    id: 'burlington-2',
    year: '2022',
    title: 'AdventureTravel Labs',
    description: 'Developing a bold digital strategy for a global tourism brand. We implemented a new booking flow that optimized for mobile-first users and introduced personalized travel recommendations.',
    tags: ['TRAVEL', 'STRATEGY', 'CONVERSION OPTIMIZATION'],
    testimonial: {
      quote: "An absolute extension of our team. 20/20 Digital led our technology partners through the transition with clarity and a relentless focus on the end customer.",
      name: 'Paul Paruch',
      role: 'VP Digital, AdventureTravel',
    },
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
const Hero: FC = () => (
  <section className="hero" id="top">
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
      A selection of recent partnerships where deep research and strategic design helped tackle complex organizational challenges and deliver measurable product success.
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
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default WorksPage;
