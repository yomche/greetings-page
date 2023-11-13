import React, { useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { stories } from "@constants";
import classNames from "classnames";
import styles from "./experience.module.scss";
import "swiper/css";

export const Experience = () => {
  const [sliderId, setSliderId] = useState(1);
  const progressBar = useRef<HTMLDivElement>(null);
  const onAutoplayTimeLeft = (
    swiper: SwiperClass,
    timeLeft: number,
    progress: number
  ) => {
    progressBar.current &&
      progressBar.current.style.setProperty("--progress", String(1 - progress));
  };

  return (
    <div id="experience" className={classNames("main", styles.container)}>
      <h1>My Experience</h1>
      <div className={styles.wrapper}>
        <div className={styles.experience}></div>
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
            {stories.map((story) => (
              <SwiperSlide className={styles.slide} key={story.id}>
                <p className={styles.title}>{story.name}</p>
                <div className={styles.image}>
                  <img src={story.image} alt={story.name} />
                </div>
                <a className={styles.button} href={story.link}>
                  Open demo
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