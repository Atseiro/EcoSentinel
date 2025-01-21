"use client";
import React from "react";
import Button from "../Button";
import NavItem from "./NavItem";
import styles from "./navbar.module.scss"
import LogoutIcon from "@/assets/LogoutIcon";

// interface ImageData {
//   src: string;
//   width: number;
//   height: number;
//   blurDataURL: string | null;
//   blurWidth: number;
//   blurHeight: number;
// }

interface NavItem {
  path: string;
  label: string;
  icon?: React.ReactNode;
}

type Props = {
  navItems: NavItem[];
};

const index = ({ navItems }: Props) => {
  const isToken = localStorage.getItem('token')
  const handleClick = () => {
    localStorage.removeItem("token")
    window.location.href = "/pages/Authentification";
  };
  return (
    <aside className={`${styles.sidebar}`}>
      <ul>
        {navItems.map((item, key) => {
          return <NavItem key={key} navItem={item} />;
        })}
      </ul>
      {isToken &&
      <Button
        label="Logout"
        icon={<LogoutIcon fill="white" width={15} height={15} />}
        classNames={["btn_primary", "btn_logout", "with_icon", "offset"]}
        type="button"
        handleClick={() => {
          handleClick();
        }}
      ></Button>
      }
    </aside>
  );
};

export default index;
