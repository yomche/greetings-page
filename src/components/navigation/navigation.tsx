import { LinkIcon } from "@ui";
import { navLinks } from "@constants";
import styles from "./navigation.module.scss";

export const Navigation = ({ currentSection }: { currentSection: number }) => {
  return (
    <nav className={styles.navigation}>
      {navLinks.map((link, idx) => {
        return (
          <LinkIcon
            key={idx}
            link={link.path}
            isActive={currentSection === idx}
            icon={link.icon}
          />
        );
      })}
    </nav>
  );
};
