import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../data/userData';

type AuthContextType = {
  user: User | null;
  login: (user: User) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean; // Pour gérer l'état de chargement initial
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true); // État de chargement initial

  // Vérifier si un utilisateur est déjà connecté au démarrage de l'application
  useEffect(() => {
    const checkLoggedInUser = async () => {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      setLoading(false); // Fin du chargement
    };

    checkLoggedInUser();
  }, []);

  // Fonction de connexion
  const login = async (user: User) => {
    await AsyncStorage.setItem('user', JSON.stringify(user)); // Enregistrer l'utilisateur dans AsyncStorage
    setUser(user);
  };

  // Fonction de déconnexion
  const logout = async () => {
    await AsyncStorage.removeItem('user'); // Supprimer l'utilisateur de AsyncStorage
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};