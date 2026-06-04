import type { RefObject } from "react";

import { useTranslation } from "react-i18next";

import { CV, profilePhoto } from "@assets";
import { ButtonTypesEnum } from "@types";
import { LinkButton, SocialLinks } from "@ui";

import styles from "./header.module.scss";

/** Главная hero-секция с именем, специализацией, фото и быстрыми действиями. */
export const Header = ({
  sectionRef,
}: {
  /** Ref секции для Scrollspy и якорной навигации. */
  sectionRef: RefObject<HTMLDivElement>;
}) => {
  const { t } = useTranslation();

  return (
    <header id="home" className="main" ref={sectionRef}>
      <div className={styles.container}>
        <h5>{t("header.hello")}</h5>
        <h1>{t("header.name")}</h1>
        <h5>{t("header.speciality")}</h5>

        <div className={styles.contact}>
          <LinkButton
            link={CV}
            isDownload
            type={ButtonTypesEnum.SECONDARY}
            title={t("header.downloadCV")}
          />

          <div className={styles.photo}>
            <img src={profilePhoto} alt={t("header.name")} />
          </div>

          <LinkButton link="#contact" title={t("header.contactMe")} />
        </div>

        <SocialLinks />
      </div>
    </header>
  );
};
