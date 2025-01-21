const sql = require("mssql");

// Configuration de la base de données
const config = {
  user: process.env.DB_USER, // Récupère depuis les variables d'environnement
  password: process.env.DB_PASSWORD, // Récupère depuis les variables d'environnement
  server: process.env.DB_SERVER, // Récupère depuis les variables d'environnement
  database: process.env.DB_NAME, // Récupère depuis les variables d'environnement
  options: {
    encrypt: true, // Requis pour les connexions à Azure SQL
  },
};

// Fonction pour tester la connexion
async function testConnection() {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request().query("SELECT * FROM dbo.Users");
    console.log(result.recordset);
  } catch (err) {
    console.error(err);
  }
}

// Fonction pour exécuter des requêtes SQL
async function executeQuery(query, params = {}) {
  try {
    const pool = await sql.connect(config);
    const request = pool.request();

    // Ajouter les paramètres à la requête
    Object.entries(params).forEach(([key, value]) => {
      request.input(key, value);
    });

    const result = await request.query(query);
    return result.recordset;
  } catch (err) {
    console.error("Erreur lors de l'exécution de la requête:", err.message);
    throw err;
  }
}

module.exports = { testConnection, executeQuery };
