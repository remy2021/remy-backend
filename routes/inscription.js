const express = require('express');
const router = express.Router();
const Client = require('models/client');

// Route POST /api/inscription
router.post('/', async (req, res) => {
  const { nom, prenom, email, motDePasse, telephone, adresse } = req.body;

  // Vérifie si l'email est déjà utilisé
  const existe = await Client.findOne({ email });
  if (existe) {
    return res.status(400).json({ message: 'Email déjà utilisé' });
  }

  // Crée un nouveau client
  const nouveauClient = new Client({
    nom,
    prenom,
    email,
    motDePasse,
    telephone,
    adresse
  });

  try {
    await nouveauClient.save();
    res.status(201).json({ message: 'Inscription réussie ✅' });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', erreur: err.message });
  }
});

module.exports = router;
