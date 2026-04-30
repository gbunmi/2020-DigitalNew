import type { FC } from 'react';
import { motion } from 'motion/react';
import './Partners.css';

/* =============================================================================
   20/20 Digital — Partners section
   Faithful build of Figma node 2:55 of file 0GqFHHV3PpalVzSKo9R7YJ.

   This is a section, not a full page — drop <Partners /> wherever it needs to
   appear (Home page, About page, etc.). It uses the same token system as the
   About / Services / Works / Blog pages.

   Pass logos via props or edit the default PARTNERS array below.
   ============================================================================= */

export type Partner = {
  /** Partner / company name. Shown as fallback text and used for the alt. */
  name: string;
  /** Logo image URL. If omitted, the name is rendered as styled text instead. */
  logo?: string;
  /** Optional link the logo tile points to. */
  href?: string;
};

interface PartnersProps {
  title?: string;
  partners?: Partner[];
}

// Default partners updated with provided logos
const DEFAULT_PARTNERS: Partner[] = [
  { name: 'Acadia University', logo: 'https://raw.githubusercontent.com/gbunmi/logolita/main/Acadia-University.png' },
  { name: 'Atlantic Central', logo: 'https://raw.githubusercontent.com/gbunmi/logolita/main/Atlantic-Central.png' },
  { name: 'BOYNECLARKE', logo: 'https://raw.githubusercontent.com/gbunmi/logolita/main/BOYNECLARKE.png' },
  { name: 'CGI', logo: 'https://raw.githubusercontent.com/gbunmi/logolita/main/CGI.png' },
  { name: 'City of Burlington', logo: 'https://raw.githubusercontent.com/gbunmi/logolita/main/City-of-Burlington.png' },
  { name: 'Covers', logo: 'https://raw.githubusercontent.com/gbunmi/logolita/main/Covers.png' },
  { name: 'CultureAlly', logo: 'https://raw.githubusercontent.com/gbunmi/logolita/main/CultureAlly.png' },
  { name: 'Dalhousie University', logo: 'https://raw.githubusercontent.com/gbunmi/logolita/main/Dalhousie-University.png' },
  { name: 'Dashboard Marketing', logo: 'https://raw.githubusercontent.com/gbunmi/logolita/main/Dashboard-Marketing.png' },
  { name: 'Datolite Solutions', logo: 'https://raw.githubusercontent.com/gbunmi/logolita/main/Datolite-Solutions.png' },
  { name: 'Digital Nova Scotia', logo: 'https://raw.githubusercontent.com/gbunmi/logolita/main/Digital-Nova-Scotia.png' },
  { name: 'Ecology Action Centre', logo: 'https://raw.githubusercontent.com/gbunmi/logolita/main/Ecology-Action-Centre.png' },
  { name: 'Eden Textile', logo: 'https://raw.githubusercontent.com/gbunmi/logolita/main/Eden-Textile.png' },
  { name: 'GA Solutions', logo: 'https://raw.githubusercontent.com/gbunmi/logolita/main/GA-Solutions.png' },
  { name: 'Halifax Regional Municipality', logo: 'https://raw.githubusercontent.com/gbunmi/logolita/main/Halifax-Regional-Municipality.png' },
  { name: 'Innovasea', logo: 'https://raw.githubusercontent.com/gbunmi/logolita/main/Innovasea.png' },
  { name: 'Instinct', logo: 'https://raw.githubusercontent.com/gbunmi/logolita/main/Instinct.png' },
  { name: 'League Data', logo: 'https://raw.githubusercontent.com/gbunmi/logolita/main/League-Data.png' },
  { name: 'Melissa Pike', logo: 'https://raw.githubusercontent.com/gbunmi/logolita/main/Melissa-Pike.png' },
  { name: 'Nova Scotia Health Innovation Hub', logo: 'https://raw.githubusercontent.com/gbunmi/logolita/main/Nova-Scotia-Health-Innovation-Hub.png' },
  { name: 'OMISTA CU', logo: 'https://raw.githubusercontent.com/gbunmi/logolita/main/OMISTA-CU.png' },
  { name: 'Ontario Government', logo: 'https://raw.githubusercontent.com/gbunmi/logolita/main/Ontario-Government.png' },
  { name: 'Provincial CU', logo: 'https://raw.githubusercontent.com/gbunmi/logolita/main/Provincial-CU.png' },
  { name: 'QEII Foundation', logo: 'https://raw.githubusercontent.com/gbunmi/logolita/main/QEII-Foundation.png' },
  { name: 'Resulta', logo: 'https://raw.githubusercontent.com/gbunmi/logolita/main/Resulta.png' },
  { name: 'Safi Media', logo: 'https://raw.githubusercontent.com/gbunmi/logolita/main/Safi-Media.png' },
  { name: 'Saltwire', logo: 'https://raw.githubusercontent.com/gbunmi/logolita/main/Saltwire.png' },
  { name: 'Stanfields', logo: 'https://raw.githubusercontent.com/gbunmi/logolita/main/Stanfields.png' },
  { name: 'Swept', logo: 'https://raw.githubusercontent.com/gbunmi/logolita/main/Swept.png' },
  { name: 'Talkatoo', logo: 'https://raw.githubusercontent.com/gbunmi/logolita/main/Talkatoo.png' },
  { name: 'Truverus', logo: 'https://raw.githubusercontent.com/gbunmi/logolita/main/Truverus.png' },
  { name: 'UNUM Health', logo: 'https://raw.githubusercontent.com/gbunmi/logolita/main/UNUM-Health.png' },
  { name: 'Volta', logo: 'https://raw.githubusercontent.com/gbunmi/logolita/main/Volta.png' },
  { name: 'WOW', logo: 'https://raw.githubusercontent.com/gbunmi/logolita/main/WOW.png' },
  { name: 'WorkInsights', logo: 'https://raw.githubusercontent.com/gbunmi/logolita/main/WorkInsights.png' },
  { name: 'Innerlogic', logo: 'https://raw.githubusercontent.com/gbunmi/logolita/main/innerlogic.png' },
];

const PartnerTile: FC<{ partner: Partner }> = ({ partner }) => {
  const inner = partner.logo ? (
    <img src={partner.logo} alt={partner.name} className="partner__logo" />
  ) : (
    <span className="partner__placeholder">{partner.name}</span>
  );
  if (partner.href) {
    return (
      <a className="partner" href={partner.href} aria-label={partner.name}>
        {inner}
      </a>
    );
  }
  return <div className="partner">{inner}</div>;
};

export const Partners: FC<PartnersProps> = ({
  title = 'Our Partners across industries',
  partners = DEFAULT_PARTNERS,
}) => (
  <section className="partners">
    <div className="partners__inner">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="partners__title"
      >
        {title}
      </motion.h2>
      <motion.div 
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.05
            }
          }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="partners__grid"
      >
        {partners.map((p, i) => (
          <motion.div
            key={`${p.name}-${i}`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <PartnerTile partner={p} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Partners;
