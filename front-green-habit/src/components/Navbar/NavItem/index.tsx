import React from "react";
import Link from "next/link";

import styles from "./navItem.module.scss";

/**
 * Propriétés acceptées par le composant NavItem.
 *
 * @typedef {Object} Props
 * @property {Object} navItem - L'élément de navigation à afficher.
 * @property {string} navItem.path - L'URL vers laquelle l'élément de navigation dirige.
 * @property {string} navItem.label - Le texte affiché pour l'élément de navigation.
 * @property {React.ReactNode} [navItem.icon] - Un icône associé à l'élément de navigation (optionnel).
 */
type Props = {
  navItem: {
    path: string;
    label: string;
    icon?: React.ReactNode;
  };
};

/**
 * Composant NavItem qui affiche un élément de navigation avec un label et une icône optionnelle.
 * L'élément est un lien cliquable qui redirige vers l'URL spécifiée par `path`.
 *
 * @param {Props} props - Les propriétés du composant.
 * @returns {React.Element} Le composant NavItem.
 *
 * @example
 * const navItem = {
 *   path: "/home",
 *   label: "Home",
 *   icon: <HomeIcon />
 * };
 * <NavItem navItem={navItem} />
 */
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

