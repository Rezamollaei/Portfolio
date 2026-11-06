import styles from './Experience.module.scss';
import { useLang } from '../../context/LangContext';

const stages = ['experience.matheria.stage1', 'experience.matheria.stage2'];

const highlights = [
  'experience.matheria.h1',
  'experience.matheria.h2',
  'experience.matheria.h3',
  'experience.matheria.h4',
  'experience.matheria.h5',
  'experience.matheria.h6',
  'experience.matheria.h7',
  'experience.matheria.h8'
];

const roles = [
  'experience.matheria.role1',
  'experience.matheria.role2',
  'experience.matheria.role3',
  'experience.matheria.role4',
  'experience.matheria.role5',
  'experience.matheria.role6'
];

const Experience = () => {
  const { t } = useLang();

  return (
    <section id="experience" className={styles.experience}>
      <h2 className="reveal" data-delay="0">{t('experience.title')}</h2>
      <div className={`${styles.card} reveal`} data-delay="1">
        <div className={styles.header}>
          <h3 className={styles.company}>
            <a
              className={styles.companyLink}
              href="https://tulero.it/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('experience.matheria.company')}
            </a>
          </h3>
          <p className={styles.title}>{t('experience.matheria.title')}</p>
          <div className={styles.period}>
            <span>{t('experience.matheria.period')}</span>
            <span className={styles.ongoing}>{t('experience.ongoing')}</span>
          </div>
          <ul className={styles.stages}>
            {stages.map((key) => (
              <li key={key}>{t(key)}</li>
            ))}
          </ul>
        </div>
        <p className={styles.summary}>{t('experience.matheria.summary')}</p>
        <div>
          <h4 className={styles.highlightsTitle}>{t('experience.matheria.highlightsTitle')}</h4>
          <ul className={styles.highlights}>
            {highlights.map((key) => (
              <li key={key}>{t(key)}</li>
            ))}
          </ul>
        </div>
        <div className={styles.roles}>
          {roles.map((key) => (
            <span key={key} className={styles.role}>{t(key)}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
