import { navLinks } from "@constants";
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <footer>
        <div className={styles.links}>
          {navLinks.map((link, idx) => (
            <a href={link.path} key={idx}>
              {link.name}
            </a>
          ))}
        </div>
        <small className={styles.copyright}>
          Ekaterina Dorozhkina 2023 © All rights reserved
        </small>
      </footer>
    </div>
  );
};
