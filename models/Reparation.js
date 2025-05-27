const mongoose = require('mongoose');

const ReparationSchema = new mongoose.Schema({
  clientId: String,
  nom: String,
  prenom: String,
  email: String,
  telephone: String,
  adresse: String,
  marque: String,
  modele: String,
  imei: String,
  problemes: [String],
  commentaire: String,
  dateDemande: {
    type: Date,
    default: Date.now
  },
  statut: {
    type: String,
    default: "Devis demandé"
  }
});

module.exports = mongoose.model("Reparation", ReparationSchema);
