import styles from './Projects.module.scss';
import { projectsData, useProjectsCarousel } from './Projects';
import { useLang } from '../../context/LangContext';

const Projects = () => {
  const { t } = useLang();
  const {
    active,
    visible,
    mobile,
    next,
    animating,
    direction,
    exiting,
    locked
  } = useProjectsCarousel(projectsData.length);
  const normalizeProjectTitle = (title) => title.replaceAll('_', ' ');

  return (
    <section id="projects" className={styles.projects}>
      <h2 className="reveal" data-delay="0">{t('projects.title')}</h2>
      <p className="reveal" data-delay="1">{t('projects.subtitle')}</p>
      <h2 className={`${styles.allTitle} reveal`} data-delay="2">{t('projects.allTitle')}</h2>
      <div className={styles.wrap}>
        <button type="button" onClick={() => next(-1)} disabled={locked} aria-label={t('projects.prev')}>←</button>
        <div className={styles.carousel}>
          {projectsData.map((project, index) => {
            const isVisible = visible.includes(index);
            const isEntering = animating && index === active && direction !== 0;
            const isExiting = !mobile && animating && index === exiting;
            const cls = [styles.card];
            if (index === active) cls.push(styles.center);
            if (isEntering && direction > 0) cls.push(styles.enterFromRight);
            if (isEntering && direction < 0) cls.push(styles.enterFromLeft);
            if (isExiting && direction > 0) cls.push(styles.exitToLeft);
            if (isExiting && direction < 0) cls.push(styles.exitToRight);
            if (!isEntering && !isExiting && !mobile && index === visible[0]) cls.push(styles.left);
            if (!isEntering && !isExiting && !mobile && index === visible[2]) cls.push(styles.right);
            return (
              <article
                key={project.githubUrl}
                className={`${cls.join(' ')} ${isVisible ? styles.visible : ''}`}
                aria-hidden={!isVisible}
              >
                <img src={project.imageUrl} alt={`Project preview of ${project.title}`} />
                <div className={styles.body}>
                  <h3 className={styles['project-title']}>{normalizeProjectTitle(project.title)}</h3>
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
        <button type="button" onClick={() => next(1)} disabled={locked} aria-label={t('projects.next')}>→</button>
      </div>
        <div className={styles.repoList}>
          <ul className={styles.repoItems}>
            {projectsData.map((project) => (
              <li key={project.githubUrl}>
                <a href={project.githubUrl} target="_blank" rel="noreferrer noopener">
                  <span className={styles['project-title']}>{normalizeProjectTitle(project.title)}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  };

export default Projects;
