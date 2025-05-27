const express = require('express');
const router = express.Router();
const Reparation = require('../models/Reparation');

// ✅ Route POST /api/reparation — enregistrer une nouvelle demande de réparation
router.post('/', async (req, res) => {
  try {
    const nouvelle = new Reparation(req.body);
    await nouvelle.save();

    res.status(201).json({ message: "Demande de réparation enregistrée ✅" });
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", erreur: err.message });
  }
});

// ✅ Route GET /api/reparation/test — pour tester que tout fonctionne
router.get('/test', (req, res) => {
  res.send("✅ Route réparation test OK");
});

module.exports = router;
