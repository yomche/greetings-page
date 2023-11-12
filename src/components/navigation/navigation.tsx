import { useState } from "react";
import styles from "./navigation.module.scss";
import { LinkIcon } from "@ui";
import { havBarLinks } from "@/constants/navLinks";

export const Navigation = () => {
  const [currentNav, setCurrentNav] = useState("#");

  return (
    <nav className={styles.navigation}>
      {havBarLinks.map((link) => (
        <LinkIcon
          link={link.path}
          action={() => setCurrentNav(link.path)}
          isActive={currentNav === link.path}
          icon={link.icon}
        />
      ))}
    </nav>
  );
};
