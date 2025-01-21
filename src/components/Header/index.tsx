import React from "react";
import styles from "./header.module.scss";
import Logo from "@/assets/Logo";
import SearchIcon from "@/assets/SearchIcon";

type Props = object;

const index = ({}: Props) => {
  return (
    <header className={styles.header_main}>
      <div className={styles.header_logo}>
      {<Logo width={45} height={30} fill="black" />}
        <h1>My Dashboard</h1>
      </div>
      <div className={styles.header_searchbar_wrapper}>
        <div className={styles.header_searchbar}>
        {<SearchIcon width={15} height={15} fill="black" />}
          <input type="search" placeholder="Search" />
        </div>
      </div>
    </header>
  );
};

export default index;
