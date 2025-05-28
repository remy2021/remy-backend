const jwt = require('jsonwebtoken');

const JWT_SECRET = 'remy-tech-secret-key'; // Même clé que dans connexion.js

function verifyToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ message: 'Token manquant 🔒' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.client = decoded; // contient l'id et l'email du client
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token invalide ❌' });
  }
}

module.exports = verifyToken;
