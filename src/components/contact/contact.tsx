import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp, BsTelegram } from "react-icons/bs";
import { Banner, LinkButton, TextArea, TextInput } from "@ui";
import styles from "./contact.module.scss";
import classNames from "classnames";
import { useContact } from "./useContact";

export const Contact = () => {
  const { formFields, emailError, onTextChange, onEmailChange, submitForm } =
    useContact();

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
        <div className={styles.form}>
          <TextInput
            name={"name"}
            placeholder={"Please enter your name"}
            value={formFields.name}
            onInputChange={(value) => onTextChange("name", value)}
          />
          <TextInput
            name={"email"}
            placeholder={"Please enter your email"}
            value={formFields.email}
            onInputChange={(value) => onEmailChange("email", value)}
            errorMessage="Please enter valid email"
            error={emailError}
          />
          <TextArea
            name={"message"}
            placeholder={"Please enter your message"}
            value={formFields.message}
            onInputChange={(value) => onTextChange("message", value)}
          />
          <LinkButton title={"Send message"} action={submitForm} />
        </div>
      </div>
    </div>
  );
};
