import { useState } from "react";
import { LinkIcon } from "@ui";
import { navLinks } from "@constants";
import styles from "./navigation.module.scss";

export const Navigation = () => {
  const [currentNav, setCurrentNav] = useState("#");

  return (
    <nav className={styles.navigation}>
      {navLinks.map((link, idx) => (
        <LinkIcon
          key={idx}
          link={link.path}
          action={() => setCurrentNav(link.path)}
          isActive={currentNav === link.path}
          icon={link.icon}
        />
      ))}
    </nav>
  );
};
