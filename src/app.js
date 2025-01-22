require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routers');

app.use(cors());
app.use(express.json());

// Connexion MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connecté à MongoDB'))
  .catch((err) => console.error('Erreur de connexion MongoDB:', err));

app.use('/api', router);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
