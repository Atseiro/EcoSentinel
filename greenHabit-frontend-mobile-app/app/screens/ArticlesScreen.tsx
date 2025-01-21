/**
 * Ce fichier définit l'écran des articles et tutoriels.
 * Il affiche des articles suggérés en fonction des objectifs de l'utilisateur
 * et une liste de tous les articles disponibles.
 *
 * @module ArticlesScreen
 */
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

/**
 * Données statiques pour les articles.
 */
const articlesData = [
  {
    id: 1,
    title: '10 astuces pour réduire sa consommation d’énergie',
    category: 'Énergie',
    image: 'https://example.com/energy.jpg',
    content: 'Découvrez des astuces simples pour réduire votre consommation d’énergie au quotidien.',
  },
  {
    id: 2,
    title: 'Comment passer au zéro déchet en 5 étapes',
    category: 'Déchets',
    image: 'https://example.com/zero-waste.jpg',
    content: 'Apprenez à réduire vos déchets et à adopter un mode de vie zéro déchet.',
  },
  {
    id: 3,
    title: 'Les avantages du vélo pour la planète',
    category: 'Transport',
    image: 'https://example.com/bike.jpg',
    content: 'Découvrez pourquoi le vélo est un moyen de transport écologique et bénéfique pour la santé.',
  },
  {
    id: 4,
    title: 'Adopter une alimentation locale et de saison',
    category: 'Alimentation',
    image: 'https://example.com/local-food.jpg',
    content: 'Pourquoi privilégier les produits locaux et de saison pour réduire votre empreinte écologique.',
  },
];

/**
 * Composant pour l'écran des articles.
 * @returns {JSX.Element} L'écran des articles.
 */
const ArticlesScreen: React.FC = () => {
  // Simuler les objectifs de l'utilisateur (à remplacer par des données dynamiques plus tard)
  const userGoals = ['Déchets', 'Transport']; // Exemple d'objectifs de l'utilisateur

  // Filtrer les articles en fonction des objectifs de l'utilisateur
  const suggestedArticles = articlesData.filter((article) =>
    userGoals.includes(article.category)
  );

  // Rendu d'un article
  const renderArticle = ({ item }: { item: typeof articlesData[0] }) => (
    <TouchableOpacity style={styles.articleCard}>
      <Image source={{ uri: item.image }} style={styles.articleImage} />
      <View style={styles.articleContent}>
        <Text style={styles.articleTitle}>{item.title}</Text>
        <Text style={styles.articleCategory}>{item.category}</Text>
        <Text style={styles.articleDescription}>{item.content}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Articles et Tutoriels</Text>

      {/* Section des articles suggérés */}
      <Text style={styles.sectionTitle}>Suggestions pour vous</Text>
      <FlatList
        data={suggestedArticles}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderArticle}
        scrollEnabled={false} // Désactive le défilement interne pour permettre le défilement global
      />

      {/* Section de tous les articles */}
      <Text style={styles.sectionTitle}>Tous les articles</Text>
      <FlatList
        data={articlesData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderArticle}
        scrollEnabled={false} // Désactive le défilement interne pour permettre le défilement global
      />
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2c3e50',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2c3e50',
  },
  articleCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  articleImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  articleContent: {
    padding: 15,
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#2c3e50',
  },
  articleCategory: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 10,
  },
  articleDescription: {
    fontSize: 14,
    color: '#34495e',
  },
});

export default ArticlesScreen;