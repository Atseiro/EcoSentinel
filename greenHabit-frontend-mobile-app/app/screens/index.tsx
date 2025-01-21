import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootLayout from '../_layout';
import { AuthProvider } from '../../context/AuthContext'; // Importez le AuthProvider

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