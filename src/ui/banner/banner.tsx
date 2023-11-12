import styles from "./banner.module.scss";

interface BannerProps {
  title: string;
  description: string;
  icon: JSX.Element;
  link?: string;
  linkMessage?: string;
}

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
        <a href={link} target="_blank">
          {linkMessage}
        </a>
      )}
    </div>
  );
};
