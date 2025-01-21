// Chargement des variables d'environnement depuis le fichier .env
require('dotenv').config();

// Importation des modules nécessaires
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

// Middleware pour analyser les requêtes JSON
app.use(express.json());

// Données fictives pour les posts (à remplacer par une base de données en production)
const posts = [
  { username: 'Kyle', title: 'Post 1' },
  { username: 'Jim', title: 'Post 2' }
];

// Route protégée : accès aux posts filtrés par l'utilisateur authentifié
app.get('/posts', authenticateToken, (req, res) => {
  // Renvoi des posts filtrés par l'utilisateur authentifié
  res.json(posts.filter(post => post.username === req.user.name));
});

// Middleware pour authentifier les requêtes en vérifiant le token
function authenticateToken(req, res, next) {
  // Récupération du token dans l'en-tête "Authorization"
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // "Bearer <token>"

  // Si aucun token n'est fourni, renvoyer une erreur 401 (Non autorisé)
  if (token == null) return res.sendStatus(401);

  // Vérification du token à l'aide de la clé secrète pour le décoder
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    // Si une erreur survient lors de la vérification (token invalide, expiré, etc.), renvoyer une erreur 403 (Interdit)
    if (err) return res.sendStatus(403);

    // Si le token est valide, ajouter l'utilisateur décodé dans l'objet `req.user`
    req.user = user;

    // Passer à la prochaine étape (traitement de la requête)
    next();
  });
}

// Démarrage du serveur sur le port 8080
app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
