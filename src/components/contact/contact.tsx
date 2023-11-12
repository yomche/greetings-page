import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp, BsTelegram } from "react-icons/bs";
import { Banner } from "@ui";
import { useRef } from "react";
import classNames from "classnames";
import styles from "./contact.module.scss";

import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef<unknown>();
  const submitForm = (event: unknown) => {
    event.preventDefault();
    console.log(form.current);
    form.current &&
      emailjs
        .sendForm(
          "service_zxx0i78",
          "template_x3vs6wm",
          form.current,
          "SKAY5YTxZAXeCZrxq"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

    event.target.reset();
  };

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
        <form ref={form} onSubmit={submitForm} className={styles.form}>
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
          <button type="submit" className={styles.button}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
