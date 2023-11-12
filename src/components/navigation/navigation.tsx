import { useState } from "react";
import classNames from "classnames";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import styles from "./navigation.module.scss";

export const Navigation = () => {
  const [currentNav, setCurrentNav] = useState("#");

  return (
    <nav className={styles.navigation}>
      <a
        href="#"
        onClick={() => setCurrentNav("#")}
        className={classNames(currentNav === "#" && styles.active)}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setCurrentNav("#about")}
        className={classNames(currentNav === "#about" && styles.active)}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setCurrentNav("#experience")}
        className={classNames(currentNav === "#experience" && styles.active)}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setCurrentNav("#services")}
        className={classNames(currentNav === "#services" && styles.active)}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setCurrentNav("#contact")}
        className={classNames(currentNav === "#contact" && styles.active)}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};
