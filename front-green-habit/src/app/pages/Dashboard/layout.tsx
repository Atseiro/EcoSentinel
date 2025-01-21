import HomeIcon from "@/assets/HomeIcon";
import SalesIcon from "@/assets/SalesIcon";
import ProfileIcon from "@/assets/ProfileIcon";

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import styles from "@/app/pages/Dashboard/page.module.scss";

const navItems = [
  {
    path: "/pages/Dashboard",
    label: "Dashboard",
    icon: <HomeIcon fill="black" width={15} height={15} />,
  },
  {
    path: "/sales",
    label: "Sales",
    icon: <SalesIcon fill="black" width={15} height={15} />,
  },
  {
    path: "/profile",
    label: "Profile",
    icon: <ProfileIcon fill="black" width={15} height={15} />,
  },
];

// src/app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body>
      <Header />
      <main className={styles.main}>
        <Navbar navItems={navItems} />
        {children}
      </main>
    </body>
  );
}
