import classNames from "classnames";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { profileFrame } from "@assets";
import styles from "./about.module.scss";
import { Banner } from "@ui";

export const About = () => {
  return (
    <div id="about" className={classNames("main", styles.container)}>
      <h1>About Me</h1>
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
              description={"1,5+ year"}
              icon={<FaAward />}
            />
            <Banner
              title={"Courses"}
              description={"EPAM Training Center"}
              icon={<FiUsers />}
            />
            <Banner
              title={"Education"}
              description={
                "Tver State University"
              }
              icon={<VscFolderLibrary />}
            />
          </div>
          <p>
            test
          </p>
        </div>
      </div>
    </div>
  );
};
