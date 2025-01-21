"use client";
import React from "react";
import Button from "../Button";
import NavItem from "./NavItem";
import styles from "./navbar.module.scss";
import LogoutIcon from "@/assets/LogoutIcon";

/**
 * Représente un élément de navigation dans le menu latéral.
 *
 * @typedef {Object} NavItem
 * @property {string} path - L'URL à laquelle l'élément de navigation mène.
 * @property {string} label - Le texte affiché pour l'élément de navigation.
 * @property {React.ReactNode} [icon] - Un icône associé à l'élément de navigation (optionnel).
 */
interface NavItem {
  path: string;
  label: string;
  icon?: React.ReactNode;
}


/**
 * Propriétés acceptées par le composant Sidebar.
*
* @typedef {Object} Props
* @property {NavItem[]} navItems - Liste des éléments de navigation à afficher dans la barre latérale.
*/
type Props = {
  navItems: NavItem[];
};

/**
 * Composant Sidebar pour afficher les éléments de navigation et le bouton de déconnexion.
 *
 * @param {Props} props - Les propriétés du composant.
 * @returns {React.Element} Le composant Sidebar.
 *
 * @example
 * const navItems = [
 *   { path: "/home", label: "Home", icon: <HomeIcon /> },
 *   { path: "/profile", label: "Profile", icon: <ProfileIcon /> }
 * ];
 * <Sidebar navItems={navItems} />
 */
const index = ({ navItems }: Props) => {
  const isToken = localStorage.getItem('token');

  /**
   * Gère la déconnexion de l'utilisateur en supprimant le token local et en redirigeant vers la page d'authentification.
   */
  const handleClick = () => {
    localStorage.removeItem("token");
    window.location.href = "/pages/Authentification";
  };

  return (
    <aside className={`${styles.sidebar}`}>
      <ul>
        {navItems.map((item, key) => {
          return <NavItem key={key} navItem={item} />;
        })}
      </ul>
      {isToken && (
        <Button
          label="Logout"
          icon={<LogoutIcon fill="white" width={15} height={15} />}
          classNames={["btn_primary", "btn_logout", "with_icon", "offset"]}
          type="button"
          handleClick={() => {
            handleClick();
          }}
        />
      )}
    </aside>
  );
};

export default index;
