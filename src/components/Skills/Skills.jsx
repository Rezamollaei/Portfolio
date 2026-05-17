import styles from './Skills.module.scss';
import { skills } from './Skills';
import { useLang } from '../../context/LangContext';

const Skills = () => {
  const { t } = useLang();

  return (
    <section id="skills" className={styles.skills}>
      <h2 className="reveal" data-delay="0">{t('skills.title')}</h2>
      <p className="reveal" data-delay="1">{t('skills.subtitle')}</p>
      <div className={styles.grid}>
        {skills.map((skill) => (
          <div className="reveal" data-delay="2" key={skill}>{skill}</div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
