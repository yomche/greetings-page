import styles from "./header.module.scss";
import { CV } from "@assets";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { LinkButton } from "@ui";

export const Header = () => {
  return (
    <div className={styles.header}>
      <header>
        <div className={styles.container}>
          <h5>Hello I'm</h5>
          <h1>Ekaterina</h1>
          <h5 className="text-light">Frontend Developer</h5>
          <div className={styles.cta}>
            <LinkButton
              link={CV}
              download
              type={"secondary"}
              title={"Download CV"}
            />
            <LinkButton link={"#contact"} title={"Contact me"} />
          </div>
          <SocialLinks />
        </div>
      </header>
    </div>
  );
};

const SocialLinks = () => {
  return (
    <div className={styles.socials}>
      <a href="https://www.linkedin.com/in/yomche" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/yomche" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
};
