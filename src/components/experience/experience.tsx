import type { RefObject } from "react";

import { AiOutlineBranches } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

import styles from "./experience.module.scss";
import "swiper/css";

type WorkExperience = {
  /** Название компании. */
  company: string;
  /** Краткое описание компании или продукта. */
  summary: string;
  /** Город и размер компании. */
  location: string;
  /** Роль в компании. */
  role: string;
  /** Период работы. */
  period: string;
  /** Сжатый список ключевых задач и результатов. */
  items: string[];
  /** Основные технологии и инструменты. */
  stack: string[];
};

/** Секция опыта с деревом рабочих мест и слайдером демо-проектов. */
export const Experience = ({
  sectionRef,
}: {
  /** Ref секции для Scrollspy и якорной навигации. */
  sectionRef: RefObject<HTMLDivElement>;
}) => {
  const { t } = useTranslation();
  const experiences = t("experience.jobs", {
    returnObjects: true,
  }) as WorkExperience[];

  return (
    <div ref={sectionRef} className={classNames("main", styles.container)}>
      <h1 id="experience">{t("experience.title")}</h1>
      <div className={styles.wrapper}>
        <section
          className={styles.experience}
          aria-labelledby="experience-tree-title"
        >
          <div className={styles.treeHeader}>
            <div className={styles.treeIcon}>
              <AiOutlineBranches />
            </div>
            <div>
              <small>{t("experience.treeSubtitle")}</small>
              <h2 id="experience-tree-title">{t("experience.treeTitle")}</h2>
            </div>
          </div>
          <div className={styles.branches}>
            {experiences.map((job) => (
              <article className={styles.branch} key={job.company}>
                <div className={styles.branchHeader}>
                  <div>
                    <h3>{job.company}</h3>
                    <p>{job.summary}</p>
                  </div>
                  <span>{job.period}</span>
                </div>
                <div className={styles.meta}>
                  <strong>{job.role}</strong>
                  <small>{job.location}</small>
                </div>
                <ul>
                  {job.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className={styles.stack}>
                  {job.stack.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
