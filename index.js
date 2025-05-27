const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 10000; // 10000 est juste un secours

// Connexion MongoDB
mongoose.connect('mongodb+srv://Admin:Marneffe2011@cluster0.pwcg8di.mongodb.net/remymtech?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log("✅ Connecté à MongoDB Atlas"))
  .catch(err => console.error("❌ Erreur MongoDB :", err));

// Middleware
app.use(express.json());

// Route test
app.get('/', (req, res) => {
  res.send('✅ API Remy.M Tech opérationnelle avec MongoDB');
});

// Lancement serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur actif sur le port ${PORT}`);
});
const inscriptionRoute = require('./routes/inscription');
app.use('/api/inscription', inscriptionRoute);

const connexionRoute = require('./routes/connexion');
app.use('/api/connexion', connexionRoute);

const reparationRoute = require('./routes/reparation');
app.use('/api/reparation', reparationRoute);
