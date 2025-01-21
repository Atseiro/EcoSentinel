/**
 * @file DashboardLayout.js
 * @description Mise en page principale pour le tableau de bord, incluant l'en-tête, la barre de navigation et le contenu principal.
 */

import HomeIcon from "@/assets/HomeIcon";
import SalesIcon from "@/assets/SalesIcon";
import ProfileIcon from "@/assets/ProfileIcon";
import FileIcon from "@/assets/FileIcon";

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import styles from "@/app/pages/Dashboard/page.module.scss";

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
 * @returns {JSX.Element} Le composant de mise en page pour le tableau de bord.
 */
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body>
      {/* En-tête du tableau de bord */}
      <Header isDashboard={true} />

      {/* Contenu principal avec navigation et contenu */}
      <main className={styles.main}>
        <Navbar navItems={navItems} />
        {children}
      </main>
    </body>
  );
}
