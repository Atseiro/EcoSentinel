/**
 * Ce fichier est le point d'entrée de l'application.
 * Il configure le fournisseur de contexte d'authentification et la navigation.
 *
 * @module Index
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootLayout from '../_layout';
import { AuthProvider } from '../../context/AuthContext'; // Importez le AuthProvider

/**
 * Composant racine de l'application.
 * @returns {JSX.Element} La structure de base de l'application.
 */
export default function Index() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <NavigationContainer>
          <RootLayout />
        </NavigationContainer>
      </AuthProvider>
    </SafeAreaProvider>
  );
}