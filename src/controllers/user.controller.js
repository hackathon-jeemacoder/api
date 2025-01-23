const User = require('../models/user.model');

// Récupérer l'utilisateur connecté
exports.getUser = async (req, res) => {
  try {
    // Vérifier si l'utilisateur est authentifié
    if (!req.user || !req.user.userId) {
      return res.status(401).json({ message: 'Utilisateur non authentifié' });
    }

    // Rechercher l'utilisateur dans la base de données
    const user = await User.findById(req.user.userId).select('-password'); // Exclure le mot de passe
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    // Retourner les informations de l'utilisateur
    res.status(200).json(user);
  } catch (error) {
    console.log('Erreur lors de la récupération de du user:', error);
    res.status(500).json({ message: 'Erreur interne du serveur' });
  }
};
