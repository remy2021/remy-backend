const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour lire le JSON
app.use(express.json());

// Route test
app.get('/', (req, res) => {
  res.send('✅ API Remy.M Tech opérationnelle');
});

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`Serveur actif sur le port ${PORT}`);
});
