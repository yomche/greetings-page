import { MdOutlineEmail } from "react-icons/md";
import { BsTelegram } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { Status } from "@ui";
import { useContact } from "./useContact";
import classNames from "classnames";
import styles from "./contact.module.scss";

const contactOptions = [
  {
    title: "E-mail",
    descriptionKey: "contact.emailAddress",
    linkKey: "contact.emailAddress",
    linkPrefix: "mailto:",
    icon: <MdOutlineEmail />,
  },
  {
    title: "Telegram",
    descriptionKey: "contact.telegramHandle",
    link: "https://t.me/katerina_dorozhkina",
    icon: <BsTelegram />,
  },
];

/** Секция контактов с быстрыми каналами связи и формой EmailJS. */
export const Contact = ({
  sectionRef,
}: {
  /** Ref секции для Scrollspy и якорной навигации. */
  sectionRef: React.RefObject<HTMLDivElement>;
}) => {
  const { t } = useTranslation();
  const { contactForm, status, submitForm } = useContact();

  return (
    <div ref={sectionRef} className={classNames("main", styles.container)}>
      <h1 id="contact">{t("contact.title")}</h1>
      <div className={styles.wrapper}>
        <aside className={styles.connect}>
          <div className={styles.intro}>
            <h2>{t("contact.introTitle")}</h2>
            <p>{t("contact.introDescription")}</p>
            <p>{t("contact.cooperation")}</p>
          </div>
          <div className={styles.options}>
            {contactOptions.map((option) => {
              const href =
                option.link ?? `${option.linkPrefix}${t(option.linkKey ?? "")}`;

              return (
                <a
                  className={styles.option}
                  href={href}
                  key={option.title}
                  target={option.link ? "_blank" : undefined}
                  rel={option.link ? "noreferrer" : undefined}
                >
                  <span className={styles.optionIcon}>{option.icon}</span>
                  <span className={styles.optionContent}>
                    <small>{option.title}</small>
                    <strong>{t(option.descriptionKey)}</strong>
                  </span>
                  <span className={styles.optionAction}>
                    {t("contact.linkMessage")}
                  </span>
                </a>
              );
            })}
          </div>
        </aside>
        <div className={styles.formWrapper}>
          <form ref={contactForm} onSubmit={submitForm} className={styles.form}>
            <input
              type="text"
              name="user_name"
              placeholder={t("contact.fullName")}
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder={t("contact.email")}
              required
            />
            <textarea
              name="message"
              rows={7}
              placeholder={t("contact.message")}
              required
            ></textarea>
            <button type="submit" className={styles.button}>
              {t("contact.send")}
            </button>
          </form>
          <Status status={status?.type} message={status?.message} />
        </div>
      </div>
    </div>
  );
};
