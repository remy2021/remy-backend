const mongoose = require('mongoose');

// Définition du modèle Client
const clientSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  email: { type: String, unique: true },
  motDePasse: String,
  telephone: String,
  adresse: String,
  dateInscription: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Client', clientSchema);
