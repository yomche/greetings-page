import { navLinks } from "@constants";
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <footer className="main">
        <div className={styles.links}>
          {navLinks.map((link, idx) => (
            <a href={link.path} key={idx}>
              {link.name}
            </a>
          ))}
        </div>
        <small className={styles.copyright}>yomche © 2023</small>
      </footer>
    </div>
  );
};
