import { AiOutlineBank, AiOutlineTrophy } from "react-icons/ai";
import { FaAward } from "react-icons/fa";
import { profileFrame } from "@assets";
import { Banner } from "@ui";
import classNames from "classnames";
import styles from "./about.module.scss";

export const About = ({
  sectionRef,
}: {
  sectionRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <div ref={sectionRef} className={classNames("main", styles.container)}>
      <h1 id="about">About Me</h1>
      <div className={styles.wrapper}>
        <div className={styles.frame}>
          <div className={styles.photo}>
            <img src={profileFrame} alt="Ekaterina Dorozhkina" />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.banners}>
            <Banner
              title={"Experience"}
              description={"1,5+ years"}
              icon={<FaAward />}
            />
            <Banner
              title={"Courses"}
              description={"EPAM Training Center"}
              icon={<AiOutlineTrophy />}
            />
            <Banner
              title={"Education"}
              description={"Tver State University"}
              icon={<AiOutlineBank />}
            />
          </div>
          <div className={styles.description}>
            <p>
              Frontend developer with 1.5+ years of experience.
              <br />
              Successfully completed an internship at EPAM Systems followed by
              employment with the company. Currently I work at L-tech.
            </p>
            <p>
              I specialize in developing React / Next.js applications using
              TypeScript.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
