import { type FC } from 'react';
import { motion } from 'motion/react';
import './Services.css';
import { ContactSection, Footer } from '../components/SharedUI';

/* =============================================================================
   20/20 Digital — Services page
   Faithful build of Figma node 46:412 of file 0GqFHHV3PpalVzSKo9R7YJ.

   Reuses the same Instrument Sans + token palette as the About page so the
   two share a visual language. Drop your assets into the constants below.
   ============================================================================= */

// ---- Asset slots ------------------------------------------------------------
const LOGO_DARK_URL = 'https://raw.githubusercontent.com/gbunmi/logolita/main/Frame%2049%20(3).svg'; // small wordmark in nav
const LOGO_FOOTER_URL = 'https://raw.githubusercontent.com/gbunmi/logolita/main/Frame%2049%20(3).svg'; // wordmark in footer
const SERVICE_IMAGES: Record<ServiceId, string> = {
  research: 'https://raw.githubusercontent.com/gbunmi/logolita/main/RU.jpg',
  strategy: 'https://raw.githubusercontent.com/gbunmi/logolita/main/SP.jpg',
  design: 'https://raw.githubusercontent.com/gbunmi/logolita/main/DT.jpg',
  leadership: 'https://raw.githubusercontent.com/gbunmi/logolita/main/UXLA.jpg',
};

// ---- Data -------------------------------------------------------------------
type ServiceId = 'research' | 'strategy' | 'design' | 'leadership';

type Pillar = { title: string; copy: string };

type ServiceBlock = {
  id: ServiceId;
  title: string;
  pillars: [Pillar, Pillar, Pillar];
};

const SHARED_PILLARS: [Pillar, Pillar, Pillar] = [
  {
    title: 'Customer Insights',
    copy: 'Understanding what customers need, expect, and experience by going beyond assumptions. This means uncovering real needs, motivations, and frustrations through observation, feedback, and journey mapping.',
  },
  {
    title: 'Experience Gaps',
    copy: 'Finding out what is driving a gap in a product or service experience by looking beneath surface issues. This involves identifying where expectations are not being met and what\u2019s causing the disconnect.',
  },
  {
    title: 'Data Sensemaking',
    copy: 'Making sense of the data and feedback you already have by turning scattered inputs into clear patterns. From analytics to support logs, this helps translate information into decisions you can act on.',
  },
];

const SERVICES: ServiceBlock[] = [
  { id: 'research', title: 'Research & Understanding', pillars: SHARED_PILLARS },
  { id: 'strategy', title: 'Strategy & Planning', pillars: SHARED_PILLARS },
  { id: 'design', title: 'Design & Testing', pillars: SHARED_PILLARS },
  { id: 'leadership', title: 'UX Leadership & Advisory', pillars: SHARED_PILLARS },
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
const Hero: FC = () => (
  <section className="hero" id="top">
    <div className="container">
      <div className="hero__copy">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="display-xl"
        >
          Our Services
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
    </div>
  </section>
);

type ServiceSectionProps = {
  service: ServiceBlock;
  isLast?: boolean;
};

const ServiceSection: FC<ServiceSectionProps> = ({ service, isLast }) => (
  <section className={`service ${isLast ? 'service--last' : ''}`} id={`service-${service.id}`}>
    <div className="container">
      <div className="service__inner">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="service__header"
        >
          <div className="service__heading">
            <span className="service__bar" aria-hidden="true" />
            <h2 className="display-s">{service.title}</h2>
          </div>
          <button className="btn-primary btn-primary--sm" type="button">
            Get in touch
          </button>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="service__image"
        >
          <ImgSlot
            src={SERVICE_IMAGES[service.id]}
            label={`${service.title} image`}
            className="service__img"
          />
        </motion.div>
        <div className="service__pillars">
          {service.pillars.map((p, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              key={i} 
              className="pillar"
            >
              <h3 className="pillar__title">{p.title}</h3>
              <p className="pillar__copy">{p.copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
      {!isLast && <div className="service__divider" />}
    </div>
  </section>
);

// ---- Page -------------------------------------------------------------------
const ServicesPage: FC = () => (
  <div className="services-page">
    <main>
      <Hero />
      {SERVICES.map((s, i) => (
        <ServiceSection key={s.id} service={s} isLast={i === SERVICES.length - 1} />
      ))}
    </main>
    <ContactSection />
    <Footer />
  </div>
);

export default ServicesPage;
