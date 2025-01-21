import HomeIcon from "@/assets/HomeIcon";
import SalesIcon from "@/assets/SalesIcon";
import ProfileIcon from "@/assets/ProfileIcon";

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import styles from "./page.module.scss";
import FileIcon from "@/assets/FileIcon";

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

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body>
      <Header isLanding={true}/>
      <main className={styles.main}>
        <Navbar navItems={navItems}/>
        {children}
      </main>
    </body>
  );
}
