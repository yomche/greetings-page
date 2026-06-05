import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineMessage,
  AiOutlineBook,
} from "react-icons/ai";

/** Ссылка нижней навигации и футера с ключом перевода подписи. */
type NavLink = {
  /** Ключ локализованного названия пункта. */
  labelKey: string;
  /** Якорь секции на странице. */
  path: string;
  /** Иконка для компактной навигации. */
  icon: JSX.Element;
};

/** Основные якоря одностраничного сайта. */
export const NAV_LINKS: NavLink[] = [
  { labelKey: "nav.home", path: "#home", icon: <AiOutlineHome /> },
  { labelKey: "nav.about", path: "#about", icon: <AiOutlineUser /> },
  {
    labelKey: "nav.experience",
    path: "#experience",
    icon: <AiOutlineBook />,
  },
  {
    labelKey: "nav.contact",
    path: "#contact",
    icon: <AiOutlineMessage />,
  },
];
