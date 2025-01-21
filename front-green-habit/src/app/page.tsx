"use client"; // Indique que ce composant est côté client

import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Utilisation de next/navigation pour rediriger
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Vérification du token dans localStorage
    const token = localStorage.getItem("token");

    if (token) {
      // Redirige vers /dashboard si le token est présent
      router.push("/pages/Dashboard");
    } else {
      // Redirige vers /authentication si le token est absent
      router.push("/pages/Landing");
    }
  }, [router]); // Dépendance sur router

  // Optionnellement, un état de chargement peut être affiché ici
  return (
    <div className={styles.container}>
      <p>Checking authentication...</p>
    </div>
  );
}
