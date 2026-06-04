import type { RefObject } from "react";
import { useRef, useState } from "react";

import { AiOutlineBranches } from "react-icons/ai";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

import { stories } from "@constants";

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
  const [sliderId, setSliderId] = useState(1);
  const progressBar = useRef<HTMLDivElement>(null);

  /** Обновляет CSS-переменную прогресса активного autoplay-слайда. */
  const onAutoplayTimeLeft = (
    swiper: SwiperClass,
    timeLeft: number,
    progress: number
  ) => {
    progressBar.current &&
      progressBar.current.style.setProperty("--progress", String(1 - progress));
  };

  return (
    <div ref={sectionRef} className={classNames("main", styles.container)}>
      <h1 id="experience">{t("experience.title")}</h1>
      <div className={styles.wrapper}>
        <section className={styles.experience} aria-labelledby="experience-tree-title">
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
        <div className={styles.swiper}>
          <Swiper
            slidesPerView={"auto"}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            onReachBeginning={() => {
              setSliderId(1);
            }}
            onSlideNextTransitionStart={() => {
              setSliderId(sliderId + 1);
            }}
            onSlidePrevTransitionEnd={() => {
              setSliderId(sliderId !== 1 ? sliderId - 1 : 1);
            }}
          >
            <div className={styles.slideTitle}></div>
            {stories.map((story) => (
              <SwiperSlide className={styles.slide} key={story.id}>
                <p className={styles.title}>{story.name}</p>
                <div className={styles.image}>
                  <img src={story.image} alt={story.name} />
                </div>
                <a className={styles.button} href={story.link}>
                  {t("experience.openDemo")}
                </a>
              </SwiperSlide>
            ))}
            <div className={styles.progressCont} ref={progressBar}>
              {stories.map((story) => (
                <div
                  key={story.id}
                  className={classNames(
                    styles.bar,
                    story.id === sliderId && styles.progress,
                    story.id < sliderId && styles.active
                  )}
                ></div>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
