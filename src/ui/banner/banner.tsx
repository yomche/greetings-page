import styles from "./banner.module.scss";

interface BannerProps {
  /** Заголовок карточки. */
  title: string;
  /** Краткое описание или значение карточки. */
  description: string;
  /** Визуальная иконка карточки. */
  icon: JSX.Element;
  /** Внешняя ссылка, если карточка должна быть кликабельной. */
  link?: string;
  /** Текст ссылки внутри карточки. */
  linkMessage?: string;
}

/** Универсальная информационная карточка для фактов и контактов. */
export const Banner = ({
  title,
  description,
  icon,
  link,
  linkMessage = "Send message",
}: BannerProps) => {
  return (
    <div className={styles.banner}>
      <div className={styles.icon}>{icon}</div>
      <h4>{title}</h4>
      <h5 className={styles.description}>{description}</h5>
      {link && (
        <a href={link} target="_blank" rel="noreferrer">
          {linkMessage}
        </a>
      )}
    </div>
  );
};
