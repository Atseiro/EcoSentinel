import React from "react";
import Link from "next/link";

import styles from "./navItem.module.scss"
type Props = {
  navItem: {
    path: string;
    label: string;
    icon?: React.ReactNode;
  };
};

const Index = ({ navItem }: Props) => {
  return (
    <li className={`${styles.navItem} ${styles.with_icon}`}>
      {navItem.icon && (
        <span className={styles.icon_wrapper}>{navItem.icon}</span>
      )}
      <Link href={navItem.path}>{navItem.label}</Link>
    </li>
  );
};

export default Index;
