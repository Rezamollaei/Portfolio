import styles from './Contact.module.scss';
import { socialLinks, useContactForm } from './Contact';
import { useLang } from '../../context/LangContext';

const Contact = () => {
  const { t } = useLang();
  const { form, onChange, onSubmit } = useContactForm(t);

  return (
    <section id="contact" className={styles.contact}>
      <h2 className="reveal" data-delay="0">{t('contact.title')}</h2>
      <p className="reveal" data-delay="1">{t('contact.subtitle')}</p>
      <div className={styles.layout}>
        <div className={styles.formBox}>
          <form className={styles.form} onSubmit={onSubmit}>
            <label htmlFor="name">{t('contact.form.nameLabel')}</label>
            <input id="name" name="name" type="text" placeholder={t('contact.form.namePlaceholder')} value={form.name} onChange={onChange} required />

            <label htmlFor="email">{t('contact.form.emailLabel')}</label>
            <input id="email" name="email" type="email" placeholder={t('contact.form.emailPlaceholder')} value={form.email} onChange={onChange} required />

            <label htmlFor="message">{t('contact.form.messageLabel')}</label>
            <textarea id="message" name="message" rows="5" placeholder={t('contact.form.messagePlaceholder')} value={form.message} onChange={onChange} required />

            <button type="submit">{t('contact.send')}</button>
          </form>
        </div>
        <div className={styles.linksBox}>
          <h3>{t('contact.directTitle')}</h3>
          <p>{t('contact.directBody')}</p>
          <div className={styles.socialRow}>
            {socialLinks.map((link) => (
              <a
                key={link.key}
                href={link.url}
                target={link.url.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.url.startsWith('mailto:') ? undefined : 'noreferrer noopener'}
              >
                {t(link.key)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
