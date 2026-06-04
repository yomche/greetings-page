import styles from "./link.module.scss";
import classNames from "classnames";

interface LinkProps {
  /** Адрес перехода или якорь на странице. */
  link: string;
  /** Дополнительное действие по клику перед переходом. */
  action?: () => void;
  /** Находится ли связанная секция в текущем viewport. */
  isActive?: boolean;
  /** Иконка, отображаемая внутри ссылки. */
  icon?: JSX.Element;
  /** Доступная подпись для иконочной ссылки. */
  label?: string;
}

/** Иконочная ссылка для компактной навигации. */
export const LinkIcon = ({ link, action, isActive, icon, label }: LinkProps) => {
  return (
    <a
      href={link}
      onClick={() => action?.()}
      aria-label={label}
      title={label}
      className={classNames(styles.link, isActive && styles.active)}
    >
      {icon ?? null}
    </a>
  );
};
