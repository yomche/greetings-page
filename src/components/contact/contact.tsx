import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp, BsTelegram } from "react-icons/bs";
import { Banner, Status } from "@ui";
import { useContact } from "./useContact";
import classNames from "classnames";
import styles from "./contact.module.scss";

export const Contact = ({
  sectionRef,
}: {
  sectionRef: React.RefObject<HTMLDivElement>;
}) => {
  const { contactForm, status, submitForm } = useContact();

  return (
    <div ref={sectionRef} className={classNames("main", styles.container)}>
      <h1 id="contact">Contact Me</h1>
      <div className={styles.wrapper}>
        <div className={styles.options}>
          <Banner
            title={"E-mail"}
            description={"yomi1698@gmail.com"}
            icon={<MdOutlineEmail />}
            link={"mailto:yomi1698@gmail.com"}
          />
          <Banner
            title={"WhatsApp"}
            description={"+7 (964) 165 07 51"}
            icon={<BsWhatsapp />}
            link={"https://api.whatsapp.com/send?phone=79641650751"}
          />
          <Banner
            title={"Telegram"}
            description={"@yomche"}
            icon={<BsTelegram />}
            link={"https://t.me/yomche"}
          />
        </div>
        <div className={styles.formWrapper}>
          <form ref={contactForm} onSubmit={submitForm} className={styles.form}>
            <input
              type="text"
              name="user_name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows={7}
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className={styles.button}>
              Send Message
            </button>
          </form>
          <Status status={status?.type} message={status?.message} />
        </div>
      </div>
    </div>
  );
};
