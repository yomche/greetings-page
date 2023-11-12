import { ChangeEvent } from "react";
import styles from "./teaxtarea.module.scss";

interface TextAreaProps {
  name: string;
  placeholder: string;
  value: string;
  onInputChange?: (value: string) => void;
}

export const TextArea = ({
  name,
  placeholder,
  value,
  onInputChange,
}: TextAreaProps) => {
  const handleInputChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    onInputChange?.(evt.target.value);
  };

  return (
    <textarea
      name={name}
      rows={7}
      placeholder={placeholder}
      value={value}
      onChange={handleInputChange}
      className={styles.textarea}
    />
  );
};
