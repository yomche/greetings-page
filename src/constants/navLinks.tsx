import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

export const navLinks = [
  { name: "Home", path: "#", icon: <AiOutlineHome /> },
  { name: "About", path: "#about", icon: <AiOutlineUser /> },
  { name: "Experience", path: "#experience", icon: <BiBook /> },
  { name: "Services", path: "#services", icon: <RiServiceLine /> },
  { name: "Contact", path: "#contact", icon: <BiMessageSquareDetail /> },
];
