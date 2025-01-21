"use client";
import React from 'react';
import styles from "./page.module.scss";
import LogoutIcon from "@/assets/LogoutIcon";
import Button from "@/components/Button";

/**
 * @description Composant principal pour afficher une liste d'articles avec des boutons d'interaction.
 */
const Landing = () => {
    /**
     * @description Fonction appelée lorsqu'un bouton "Consulter" est cliqué.
     */
    const handleClick = () => {
        console.log("click !");
    };

    /**
     * Liste des articles à afficher sur la page.
     * @type {Array<{title: string, content: string}>}
     */
    const articles = [
        {
            title: "The Importance of Recycling",
            content: "Discuss the benefits of recycling and how it helps reduce waste and conserve resources."
        },
        {
            title: "Sustainable Energy Sources",
            content: "Explore various renewable energy sources like solar, wind, and hydroelectric power."
        },
        {
            title: "Zero Waste Lifestyle",
            content: "Provide tips on how to adopt a zero waste lifestyle and its impact on the environment."
        },
        {
            title: "The Role of Urban Green Spaces",
            content: "Highlight the importance of parks and green spaces in urban areas for biodiversity and mental health."
        },
        {
            title: "Eco-Friendly Transportation",
            content: "Discuss the benefits of public transport, biking, and electric vehicles in reducing carbon footprints."
        },
        {
            title: "Sustainable Fashion",
            content: "Explore the impact of fast fashion and promote sustainable clothing brands and practices."
        },
        {
            title: "Conservation of Water Resources",
            content: "Provide insights on water conservation techniques and their importance in combating climate change."
        },
        {
            title: "The Impact of Plastic Pollution",
            content: "Discuss the effects of plastic pollution on marine life and ecosystems, and ways to reduce plastic use."
        },
        {
            title: "Organic Farming Practices",
            content: "Explain the benefits of organic farming for health and the environment compared to conventional farming."
        },
        {
            title: "Community Initiatives for Sustainability",
            content: "Highlight local community efforts and initiatives aimed at promoting sustainability and environmental awareness."
        }
    ];

    return (
        <div className={styles.articles}>
            {articles.map((article, index) => (
                <div key={index} className={styles.article}>
                    <h2>{article.title}</h2>
                    <p>{article.content}</p>
                    <Button 
                        label="Consulter"
                        icon={<LogoutIcon fill="white" width={15} height={15} />}
                        classNames={["btn_primary", "btn_logout", "with_icon", "offset"]}
                        type="button"
                        handleClick={() => {
                            handleClick();
                        }}
                    />
                </div>
            ))}
        </div>
    );
};

export default Landing;
