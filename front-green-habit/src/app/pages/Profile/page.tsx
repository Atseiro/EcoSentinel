"use client";

import Card from "@/components/Card";
import ProfileIcon from "@/assets/ProfileIcon";
import styles from "./page.module.scss";

/**
 * @description Composant de page de profil, affichant les informations principales de l'utilisateur dans une carte.
 * @returns {JSX.Element} Le composant de la page de profil.
 */
export default function Profile() {
    return (
        <div className={styles.home_container}>
            <Card
                label="Username"
                main={`name`}
                icon={<ProfileIcon fill="white" width={20} height={20}/>} 
                size="medium"
                withButton={false}
            />
        </div>
    );
}
