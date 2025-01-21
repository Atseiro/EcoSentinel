/**
 * @file LandingLayout.js
 * @description Mise en page principale pour la page d'accueil, incluant l'en-tête, la barre de navigation et le contenu principal.
 */

import HomeIcon from "@/assets/HomeIcon";
import SalesIcon from "@/assets/SalesIcon";
import ProfileIcon from "@/assets/ProfileIcon";

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import styles from "./page.module.scss";
import FileIcon from "@/assets/FileIcon";

/**
 * Liste des éléments de navigation affichés dans la barre de navigation.
 * @type {Array<{path: string, label: string, icon: JSX.Element}>}
 */
const navItems = [
  {
    path: "/pages/Dashboard",
    label: "Dashboard",
    icon: <HomeIcon fill="black" width={15} height={15} />,
  },
  {
    path: "/pages/Landing",
    label: "Articles",
    icon: <FileIcon fill="black" width={15} height={15} />,
  },
  {
    path: "",
    label: "Sales",
    icon: <SalesIcon fill="black" width={15} height={15} />,
  },
  {
    path: "/pages/Profile",
    label: "Profile",
    icon: <ProfileIcon fill="black" width={15} height={15} />,
  },
];

/**
 * @component
 * @param {Object} props - Les props du composant.
 * @param {React.ReactNode} props.children - Le contenu principal à afficher dans la mise en page.
 * @returns {JSX.Element} Le composant de mise en page pour la page d'accueil.
 */
export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body>
      {/* En-tête de la page d'accueil */}
      <Header isLanding={true} />

      {/* Contenu principal avec navigation et contenu */}
      <main className={styles.main}>
        <Navbar navItems={navItems} />
        {children}
      </main>
    </body>
  );
}
