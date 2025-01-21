/**
 * @file Authentification.js
 * @description Composant d'authentification permettant aux utilisateurs de se connecter à leur compte.
 * Inclut des validations de formulaire, des appels API et des redirections.
 */

"use client";

import Image from "next/image";
import authJpg from "../../../../public/auth.jpg";
import styles from "./authentification.module.scss";
import Button from "@/components/Button";
import { useState } from "react";
import ArrowIcon from "@/assets/ArrowIcon";
import Logo from "@/assets/Logo";

/**
 * @component
 * @returns {JSX.Element} Le composant d'authentification.
 */
export default function Authentification() {
  // États pour l'email, le mot de passe et les erreurs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  /**
   * Gère les changements dans le champ email.
   * @param {React.ChangeEvent<HTMLInputElement>} e - L'événement de changement.
   */
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  /**
   * Gère les changements dans le champ mot de passe.
   * @param {React.ChangeEvent<HTMLInputElement>} e - L'événement de changement.
   */
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  /**
   * Valide le formulaire avant soumission.
   * @returns {boolean} true si le formulaire est valide, sinon false.
   */
  const validateForm = () => {
    let valid = true;
    let emailError = "";
    let passwordError = "";

    // Validation de l'email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
      emailError = "L'email est requis";
      valid = false;
    } else if (!emailPattern.test(email)) {
      emailError = "L'email est invalide";
      valid = false;
    }

    // Validation du mot de passe
    if (!password) {
      passwordError = "Le mot de passe est requis";
      valid = false;
    } else if (password.length < 6) {
      passwordError = "Le mot de passe doit comporter au moins 6 caractères";
      valid = false;
    }

    setErrors({ email: emailError, password: passwordError });

    return valid;
  };

  /**
   * Redirige l'utilisateur vers la page d'accueil.
   */
  const handleClick = () => {
    window.location.href = "/pages/Landing";
  };

  /**
   * Soumet le formulaire et gère l'authentification de l'utilisateur.
   * @param {React.FormEvent<HTMLFormElement>} e - L'événement de soumission.
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        console.log("Formulaire soumis", { email, password });

        // Appel API pour l'authentification
        const response = await fetch("http://localhost:8888/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: email, // Correspond au login
            password: password,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Connexion réussie", data);

          localStorage.setItem("token", data.accessToken);
          window.location.href = "/pages/Dashboard";
        } else {
          const errorData = await response.json();
          setErrorMessage(errorData.message || "Erreur lors de la connexion");
        }
      } catch (error) {
        setErrorMessage("Erreur de connexion au serveur");
        console.error("Erreur lors de la connexion:", error);
      }
    } else {
      setErrorMessage("Veuillez remplir tous les champs.");
    }
  };

  return (
    <div className={styles.auth_container}>
      <div className={styles.auth_img}>
        <Image
          src={authJpg}
          alt="background"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.auth_content}>
        <div className={styles.auth_logo} onClick={handleClick}>
          <Logo width={82} height={59} fill="black" />
          <h1>My Dashboard</h1>
        </div>
        <h1>Login to your account</h1>
        <form className={styles.auth_form} onSubmit={handleSubmit}>
          <div className={styles.auth_form_field}>
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </div>

          <div className={styles.auth_form_field}>
            <label htmlFor="password">Password :</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password}</p>
            )}
          </div>

          {errorMessage && (
            <p style={{ color: "red", textAlign: "center" }}>{errorMessage}</p>
          )}

          <Button
            label="Login"
            classNames={["btn_primary", "with_icon"]}
            icon={<ArrowIcon fill="white" width={15} height={15} />}
            type="submit"
            iconPosition="right"
          />
        </form>
      </div>
    </div>
  );
}
