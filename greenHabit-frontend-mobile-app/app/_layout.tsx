import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Importez les icônes

import LoginScreen from './screens/loginScreen';
import HomeScreen from "./screens/homescreen";
import GoalsScreen from "./screens/goalscreen";
import NotificationsScreen from "./screens/notificationsscreen";
import ScanScreen from "./screens/scanscreen";
import ProgressScreen from './screens/progressScreen';
import ArticlesScreen from './screens/ArticlesScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Définir un type pour les noms d'icônes valides
type IconName = 'home' | 'home-outline' | 'flag' | 'flag-outline' | 'notifications' | 'notifications-outline' | 'camera' | 'camera-outline' | 'stats-chart' | 'stats-chart-outline' | 'book' | 'book-outline';

function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: IconName = 'home'; // Valeur par défaut

          // Définir les icônes pour chaque onglet
          if (route.name === 'HomeTab') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'GoalsTab') {
            iconName = focused ? 'flag' : 'flag-outline'; // Utilisez 'flag' pour les objectifs
          } else if (route.name === 'ScanTab') {
            iconName = focused ? 'camera' : 'camera-outline';
          } else if (route.name === 'ProgressTab') {
            iconName = focused ? 'stats-chart' : 'stats-chart-outline'; // Utilisez 'stats-chart' pour les progrès
          } else if (route.name === 'ArticlesTab') {
            iconName = focused ? 'book' : 'book-outline';
          }

          // Retourner l'icône correspondante
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2ecc71', // Couleur active (vert)
        tabBarInactiveTintColor: '#7f8c8d', // Couleur inactive (gris)
        tabBarStyle: {
          backgroundColor: '#fff', // Fond blanc pour la barre de navigation
          borderTopWidth: 0, // Supprimer la bordure supérieure
          elevation: 10, // Ombre pour un effet de profondeur
        },
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{ tabBarLabel: 'Accueil', headerShown: false }}
      />
      <Tab.Screen
        name="GoalsTab"
        component={GoalsScreen}
        options={{ tabBarLabel: 'Objectifs', headerShown: false }}
      />
      <Tab.Screen
        name="NotificationsTab"
        component={NotificationsScreen}
        options={{ tabBarLabel: 'Notifications', headerShown: false }}
      />
      <Tab.Screen
        name="ScanTab"
        component={ScanScreen}
        options={{ tabBarLabel: 'Scanner', headerShown: false }}
      />
      <Tab.Screen
        name="ProgressTab"
        component={ProgressScreen}
        options={{ tabBarLabel: 'Progrès', headerShown: false }}
      />
      <Tab.Screen
        name="ArticlesTab"
        component={ArticlesScreen}
        options={{ tabBarLabel: 'Articles', headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default function RootLayout() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeStack"
        component={HomeTabs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}