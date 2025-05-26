const express = require('express');
const router = express.Router();
const Client = require('../models/Client');

// Route POST /api/connexion
router.post('/', async (req, res) => {
  const { email, motDePasse } = req.body;

  try {
    const client = await Client.findOne({ email });

    if (!client) {
      return res.status(404).json({ message: "Compte introuvable ❌" });
    }

    if (client.motDePasse !== motDePasse) {
      return res.status(401).json({ message: "Mot de passe incorrect ❌" });
    }

    res.status(200).json({
      message: "Connexion réussie ✅",
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
