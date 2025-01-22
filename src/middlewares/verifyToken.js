const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  // Récupérer le token directement dans le header
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Accès non autorisé. Token manquant.' });
  }

  try {
    // Vérifier et décoder le token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Ajouter les informations utilisateur au req
    next();
  } catch (error) {
    console.error('Erreur de vérification du token :', error);
    return res.status(403).json({ message: 'Token invalide.' });
  }
};

module.exports = verifyToken;
