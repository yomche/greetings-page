import type { RefObject } from "react";

import { AiOutlineBank, AiOutlineTrophy } from "react-icons/ai";
import { FaAward } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

import { profileFrame } from "@assets";
import { Banner } from "@ui";

import styles from "./about.module.scss";

type AboutMetric = {
  /** Название краткого факта в верхних карточках секции. */
  title: string;
  /** Значение или пояснение краткого факта. */
  description: string;
};

const metricIcons = [<FaAward />, <AiOutlineTrophy />, <AiOutlineBank />];

/** Секция с профессиональным описанием и краткими фактами обо мне. */
export const About = ({
  sectionRef,
}: {
  /** Ref секции для Scrollspy и навигации по странице. */
  sectionRef: RefObject<HTMLDivElement>;
}) => {
  const { t } = useTranslation();
  const metrics = t("about.metrics", { returnObjects: true }) as AboutMetric[];
  const paragraphs = t("about.paragraphs", { returnObjects: true }) as string[];

  return (
    <div ref={sectionRef} className={classNames("main", styles.container)}>
      <h1 id="about">{t("about.title")}</h1>
      <div className={styles.wrapper}>
        <div className={styles.frame}>
          <div className={styles.photo}>
            <img src={profileFrame} alt={t("about.photoAlt")} />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.banners}>
            {metrics.map((metric, index) => (
              <Banner
                key={metric.title}
                title={metric.title}
                description={metric.description}
                icon={metricIcons[index]}
              />
            ))}
          </div>
          <div className={styles.description}>
            <p className={styles.lead}>{t("about.lead")}</p>
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
