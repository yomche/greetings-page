import styles from "./link.module.scss";
import classNames from "classnames";

interface LinkProps {
  link: string;
  action?: () => void;
  isActive?: boolean;
  icon?: JSX.Element;
}

export const LinkIcon = ({ link, action, isActive, icon }: LinkProps) => {
  return (
    <a
      href={link}
      onClick={() => action?.()}
      className={classNames(styles.link, isActive && styles.active)}
    >
      {icon ?? null}
    </a>
  );
};
