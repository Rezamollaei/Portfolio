import styles from './Footer.module.scss';
import { useLang } from '../../context/LangContext';

const Footer = () => {
  const { t } = useLang();
  return (
    <footer className={styles.footer}>
      <p>Reza Mollaei © {new Date().getFullYear()} · {t('footer.builtWith')}</p>
      <p>{t('footer.rights')}</p>
    </footer>
  );
};

export default Footer;
