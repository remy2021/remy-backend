const express = require('express');
const router = express.Router();
const Reparation = require('../models/Reparation');

// POST /api/reparation
router.post('/', async (req, res) => {
  try {
    const nouvelle = new Reparation(req.body);
    await nouvelle.save();

    res.status(201).json({ message: "Demande de réparation enregistrée ✅" });
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", erreur: err.message });
  }
});

module.exports = router;
