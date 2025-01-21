/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import styles from "./card.module.scss";
import Button from "../Button";
import ArrowIcon from "@/assets/ArrowIcon";

type Props = {
  icon?: React.ReactNode;
  withButton: boolean;
  label?: string;
  main: string;
  size: string;
  dataset?: any;
};

const index = ({ label, icon, size, main, withButton, dataset }: Props) => {
  // console.log(styles);
  // console.log(dataset);
  // const styleClass = [styles.btn, ...classNames.map((name) => styles[name])].join(" ");
  return (
    <div
      className={`${styles.card_container} ${styles.card_container}_${size}`}
    >
      <div className={styles.card_header}>
        <div className={styles.card_header_content}>
          {label && <p className={styles.card_header_content_label}>{label}</p>}
          <p className={styles.card_header_content_main}>{main}</p>
        </div>

        {icon && (
          <div className={styles.icon_container}>
           {icon}
          </div>
        )}
        {withButton && (
          <Button
            label="View all"
            type="button"
            classNames={["btn_secondary", "with_icon"]}
            icon={<ArrowIcon fill="black" width={15} height={15} />}
            iconPosition="right"
          ></Button>
        )}
      </div>
      <div className={styles.card_content}>
        {dataset && (
          <ul>
            {dataset.map((item: any, key: number) => {
              return (
                <li key={key}>
                  <p>{`${item.month}, ${item.day}, ${item.year}`}</p>
                  <div>
                    <p>${item.price}</p>
                    <span className={styles.icon_wrapper}>{item.icon}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default index;
