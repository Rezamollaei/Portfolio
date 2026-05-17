import styles from './Hero.module.scss';
import { chips } from './Hero';
import { useLang } from '../../context/LangContext';

const Hero = () => {
  const { t } = useLang();

  return (
    <section className={styles.hero}>
      <p className={`${styles.intro} reveal`} data-delay="0">{t('hero.welcome')}</p>
      <h2 className="reveal" data-delay="1">Reza Mollaei</h2>
      <p className={`${styles.role} reveal`} data-delay="2">{t('hero.role')}</p>
      <p className={`${styles.tagline} reveal`} data-delay="3">{t('hero.subtitle')}</p>
      <div className={`${styles.chips} reveal`} data-delay="4">
        {chips.map((key) => (
          <span key={key}>{t(key)}</span>
        ))}
      </div>
      <div className={`${styles.actions} reveal`} data-delay="5">
        <a href="#projects">{t('hero.ctaPrimary')}</a>
        <a href="#contact">{t('hero.ctaSecondary')}</a>
      </div>
    </section>
  );
};

export default Hero;
