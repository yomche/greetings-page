import classNames from "classnames";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp, BsTelegram } from "react-icons/bs";
import { Banner, LinkButton } from "@ui";
import styles from "./contact.module.scss";

export const Contact = () => {
  return (
    <div className={classNames("main", styles.container)} id="contact">
      <h1>Contact Me</h1>
      <div className={styles.wrapper}>
        <div className={styles.options}>
          <Banner
            title={"E-mail"}
            description={"katerina.smirnova98@ya.ru"}
            icon={<MdOutlineEmail />}
            link={"mailto:katerina.smirnova98@yandex.ru"}
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
        <form onSubmit={() => null}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows={7}
            placeholder="Your Message"
            required
          ></textarea>
          <LinkButton title={"Send message"} />
        </form>
      </div>
    </div>
  );
};
