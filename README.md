reademe

# API de Gestion d'Utilisateurs et d'Articles

## Description

Cette API permet la gestion des utilisateurs avec authentification JWT et la gestion d'articles. Elle inclut des fonctionnalités d'inscription, de connexion, et des opérations CRUD pour les utilisateurs et les articles.

## Fonctionnalités Actuelles

### Authentification

- **Inscription (`/api/auth/register`)** :

  - Méthode : POST
  - Corps de la requête :
    ```json
    {
      "firstName": "John",
      "lastName": "Doe",
      "email": "john@example.com",
      "password": "votreMotDePasse"
    }
    ```
  - Retourne un token JWT et les informations de l'utilisateur

- **Connexion (`/api/auth/login`)** :
  - Méthode : POST
  - Corps de la requête :
    ```json
    {
      "email": "john@example.com",
      "password": "votreMotDePasse"
    }
    ```
  - Retourne un token JWT et les informations de l'utilisateur

### Sécurité

- Authentification via token JWT (Bearer Token)
- Hachage sécurisé des mots de passe
- Middleware de vérification des rôles administrateur

## Fonctionnalités à Venir

### Gestion des Utilisateurs (Admin)

- Liste de tous les utilisateurs
- Modification des informations utilisateur
- Suppression d'utilisateurs
- Attribution/modification des rôles

### Gestion du Compte Utilisateur

- Modification du profil
- Changement de mot de passe
- Suppression de compte

### Gestion des Articles

- Création d'articles
- Lecture d'articles
- Modification d'articles
- Suppression d'articles
- Système de catégorisation
- Système de commentaires

## Comment Tester

1. Clonez le repository
2. Installez les dépendances : `npm install`
3. Créez un fichier `.env` avec les variables suivantes :
   ```
   JWT_SECRET=votre_secret_jwt
   MONGODB_URI=votre_uri_mongodb
   ```
4. Lancez le serveur : `npm run dev`

### Test avec Postman ou autre client HTTP

1. **Inscription** :

   - POST `http://localhost:3000/api/auth/register`
   - Headers : `Content-Type: application/json`
   - Body : Informations utilisateur (voir format ci-dessus)

2. **Connexion** :

   - POST `http://localhost:3000/api/auth/login`
   - Headers : `Content-Type: application/json`
   - Body : Credentials (voir format ci-dessus)

3. **Requêtes Authentifiées** :
   - Headers : `Authorization: Bearer votre_token_jwt`

## Technologies Utilisées

- Node.js
- Express.js
- MongoDB avec Mongoose
- JWT pour l'authentification
- bcrypt pour le hachage des mots de passe

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou à soumettre une pull request.
