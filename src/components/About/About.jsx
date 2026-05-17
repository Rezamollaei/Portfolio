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
