import React from "react";
import styles from "./button.module.scss"

type Props = {
  label: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: React.ReactNode;
  iconPosition?: string;
  type: "button" | "submit";
  classNames: string[];
};

const index = ({ label, handleClick, icon, classNames, type, iconPosition="left" }: Props) => {
  const styleClass = [styles.btn, ...classNames.map((name) => styles[name])].join(" ");
  return (
    <button type={type} onClick={handleClick} className={`${styleClass}`}>
      {icon && iconPosition === "left" &&( //opti flex order 
        <span className={styles.icon_wrapper}>{icon}</span>
      )}
      {label}
      {icon && iconPosition == "right" &&( //opti flex order 
        <span className={styles.icon_wrapper}>{icon}</span>
      )}
    </button>
  );
};

export default index;
