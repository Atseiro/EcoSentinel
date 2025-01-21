require('dotenv').config(); // Chargement des variables d'environnement depuis le fichier .env

const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); // Utilisé pour le hachage des mots de passe

// Middleware pour analyser les requêtes JSON
app.use(express.json());

let refreshTokens = []; // Stockage des refresh tokens en mémoire (à remplacer par une vraie base de données en production)

// Base de données utilisateur en mémoire (pour des fins de démonstration, remplacez par une base de données réelle en production)
const users = [
  { username: 'email1@gmail.com', password: bcrypt.hashSync('password1', 10) }, // Mot de passe pré-haché pour l'exemple
  { username: 'email2@gmail.com', password: bcrypt.hashSync('password2', 10) },
];

// Route pour générer un nouveau Access Token en utilisant un Refresh Token valide
app.post('/token', (req, res) => {
  const refreshToken = req.body.token;

  // Vérification de la présence du Refresh Token
  if (!refreshToken) return res.sendStatus(401); // Unauthorized si le refresh token est manquant

  // Vérification si le Refresh Token est valide et enregistré
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403); // Forbidden si le refresh token est invalide

  // Vérification du Refresh Token
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // Forbidden si le Refresh Token est invalide ou expiré

    // Génération d'un nouvel Access Token pour l'utilisateur
    const accessToken = generateAccessToken({ name: user.name });
    res.json({ accessToken: accessToken }); // Renvoi du nouvel Access Token
  });
});

// Route pour déconnecter un utilisateur et supprimer le Refresh Token
app.delete('/logout', (req, res) => {
  // Suppression du Refresh Token de la liste
  refreshTokens = refreshTokens.filter(token => token !== req.body.token);
  res.sendStatus(204); // No Content, succès de la déconnexion
});

// Route pour l'authentification de l'utilisateur (Login)
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Validation des champs de saisie
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' }); // Bad Request si les champs sont manquants
  }

  // Recherche de l'utilisateur dans la "base de données"
  const user = users.find(u => u.username === username);
  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' }); // Unauthorized si l'utilisateur est introuvable
  }

  // Comparaison du mot de passe haché avec celui fourni par l'utilisateur
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(401).json({ message: 'Invalid username or password' }); // Unauthorized si le mot de passe est incorrect
  }

  // Génération des tokens
  const accessToken = generateAccessToken({ name: username });
  const refreshToken = jwt.sign({ name: username }, process.env.REFRESH_TOKEN_SECRET); // Le Refresh Token est signé avec un secret spécifique

  // Ajout du Refresh Token à la liste des tokens valides
  refreshTokens.push(refreshToken);

  // Réponse avec les tokens générés
  res.json({ accessToken, refreshToken });
});

// Fonction pour générer un Access Token avec une durée de vie spécifiée
function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '12h' }); // Le Access Token expire après 12 heures
}

// Lancement du serveur sur le port 8888
app.listen(8888, () => {
  console.log('Server is running on port 8888'); // Message dans la console pour indiquer que le serveur tourne
});
