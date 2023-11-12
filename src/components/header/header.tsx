import { CV, photo1 } from "@assets";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { LinkButton } from "@ui";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={"main"}>
      <div className={styles.container}>
        <h5>Hello I'm</h5>
        <h1>Ekaterina</h1>
        <h5>Frontend Developer</h5>
        <div className={styles.contact}>
          <LinkButton
            link={CV}
            download
            type={"secondary"}
            title={"Download CV"}
          />
          <div className={styles.photo}>
            <img src={photo1} alt="Ekaterina Dorozhkina" />
          </div>
          <LinkButton link={"#contact"} title={"Contact me"} />
        </div>
        <SocialLinks />
      </div>
    </header>
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
