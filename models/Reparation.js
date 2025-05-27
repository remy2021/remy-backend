const mongoose = require('mongoose');

const ReparationSchema = new mongoose.Schema({
  clientId: {
    type: String,
    required: true
  },
  nom: {
    type: String,
    required: true
  },
  prenom: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  telephone: {
    type: String,
    required: true
  },
  adresse: {
    type: String,
    required: true
  },
  marque: {
    type: String,
    required: true
  },
  modele: {
    type: String,
    required: true
  },
  imei: {
    type: String
  },
  problemes: {
    type: [String],
    required: true
  },
  commentaire: {
    type: String
  },
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
