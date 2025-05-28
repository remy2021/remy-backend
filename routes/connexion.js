const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Client = require('../models/Client');

// Clé secrète pour signer les JWT (à garder privée)
const JWT_SECRET = 'remy-tech-secret-key'; // Tu peux changer par une chaîne plus complexe

// POST /api/connexion
router.post('/', async (req, res) => {
  const { email } = req.body;

  try {
    const client = await Client.findOne({ email });

    if (!client) {
      return res.status(401).json({ message: "Email non trouvé ❌" });
    }

    // Générer un token JWT avec l'ID et l'email
    const token = jwt.sign(
      { id: client._id, email: client.email },
      JWT_SECRET,
      { expiresIn: '7d' } // expire dans 7 jours
    );

    res.json({
      message: "Connexion réussie ✅",
      token,
      client: {
        id: client._id,
        nom: client.nom,
        prenom: client.prenom,
        email: client.email
      }
    });
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", erreur: err.message });
  }
});

module.exports = router;
