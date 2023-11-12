import { ChangeEvent } from "react";
import styles from "./input.module.scss";

interface TextInputProps {
  name: string;
  placeholder: string;
  value: string;
  format?: RegExp;
  error?: boolean;
  errorMessage?: string;
  onInputChange?: (value: string) => void;
}

export const TextInput = ({
  name,
  placeholder,
  value,
  error,
  errorMessage,
  onInputChange,
}: TextInputProps) => {
  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    onInputChange?.(evt.target.value);
  };

  return (
    <div className={styles.input}>
      <input
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
      {error && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
};
