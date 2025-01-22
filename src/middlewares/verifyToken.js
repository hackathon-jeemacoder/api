const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Accès non autorisé. Token manquant ou invalide.' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Ajout des infos utilisateur au req
    next();
  } catch (error) {
    console.error('Erreur de vérification du token :', error);
    return res.status(403).json({ message: 'Token invalide.' });
  }
};

module.exports = verifyToken;
