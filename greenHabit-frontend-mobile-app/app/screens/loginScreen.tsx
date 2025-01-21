/**
 * Ce fichier définit l'écran de connexion de l'application.
 * Il permet à l'utilisateur de se connecter avec un email et un mot de passe.
 *
 * @module LoginScreen
 */
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { usersData, User } from '../../data/userData';

/**
 * Props pour le composant LoginScreen.
 */
type LoginScreenProps = {
  navigation: any;
};

/**
 * Composant pour l'écran de connexion.
 * @param {LoginScreenProps} props - Les props du composant.
 * @returns {JSX.Element} L'écran de connexion.
 */
const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /**
   * Gère la connexion de l'utilisateur.
   */
  const handleLogin = () => {
    const user = usersData.find((user) => user.email === email && user.password === password);
    if (user) {
      navigation.navigate('HomeStack'); // Redirige vers HomeStack après une connexion réussie
    } else {
      Alert.alert('Erreur', 'Email ou mot de passe incorrect.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Se connecter" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});

export default LoginScreen;