import styles from './Header.module.scss';
import { navItems, useHeaderLogic } from './Header';
import { useLang } from '../../context/LangContext';
import { useTheme } from '../../context/ThemeContext';

const SunIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="10" cy="10" r="4" />
    <line x1="10" y1="1.5" x2="10" y2="3.5" />
    <line x1="10" y1="16.5" x2="10" y2="18.5" />
    <line x1="1.5" y1="10" x2="3.5" y2="10" />
    <line x1="16.5" y1="10" x2="18.5" y2="10" />
    <line x1="3.4" y1="3.4" x2="4.8" y2="4.8" />
    <line x1="15.2" y1="15.2" x2="16.6" y2="16.6" />
    <line x1="15.2" y1="4.8" x2="16.6" y2="3.4" />
    <line x1="3.4" y1="16.6" x2="4.8" y2="15.2" />
  </svg>
);

const MoonIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M13.6 14.8a6.5 6.5 0 1 1-6-10.6 7 7 0 0 0 6 10.6Z" />
  </svg>
);

const Header = () => {
  const { t, lang, setLanguage } = useLang();
  const { theme, toggleTheme } = useTheme();
  const { isScrolled, isMenuOpen, setIsMenuOpen, closeMenu } = useHeaderLogic();

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <h1>Reza Mollaei</h1>
          <p>{t('nav.role')}</p>
        </div>

        <nav className={styles.navDesktop} aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {t(item.key)}
            </a>
          ))}
        </nav>

        <div className={styles.controls}>
          <div className={styles.langToggle} role="group" aria-label={t('nav.language')}>
            <button type="button" aria-pressed={lang === 'en'} onClick={() => setLanguage('en')}>
              EN
            </button>
            <button type="button" aria-pressed={lang === 'it'} onClick={() => setLanguage('it')}>
              IT
            </button>
          </div>

          <button className={styles.themeButton} type="button" onClick={toggleTheme} aria-label={t('nav.theme')}>
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            ☰
          </button>
        </div>
      </div>

      <div id="mobile-nav" className={`${styles.mobileDrawer} ${isMenuOpen ? styles.open : ''}`}>
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {t(item.key)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
