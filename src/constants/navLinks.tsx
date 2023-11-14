import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineMessage,
  AiOutlineBook,
} from "react-icons/ai";

export const navLinks = [
  { name: "Home", path: "#home", icon: <AiOutlineHome /> },
  { name: "About", path: "#about", icon: <AiOutlineUser /> },
  {
    name: "Experience",
    path: "#experience",
    icon: <AiOutlineBook />,
  },
  {
    name: "Contact",
    path: "#contact",
    icon: <AiOutlineMessage />,
  },
];
