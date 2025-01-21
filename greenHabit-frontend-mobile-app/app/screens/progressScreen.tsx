/**
 * Ce fichier définit l'écran de suivi des progrès.
 * Il affiche les progrès de l'utilisateur, un classement et des badges.
 *
 * @module ProgressScreen
 */
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import { usersData, User } from '../../data/userData';

/**
 * Props pour le composant ProgressScreen.
 */
type ProgressScreenProps = {
  navigation: any;
};

/**
 * Composant pour l'écran de suivi des progrès.
 * @param {ProgressScreenProps} props - Les props du composant.
 * @returns {JSX.Element} L'écran de suivi des progrès.
 */
const ProgressScreen: React.FC<ProgressScreenProps> = ({ navigation }) => {
  // Données statiques pour les utilisateurs et leurs progrès
  const currentUser = usersData[0]; // Simule l'utilisateur actuel
  const otherUsers = usersData.slice(1); // Simule d'autres utilisateurs

  /**
   * Gère le partage des progrès.
   */
  const shareProgress = () => {
    Alert.alert('Partager', 'Partagez vos progrès sur les réseaux sociaux !');
    // Ici, vous pouvez intégrer une bibliothèque de partage comme `react-native-share`
  };

  /**
   * Rendu d'un utilisateur dans le classement.
   * @param {Object} param0 - Les propriétés de l'utilisateur.
   * @param {User} param0.item - L'utilisateur à afficher.
   * @param {number} param0.index - L'index de l'utilisateur dans la liste.
   * @returns {JSX.Element} L'utilisateur rendu.
   */
  const renderUser = ({ item, index }: { item: User; index: number }) => (
    <View style={styles.userCard}>
      <Text style={styles.rank}>#{index + 1}</Text>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <Text style={styles.userName}>{item.name}</Text>
      <Text style={styles.progressText}>{item.progress}%</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Tableau de Bord Social</Text>

      {/* Section des progrès de l'utilisateur actuel */}
      <View style={styles.currentUserSection}>
        <Text style={styles.sectionTitle}>Vos Progrès</Text>
        <View style={styles.currentUserCard}>
          <Image source={{ uri: currentUser.avatar }} style={styles.currentUserAvatar} />
          <Text style={styles.currentUserName}>{currentUser.name}</Text>
          <Text style={styles.currentUserProgress}>{currentUser.progress}%</Text>
          <TouchableOpacity style={styles.shareButton} onPress={shareProgress}>
            <Text style={styles.shareButtonText}>Partager</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Section du classement */}
      <Text style={styles.sectionTitle}>Classement</Text>
      <FlatList
        data={otherUsers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderUser}
        scrollEnabled={false} // Désactive le défilement interne pour permettre le défilement global
      />

      {/* Section des badges */}
      <Text style={styles.sectionTitle}>Badges</Text>
      <View style={styles.badgesContainer}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>🌱 Débutant</Text>
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>🌍 Éco-Warrior</Text>
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>♻️ Recyclage Pro</Text>
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
  header: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2c3e50',
  },
  currentUserSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2c3e50',
  },
  currentUserCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  currentUserAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  currentUserName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#2c3e50',
  },
  currentUserProgress: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2ecc71',
    marginBottom: 10,
  },
  shareButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: '#2ecc71',
  },
  shareButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  rank: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
    color: '#2c3e50',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    flex: 1,
    fontSize: 16,
    color: '#2c3e50',
  },
  progressText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2ecc71',
  },
  badgesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  badge: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#e0f7fa',
    alignItems: 'center',
  },
  badgeText: {
    fontSize: 14,
    color: '#2c3e50',
  },
});

export default ProgressScreen;