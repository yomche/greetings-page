import { MdOutlineEmail } from "react-icons/md";
import { BsTelegram } from "react-icons/bs";

export const CONTACTS_OPTIONS = [
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