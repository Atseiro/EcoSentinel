"use client";
import React from "react";
import styles from "./header.module.scss";
import Logo from "@/assets/Logo";
import SearchIcon from "@/assets/SearchIcon";
import Button from "@/components/Button";

/**
 * @typedef {Object} Props
 * @property {boolean} [isLanding] - Indique si le header est utilisé sur la page d'accueil.
 * @property {boolean} [isDashboard] - Indique si le header est utilisé sur le tableau de bord.
 */
type Props = {
  isLanding?: boolean;
  isDashboard?: boolean;
};

/**
 * @description Composant Header affichant le logo, une barre de recherche et un bouton en fonction de la page.
 * @param {Props} props - Les propriétés du composant Header.
 * @returns {JSX.Element} Le composant Header.
 */



const Header = ({ isLanding, isDashboard }: Props) => {
  /**
   * @description Gère le clic sur le bouton de connexion.
   */
  const handleClick = () => {
    window.location.href = "/pages/Authentification";
  };

  return (
    <header className={styles.header_main}>
      <div className={styles.header_logo}>
        {<Logo width={45} height={30} fill="black" />}
        <h1>My Dashboard</h1>
      </div>
      {!isDashboard && (
        <div className={styles.header_searchbar_wrapper}>
          <div className={styles.header_searchbar}>
            {<SearchIcon width={15} height={15} fill="black" />}
            <input type="search" placeholder="Search" />
          </div>
        </div>
      )}
      {isLanding && (
        <Button
          label="se connecter"
          handleClick={() => {
            handleClick();
          }}
          type="button"
          classNames={["btn_primary"]}
        />
      )}
    </header>
  );
};

export default Header;
