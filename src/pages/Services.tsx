import { type FC } from 'react';
import './Services.css';
import { ContactSection, Footer } from '../components/SharedUI';

/* =============================================================================
   20/20 Digital — Services page
   Faithful build of Figma node 46:412 of file 0GqFHHV3PpalVzSKo9R7YJ.

   Reuses the same Instrument Sans + token palette as the About page so the
   two share a visual language. Drop your assets into the constants below.
   ============================================================================= */

// ---- Asset slots ------------------------------------------------------------
const LOGO_DARK_URL = ''; // small wordmark in nav
const LOGO_FOOTER_URL = ''; // wordmark in footer
const SERVICE_IMAGES: Record<ServiceId, string> = {
  research: '',
  strategy: '',
  design: '',
  leadership: '',
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
        <h1 className="display-xl">Our Services</h1>
        <p className="lede">
          From product flows to team dynamics, we uncover the friction points holding you back and
          work with you to resolve them in a way that lasts.
        </p>
      </div>
      <div className="hero__divider" />
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
        <div className="service__header">
          <div className="service__heading">
            <span className="service__bar" aria-hidden="true" />
            <h2 className="display-s">{service.title}</h2>
          </div>
          <button className="btn-primary btn-primary--sm" type="button">
            Get in touch
          </button>
        </div>
        <div className="service__image">
          <ImgSlot
            src={SERVICE_IMAGES[service.id]}
            label={`${service.title} image`}
            className="service__img"
          />
        </div>
        <div className="service__pillars">
          {service.pillars.map((p, i) => (
            <div key={i} className="pillar">
              <h3 className="pillar__title">{p.title}</h3>
              <p className="pillar__copy">{p.copy}</p>
            </div>
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
