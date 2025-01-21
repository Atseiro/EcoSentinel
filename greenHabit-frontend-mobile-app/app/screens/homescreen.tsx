/**
 * Ce fichier définit l'écran d'accueil de l'application.
 * Il affiche des informations sur l'utilisateur, l'objectif du jour, les progrès,
 * un article suggéré et la dernière notification.
 *
 * @module HomeScreen
 */
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

/**
 * Données statiques pour la page d'accueil.
 */
const user = {
  name: 'Alice Dupont',
  avatar: 'https://example.com/avatar.jpg',
  dailyGoal: 'Réduire la consommation d’eau de 10% aujourd’hui',
  progress: 75, // Progression en pourcentage
  suggestedArticle: {
    title: '10 astuces pour réduire sa consommation d’énergie',
    image: 'https://example.com/energy-tips.jpg',
  },
  latestNotification: {
    message: 'N’oubliez pas d’éteindre les lumières avant de sortir ! 🌱',
    timestamp: '2025-01-21T08:00:00Z',
  },
};

/**
 * Composant pour l'écran d'accueil.
 * @returns {JSX.Element} L'écran d'accueil.
 */
const HomeScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Section de bienvenue */}
      <View style={styles.profileSection}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <Text style={styles.userName}>Bienvenue, {user.name} !</Text>
      </View>

      {/* Objectif du jour */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Objectif du jour</Text>
        <View style={styles.dailyGoalCard}>
          <Text style={styles.dailyGoalText}>{user.dailyGoal}</Text>
        </View>
      </View>

      {/* Progrès */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Vos progrès</Text>
        <View style={styles.progressCard}>
          <Text style={styles.progressText}>{user.progress}%</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${user.progress}%` }]} />
          </View>
        </View>
      </View>

      {/* Article suggéré */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Article suggéré</Text>
        <TouchableOpacity style={styles.articleCard}>
          <Image source={{ uri: user.suggestedArticle.image }} style={styles.articleImage} />
          <Text style={styles.articleTitle}>{user.suggestedArticle.title}</Text>
        </TouchableOpacity>
      </View>

      {/* Dernière notification */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dernière notification</Text>
        <View style={styles.notificationCard}>
          <Text style={styles.notificationMessage}>{user.latestNotification.message}</Text>
          <Text style={styles.notificationTimestamp}>
            {new Date(user.latestNotification.timestamp).toLocaleString()}
          </Text>
        </View>
      </View>
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
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  userName: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2c3e50',
  },
  dailyGoalCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  dailyGoalText: {
    fontSize: 16,
    color: '#34495e',
  },
  progressCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  progressText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2ecc71',
    marginBottom: 10,
  },
  progressBar: {
    height: 10,
    backgroundColor: '#ecf0f1',
    borderRadius: 5,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#2ecc71',
    borderRadius: 5,
  },
  articleCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  articleImage: {
    width: '100%',
    height: 150,
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 15,
    color: '#2c3e50',
  },
  notificationCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  notificationMessage: {
    fontSize: 16,
    color: '#34495e',
  },
  notificationTimestamp: {
    fontSize: 12,
    color: '#7f8c8d',
    marginTop: 5,
    textAlign: 'right',
  },
});

export default HomeScreen;