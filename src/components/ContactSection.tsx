import * as React from 'react';
import { useState, FC } from 'react';
import { motion } from 'motion/react';
import './ContactSection.css';

// Fallback constant for missing hero image
const DEFAULT_HERO_IMAGE = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

interface ContactSectionProps {
  imageUrl?: string;
  onSubmit?: (form: ContactForm) => void;
}

const ContactSection: FC<ContactSectionProps> = ({ imageUrl = DEFAULT_HERO_IMAGE, onSubmit }) => {
  const [form, setForm] = useState<ContactForm>({ name: '', email: '', message: '' });

  const handleChange = (field: keyof ContactForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) onSubmit(form);
    else console.log('Form submitted:', form);
  };

  return (
    <section className="contact-section" id="contact" data-node-id="2160:795">
      <div className="contact-section__container">
        {/* LEFT: Hero panel with blurred background image */}
        <div className="contact-section__hero" data-node-id="2160:806">
          <div
            className="contact-section__hero-image"
            style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : undefined}
            aria-hidden="true"
          />
          <div className="contact-section__hero-blur" aria-hidden="true" />
          <div className="contact-section__hero-content">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="contact-section__title"
            >
              Let's have a conversation
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="contact-section__subtitle"
            >
              Whether you have a project ready or just want to talk something through, get in touch.
              You'll hear back within one business day.
            </motion.p>
          </div>
        </div>

        {/* RIGHT: Form panel */}
        <div className="contact-section__form-wrapper" data-node-id="2162:865">
          <form className="contact-section__form" onSubmit={handleSubmit} data-node-id="2162:867">
            <div className="contact-section__fields">
              <div className="contact-section__field-group">
                <label htmlFor="name" className="contact-section__label">Tell us your name</label>
                <input
                  id="name"
                  type="text"
                  className="contact-section__input"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange('name')}
                  aria-label="Your name"
                  data-node-id="2162:869"
                />
              </div>
              <div className="contact-section__field-group">
                <label htmlFor="email" className="contact-section__label">Tell us your email</label>
                <input
                  id="email"
                  type="email"
                  className="contact-section__input"
                  placeholder="Your email"
                  value={form.email}
                  onChange={handleChange('email')}
                  aria-label="Your email"
                  data-node-id="2162:870"
                />
              </div>
              <div className="contact-section__field-group contact-section__field-group--textarea">
                <label htmlFor="message" className="contact-section__label">Leave a message</label>
                <textarea
                  id="message"
                  className="contact-section__textarea"
                  placeholder="Leave a message"
                  value={form.message}
                  onChange={handleChange('message')}
                  aria-label="Leave a message"
                  data-node-id="2162:871"
                />
              </div>
            </div>
            <button type="submit" className="contact-section__submit" data-node-id="2162:873">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
