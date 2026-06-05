import type { RefObject } from "react";

import { useTranslation } from "react-i18next";

import { NAV_LINKS } from "@constants";

import styles from "./footer.module.scss";

/** Подвал сайта с дублирующей навигацией и копирайтом. */
export const Footer = ({
  sectionRef,
}: {
  /** Ref секции для Scrollspy. */
  sectionRef: RefObject<HTMLDivElement>;
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.footer} ref={sectionRef}>
      <footer>
        <div className={styles.links}>
          {NAV_LINKS.map((link) => (
            <a href={link.path} key={link.path}>
              {t(link.labelKey)}
            </a>
          ))}
        </div>
        <small className={styles.copyright}>{t("footer.copyright")}</small>
      </footer>
    </div>
  );
};
