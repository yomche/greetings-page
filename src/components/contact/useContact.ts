import emailjs from "@emailjs/browser";
import { SyntheticEvent, useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const SERVICE_ID = import.meta.env.VITE_APP_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_APP_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_APP_USER_ID;
type StatusType = "sending" | "sent" | "error";

/** Управляет формой обратной связи, отправкой EmailJS и статусом отправки. */
export const useContact = () => {
  const { t } = useTranslation();
  const contactForm = useRef(null);
  const [status, setStatus] = useState<{
    type: StatusType;
    message: string;
  } | null>(null);

  useEffect(() => {
    if (status?.type === "sent" || status?.type === "error") {
      setTimeout(() => {
        setStatus(null);
      }, 3000);
    }
  }, [status]);

  /** Отправляет данные формы через EmailJS и показывает локализованный статус. */
  const submitForm = (event: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    event.preventDefault();

    setStatus({ type: "sending", message: t("contact.status.sending") });
    contactForm.current &&
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, contactForm.current, USER_ID)
        .then(
          (result) => {
            console.log(result.text);
            setStatus({ type: "sent", message: t("contact.status.sent") });
          },
          (error) => {
            console.log(error.text);
            setStatus({ type: "error", message: t("contact.status.error") });
          }
        );

    (event.target as HTMLFormElement).reset();
  };

  return { contactForm, status, submitForm };
};
