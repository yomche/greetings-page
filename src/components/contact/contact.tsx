import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp, BsTelegram } from "react-icons/bs";
import styles from "./contact.module.scss";
import { Banner } from "@ui";

export const Contact = () => {
  return (
    <div className={styles.container} id="contact">
      <h2>Contact Me</h2>
      <div className={styles.wrapper}>
        <div className={styles.options}>
          <Banner
            title={"Email"}
            description={"email"}
            icon={<MdOutlineEmail />}
            link={"mailto:email"}
          />
          <Banner
            title={"Whatsapp"}
            description={"Whatsapp"}
            icon={<BsWhatsapp />}
            link={"https://api.whatsapp.com/send?phone=w"}
          />
          <Banner
            title={"Telegram"}
            description={"Telegram"}
            icon={<BsTelegram />}
            link={"https://api.whatsapp.com/send?phone=we"}
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
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
