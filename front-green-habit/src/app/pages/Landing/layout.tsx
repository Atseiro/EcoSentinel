import HomeIcon from "@/assets/HomeIcon";
import SalesIcon from "@/assets/SalesIcon";
import ProfileIcon from "@/assets/ProfileIcon";

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

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

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body>
      <Header />
      <main>
        <Navbar navItems={navItems} />
        {children}
      </main>
    </body>
  );
}
