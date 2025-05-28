const express = require('express');
const router = express.Router();
const Reparation = require('../models/Reparation');
const verifyToken = require('../middlewares/verifyToken'); // Import du middleware

// 🔒 Route sécurisée par JWT
router.post('/', verifyToken, async (req, res) => {
  try {
    const { marque, modele, imei, problemes, commentaire } = req.body;

    const nouvelle = new Reparation({
      clientId: req.client.id,
      nom: req.client.nom,
      prenom: req.client.prenom,
      email: req.client.email,
      marque,
      modele,
      imei,
      problemes,
      commentaire
    });

    await nouvelle.save();

    res.status(201).json({ message: "Demande de réparation enregistrée ✅" });
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", erreur: err.message });
  }
});

router.get('/test', (req, res) => {
  res.send("✅ Route réparation test OK");
});

module.exports = router;
