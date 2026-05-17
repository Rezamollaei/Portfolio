import styles from './Background.module.scss';
import { useBackgroundChips } from './Background';

const Background = () => {
  const { chips, reduced } = useBackgroundChips();

  return (
    <div className={styles.layer} aria-hidden="true">
      <div className={styles.blobs} />
      <div className={styles.grid} />
      {chips.map((chip) => (
        <span
          key={chip.id}
          className={`${styles.chip} ${reduced ? styles.static : ''}`}
          style={{
            top: chip.top,
            left: chip.left,
            fontSize: chip.size,
            animationDuration: chip.duration,
            animationDelay: chip.delay,
            '--rotation': chip.rotation,
            '--drift': chip.drift
          }}
        >
          {chip.text}
        </span>
      ))}
    </div>
  );
};

export default Background;
