import styles from './Projects.module.scss';
import { projectsData, useProjectsCarousel } from './Projects';
import { useLang } from '../../context/LangContext';

const Projects = () => {
  const { t } = useLang();
  const { active, visible, mobile, next, animating, mobileDir } = useProjectsCarousel(projectsData.length);

  return (
    <section id="projects" className={styles.projects}>
      <h2 className="reveal" data-delay="0">{t('projects.title')}</h2>
      <p className="reveal" data-delay="1">{t('projects.subtitle')}</p>
      <div className={styles.wrap}>
        <button type="button" onClick={() => next(-1)} disabled={animating} aria-label={t('projects.prev')}>←</button>
        <div className={styles.carousel}>
          {projectsData.map((project, index) => {
            const isVisible = visible.includes(index);
            const cls = [styles.card];
            if (index === active) cls.push(styles.center);
            if (!mobile && index === visible[0]) cls.push(styles.left);
            if (!mobile && index === visible[2]) cls.push(styles.right);
            if (mobile && isVisible && animating && mobileDir > 0) cls.push(styles.mobileInRight);
            if (mobile && isVisible && animating && mobileDir < 0) cls.push(styles.mobileInLeft);
            return (
              <article key={project.githubUrl} className={`${cls.join(' ')} ${isVisible ? styles.visible : ''}`} aria-hidden={!isVisible}>
                <img src={project.imageUrl} alt={`Project preview of ${project.title}`} />
                <div className={styles.body}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className={styles.actions}>
                    <a href={project.githubUrl} target="_blank" rel="noreferrer noopener">{t('projects.github')}</a>
                    <a
                      href={project.liveUrl || '#'}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-disabled={!project.liveUrl}
                      onClick={(e) => !project.liveUrl && e.preventDefault()}
                    >
                      {project.liveUrl ? t('projects.visit') : t('projects.unavailable')}
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <button type="button" onClick={() => next(1)} disabled={animating} aria-label={t('projects.next')}>→</button>
      </div>
      <div className={styles.repoList}>
        <div className={styles.repoListHeader}>
          <div>
            <h3>{t('projects.publicTitle')}</h3>
            <p>{t('projects.publicSubtitle')}</p>
          </div>
          <a href="https://github.com/Rezamollaei?tab=repositories" target="_blank" rel="noreferrer noopener">
            {t('projects.publicAll')}
          </a>
        </div>
        <ul className={styles.repoItems}>
          {projectsData.map((project) => (
            <li key={project.githubUrl}>
              <a href={project.githubUrl} target="_blank" rel="noreferrer noopener">
                {project.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
