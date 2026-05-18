import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Reza Mollaei © {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
