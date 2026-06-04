import { LinkIcon } from "@ui";
import { navLinks } from "@constants";
import { useTranslation } from "react-i18next";
import styles from "./navigation.module.scss";

/** Нижняя навигация с подсветкой текущей секции. */
export const Navigation = ({ currentSection }: { currentSection: number }) => {
  const { t } = useTranslation();

  return (
    <nav className={styles.navigation}>
      {navLinks.map((link, idx) => {
        return (
          <LinkIcon
            key={idx}
            link={link.path}
            isActive={currentSection === idx}
            icon={link.icon}
            label={t(link.labelKey)}
          />
        );
      })}
    </nav>
  );
};
