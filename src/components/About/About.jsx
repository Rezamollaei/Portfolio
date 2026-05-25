import styles from './About.module.scss';
import profileImage from '../../assets/profile.jpg';
import { focusKeys } from './About';
import { useLang } from '../../context/LangContext';

const About = () => {
  const { t } = useLang();

  return (
    <section id="about" className={styles.about}>
      <div className={`${styles.imageWrap} reveal`} data-delay="0">
        <img src={profileImage} alt="Reza Mollaei" />
      </div>
      <div className="reveal" data-delay="1">
        <h2>{t('about.title')}</h2>
        <p>{t('about.intro')}</p>
        <p>{t('about.body')}</p>
        <div className={styles.educationRow}>
          <div className={styles.educationLabel}>
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 9.5L12 4l10 5.5-10 5.5L2 9.5z" />
              <path d="M6 11.8V16c0 1.2 2.7 2.8 6 2.8s6-1.6 6-2.8v-4.2" />
            </svg>
            <span>{t('about.university.label')}</span>
          </div>
          <p className={styles.educationValue}>{t('about.university.value')}</p>
        </div>
        <ul>
          {focusKeys.map((key) => (
            <li key={key}>{t(key)}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
