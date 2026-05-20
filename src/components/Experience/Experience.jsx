import styles from './Experience.module.scss';
import { useLang } from '../../context/LangContext';

const roles = [
  'experience.matheria.role1',
  'experience.matheria.role2',
  'experience.matheria.role3',
  'experience.matheria.role4',
  'experience.matheria.role5'
];

const Experience = () => {
  const { t } = useLang();

  return (
    <section id="experience" className={styles.experience}>
      <h2 className="reveal" data-delay="0">{t('experience.title')}</h2>
      <div className={`${styles.card} reveal`} data-delay="1">
        <div className={styles.header}>
          <h3 className={styles.company}>{t('experience.matheria.company')}</h3>
          <div className={styles.period}>
            <span>{t('experience.matheria.period')}</span>
            <span className={styles.ongoing}>{t('experience.ongoing')}</span>
          </div>
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
