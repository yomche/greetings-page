import classNames from "classnames";

import { ButtonTypesEnum } from "@types";

import styles from "./button.module.scss";

type Props = {
  /** Текст кнопки-ссылки. */
  title: string;
  /** Адрес перехода или файл для скачивания. */
  link?: string;
  /** Нужно ли скачать файл вместо обычного перехода. */
  isDownload?: boolean;
  /** Дополнительное действие по клику. */
  action?: () => void;
  /** Визуальный тип кнопки. */
  type?: ButtonTypesEnum;
};

/** Стилизованная ссылка, используемая как кнопка действия. */
export const LinkButton = ({
  title,
  link,
  action,
  isDownload = false,
  type = ButtonTypesEnum.PRIMARY,
}: Props) => {
  return (
    <a
      href={link}
      download={isDownload}
      onClick={action}
      className={classNames(
        styles.button,
        type === ButtonTypesEnum.PRIMARY && styles.primary
      )}
    >
      {title}
    </a>
  );
};
