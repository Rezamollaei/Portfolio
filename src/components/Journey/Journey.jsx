import styles from './Journey.module.scss';
import { journeyEvents } from './Journey';
import { useLang } from '../../context/LangContext';

const Journey = () => {
  const { t } = useLang();

  return (
    <section id="journey" className={styles.journey}>
      <h2 className="reveal" data-delay="0">{t('journey.title')}</h2>
      <p className="reveal" data-delay="1">{t('journey.subtitle')}</p>
      <div className={styles.timeline}>
        {journeyEvents.map((event, index) => (
          <article className={`${styles.item} reveal ${index % 2 ? styles.right : styles.left}`} key={event} data-delay={index + 2}>
            <span className={styles.dot} aria-hidden="true" />
            <div className={styles.card}>
              <p>{t(`journey.event${event}.date`)}</p>
              <h3>{t(`journey.event${event}.title`)}</h3>
              <p>{t(`journey.event${event}.body`)}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Journey;
