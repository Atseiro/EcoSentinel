"use client"

import Image from "next/image";
import authJpg from "../../../public/auth.jpg";
// import arrowSvg from "../../../public/arrow.svg"
import styles from "./authentification.module.scss";
import Button from "@/components/Button"
import { useState } from "react";
import ArrowIcon from "@/assets/ArrowIcon";
import Logo from "@/assets/Logo";

export default function Authentification() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  // Fonction pour gérer le changement de l'email
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // Fonction pour gérer le changement du mot de passe
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // Fonction pour valider le formulaire
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

  // Fonction qui est appelée lors de la soumission du formulaire
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      // Si les champs sont valides, on peut soumettre le formulaire
      console.log("Formulaire soumis");
      console.log("Email:", email);
      console.log("Password:", password);
    }
  };
  return (
    <div className={styles.auth_container}>
      <div className={styles.auth_img}>
        <Image
          src={authJpg}
          alt="background"
          layout="fill" // Cette propriété permet à l'image de remplir l'élément parent
          objectFit="cover" // Permet à l'image de couvrir toute la surface sans déformation
        />
      </div>
      <div className={styles.auth_content}>
        <div className={styles.auth_logo}>
        {<Logo width={82} height={59} fill="black" />}
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
            <Button
            label="Login"
            classNames={["btn_primary", "with_icon"]}
            icon={<ArrowIcon fill="white" width={15} height={15} />}
            type="submit"
            iconPosition="right"
            ></Button>
          
        </form>
      </div>
    </div>
  );
}
