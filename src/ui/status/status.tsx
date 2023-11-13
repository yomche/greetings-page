import classNames from "classnames";
import styles from "./status.module.scss";

interface StatusProps {
  status?: string;
  message?: string;
}

export const Status = ({ status, message }: StatusProps) => {
  return (
    <div className={classNames(styles.status, status && styles[status])}>
      {message}
    </div>
  );
};
