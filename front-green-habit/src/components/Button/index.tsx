import React from "react";
import styles from "./button.module.scss";

/**
 * @typedef {Object} Props
 * @property {string} label - Le texte du bouton.
 * @property {React.MouseEventHandler<HTMLButtonElement>} [handleClick] - La fonction appelée lors du clic sur le bouton.
 * @property {React.ReactNode} [icon] - L'icône à afficher dans le bouton.
 * @property {"left" | "right"} [iconPosition] - La position de l'icône par rapport au label, par défaut "left".
 * @property {"button" | "submit"} type - Le type du bouton (button ou submit).
 * @property {string[]} classNames - Liste des classes CSS supplémentaires à appliquer au bouton.
 */
type Props = {
  label: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: React.ReactNode;
  iconPosition?: string;
  type: "button" | "submit";
  classNames: string[];
};

/**
 * @description Composant Button qui affiche un bouton personnalisable avec label, icône et styles dynamiques.
 * @param {Props} props - Les propriétés du composant.
 * @returns {JSX.Element} Le composant Button.
 */




const Button = ({
  label,
  handleClick,
  icon,
  classNames,
  type,
  iconPosition = "left",
}: Props) => {
  const styleClass = [styles.btn, ...classNames.map((name) => styles[name])].join(" ");
  return (
    <button type={type} onClick={handleClick} className={`${styleClass}`}>
      {icon && iconPosition === "left" && (
        // Affiche l'icône à gauche du label
        <span className={styles.icon_wrapper}>{icon}</span>
      )}
      {label}
      {icon && iconPosition === "right" && (
        // Affiche l'icône à droite du label
        <span className={styles.icon_wrapper}>{icon}</span>
      )}
    </button>
  );
};

export default Button;
