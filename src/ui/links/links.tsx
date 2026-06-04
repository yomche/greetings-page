import styles from "@/components/header/header.module.scss";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

/** Социальные ссылки профиля в hero-секции. */
export const SocialLinks = () => {
  return (
    <div className={styles.socials}>
      <a
        href="https://www.linkedin.com/in/yomche"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/yomche"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
    </div>
  );
};
