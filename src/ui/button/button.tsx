import classNames from "classnames";
import styles from "./button.module.scss";

interface LinkButtonProps {
  title: string;
  link?: string;
  download?: boolean;
  action?: () => void;
  type?: "primary" | "secondary";
}

export const LinkButton = ({
  title,
  link,
  action,
  download = false,
  type = "primary",
}: LinkButtonProps) => {
  return (
    <a
      href={link}
      download={download}
      onClick={() => action?.()}
      className={classNames(
        styles.button,
        type === "primary" && styles.primary
      )}
    >
      {title}
    </a>
  );
};
