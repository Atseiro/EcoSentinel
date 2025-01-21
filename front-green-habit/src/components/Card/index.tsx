/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import styles from "./card.module.scss";
import Button from "../Button";
import ArrowIcon from "@/assets/ArrowIcon";

/**
 * @typedef {Object} Props
 * @property {React.ReactNode} [icon] - L'icône à afficher dans la carte.
 * @property {boolean} withButton - Détermine si un bouton doit être affiché dans la carte.
 * @property {string} [label] - Le label à afficher en haut de la carte.
 * @property {string} main - Le contenu principal de la carte.
 * @property {string} size - La taille de la carte, utilisée pour appliquer des styles spécifiques.
 * @property {Array<{month: string, day: number, year: number, price: number, icon: React.ReactNode}>} [dataset] - Ensemble de données à afficher dans le contenu de la carte.
 */
type Props = {
  icon?: React.ReactNode;
  withButton: boolean;
  label?: string;
  main: string;
  size: string;
  dataset?: any;
};

/**
 * @description Composant Card permettant d'afficher des informations structurées avec ou sans bouton et icône.
 * @param {Props} props - Les propriétés du composant Card.
 * @returns {JSX.Element} Le composant Card.
 */


const Card = ({ label, icon, size, main, withButton, dataset }: Props) => {
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

export default Card;
