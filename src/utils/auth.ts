import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.ACCESS_TOKEN_SECRET;  // Votre secret pour vérifier les tokens

/**
 * Fonction pour vérifier la validité d'un token
 * @param token Le token à vérifier
 * @returns true si le token est valide, sinon false
 */
export const isTokenValid = (token: string): boolean => {
  try {
    // Tente de vérifier le token
    const decoded = jwt.verify(token, SECRET_KEY);
    console.log('Token valide, décodé:', decoded);
    return true;
  } catch (error) {
    console.error('Erreur de vérification du token:', error);
    return false;
  }
};
