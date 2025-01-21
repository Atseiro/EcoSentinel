/**
 * Ce fichier définit l'écran des notifications.
 * Il permet à l'utilisateur de gérer les paramètres de notification
 * et affiche les notifications récentes.
 *
 * @module NotificationsScreen
 */
import React, { useState } from 'react';
import { View, Text, Switch, FlatList, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { notificationsData, Notification } from '../../data/notificationsData';

/**
 * Type pour les types de notification.
 */
type NotificationType = 'reminder' | 'motivation' | 'general';

/**
 * Composant pour l'écran des notifications.
 * @returns {JSX.Element} L'écran des notifications.
 */
const NotificationsScreen: React.FC = () => {
  const [notificationSettings, setNotificationSettings] = useState({
    reminder: true,
    motivation: true,
    general: true,
  });

  /**
   * Bascule les paramètres de notification.
   * @param {NotificationType} type - Le type de notification à basculer.
   */
  const toggleNotificationSetting = (type: NotificationType) => {
    setNotificationSettings((prevSettings) => ({
      ...prevSettings,
      [type]: !prevSettings[type],
    }));
  };

  // Filtrer les notifications en fonction des paramètres utilisateur
  const filteredNotifications = notificationsData.filter(
    (notification) => notificationSettings[notification.type]
  );

  /**
   * Rendu d'une notification.
   * @param {Object} param0 - Les propriétés de la notification.
   * @param {Notification} param0.item - La notification à afficher.
   * @returns {JSX.Element} La notification rendue.
   */
  const renderNotification = ({ item }: { item: Notification }) => (
    <View style={[styles.notificationContainer, styles[item.type]]}>
      <Text style={styles.notificationMessage}>{item.message}</Text>
      <Text style={styles.timestamp}>{new Date(item.timestamp).toLocaleString()}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Paramètres des Notifications</Text>

      {/* Paramètres de notification */}
      <View style={styles.settingsContainer}>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Rappels</Text>
          <Switch
            value={notificationSettings.reminder}
            onValueChange={() => toggleNotificationSetting('reminder')}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={notificationSettings.reminder ? '#2ecc71' : '#f4f3f4'}
          />
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Messages Motivants</Text>
          <Switch
            value={notificationSettings.motivation}
            onValueChange={() => toggleNotificationSetting('motivation')}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={notificationSettings.motivation ? '#2ecc71' : '#f4f3f4'}
          />
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Notifications Générales</Text>
          <Switch
            value={notificationSettings.general}
            onValueChange={() => toggleNotificationSetting('general')}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={notificationSettings.general ? '#2ecc71' : '#f4f3f4'}
          />
        </View>
      </View>

      {/* Liste des notifications filtrées */}
      <Text style={styles.subHeader}>Notifications Récentes</Text>
      <FlatList
        data={filteredNotifications}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderNotification}
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
  subHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#2c3e50',
  },
  settingsContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  settingText: {
    fontSize: 16,
    color: '#34495e',
  },
  notificationContainer: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  reminder: {
    borderLeftWidth: 5,
    borderLeftColor: '#81b0ff',
  },
  motivation: {
    borderLeftWidth: 5,
    borderLeftColor: '#2ecc71',
  },
  general: {
    borderLeftWidth: 5,
    borderLeftColor: '#f1c40f',
  },
  notificationMessage: {
    fontSize: 16,
    color: '#2c3e50',
  },
  timestamp: {
    fontSize: 12,
    color: '#7f8c8d',
    marginTop: 5,
    textAlign: 'right',
  },
});

export default NotificationsScreen;