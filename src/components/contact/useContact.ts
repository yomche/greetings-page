import emailjs from "@emailjs/browser";
import { SyntheticEvent, useRef, useState, useEffect } from "react";

const SERVICE_ID = import.meta.env.VITE_APP_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_APP_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_APP_USER_ID;
type StatusType = "sending" | "sent" | "error";

export const useContact = () => {
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

  const submitForm = (event: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    event.preventDefault();

    setStatus({ type: "sending", message: "Sending..." });
    contactForm.current &&
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, contactForm.current, USER_ID)
        .then(
          (result) => {
            console.log(result.text);
            setStatus({ type: "sent", message: "Message sent!" });
          },
          (error) => {
            console.log(error.text);
            setStatus({ type: "error", message: "Message failed to send." });
          }
        );

    (event.target as HTMLFormElement).reset();
  };

  return { contactForm, status, submitForm };
};
