const express = require('express');
const router = express.Router();

// Exemple de stock simulé (tu pourras le remplacer par une vraie base de données)
const stock = {
  "Xiaomi|Redmi Note 8": {
    "Écran cassé": true,
    "Batterie faible": false
  },
  "Samsung|A52": {
    "Écran cassé": true,
    "Batterie faible": true
  },
  "Apple|iPhone 12": {
    "Écran cassé": false,
    "Batterie faible": true
  }
};

// GET /api/stock/:marque/:modele/:probleme
router.get('/:marque/:modele/:probleme', (req, res) => {
  const { marque, modele, probleme } = req.params;
  const key = `${marque}|${modele}`;
  const dispo = stock[key] && stock[key][probleme];

  res.json({ disponible: !!dispo });
});

module.exports = router;
