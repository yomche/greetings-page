import classNames from "classnames";
import styles from "./status.module.scss";

interface StatusProps {
  /** Тип статуса, определяющий цвет уведомления. */
  status?: string;
  /** Текст уведомления. */
  message?: string;
}

/** Небольшое уведомление о состоянии отправки формы. */
export const Status = ({ status, message }: StatusProps) => {
  return (
    <div className={classNames(styles.status, status && styles[status])}>
      {message}
    </div>
  );
};
