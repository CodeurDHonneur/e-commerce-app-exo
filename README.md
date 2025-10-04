### Point de la BDD

#### **Users** 
| Champ                | Description                                                                                  |
|----------------------|----------------------------------------------------------------------------------------------|
| `user_id`            | Identifiant unique pour chaque utilisateur, clé primaire.                                     |
| `user_email`         | Adresse e-mail de l'utilisateur, utilisée pour la connexion et la communication.            |
| `user_password`      | Mot de passe hashé pour l'authentification.                                                   |
| `user_created_at`    | Date de création du profil.                                                                  |
| `user_updated_at`    | Date de dernière modification du profil.                                                    |
| `user_surname`       | Nom de famille de l'utilisateur.                                                             |
| `user_forename`      | Prénom de l'utilisateur.                                                                     |
| `user_description`   | Biographie ou description personnelle, optionnelle mais utile pour le profil.              |
| `user_adresse_facturation` | Détails de l'adresse pour la facturation.                                                |
| `user_adresse_livraison` | Détails de l'adresse pour la livraison des produits.                                        |
| `user_newsletter`    | Indicateur pour savoir si l'utilisateur souhaite recevoir la newsletter.                    |
| `user_statut_compte` | État du compte (actif, inactif, désactivé).                                                   |
| `id_role`            | Clé étrangère vers une table de rôles pour définir le niveau d'accès de l'utilisateur.       |

#### **Roles** 
| Champ                | Description                                                                                  |
|----------------------|----------------------------------------------------------------------------------------------|
| `role_id`            | Identifiant unique pour chaque rôle (ex: admin, client, vendeur).                           |
| `role_name`          | Nom du rôle (ex: "Administrateur", "Client").                                                 |
| `role_description`   | Brève description du rôle.                                                                   |
| `role_created_at`    | Date de création du rôle.                                                                    |
| `role_updated_at`    | Date de dernière modification du rôle.                                                      |

#### **Categories** 
| Champ                | Description                                                                                  |
|----------------------|----------------------------------------------------------------------------------------------|
| `categorie_id`       | Identifiant unique pour chaque catégorie.                                                   |
| `categorie_name`     | Nom affiché de la catégorie (ex: "Électronique", "Vêtements").                               |
| `categorie_description` | Description détaillée de la catégorie, utile pour le SEO et l'information du client.      |
| `categorie_created_at` | Date de création de la catégorie.                                                           |
| `categorie_updated_at` | Date de dernière modification de la catégorie.                                              |
| `categorie_image_url` | Lien vers une image illustrative de la catégorie.                                            |
| `categorie_status`   | Statut de la catégorie. (ex: active, inactif)                                               |

#### **Produits** 
| Champ                | Description                                                                                  |
|----------------------|----------------------------------------------------------------------------------------------|
| `produit_id`         | Identifiant unique pour chaque produit (clé primaire).                                        |
| `produit_name`       | Nom du produit.                                                                               |
| `produit_description`| Description détaillée du produit.                                                            |
| `produit_price`      | Prix du produit.                                                                              |
| `produit_en_stock`   | Indicateur pour le statut de disponibilité (vrai/faux ou 1/0).                               |
| `produit_images`     | Liens ou chemins d'accès aux images du produit.                                               |
| `categorie_id`       | Clé étrangère vers une table de catégories pour associer le produit à une catégorie.         |
| `produit_date_ajout` | Date d'ajout du produit à la base de données.                                                 |
| `produit_url_produit`| URL de la page produit sur le site.                                                           |

#### **Commandes** 
| Champ                | Description                                                                                  |
|----------------------|----------------------------------------------------------------------------------------------|
| `commande_id`        | Identifiant unique pour chaque commande (clé primaire).                                      |
| `client_id`          | Identifiant du client ayant passé la commande (clé étrangère renvoyant à la table des clients).|
| `commande_date`      | Date et heure exactes où la commande a été passée.                                            |
| `commande_total_amount` | Montant total de la commande, incluant les taxes et frais.                                  |
| `commande_adresse_livraison` | Adresse complète où la commande doit être livrée.                                         |
| `commande_status`    | Statut actuel de la commande (ex: en attente, en traitement, expédiée, livrée).              |
| `commande_code_reduction` | Code promotionnel utilisé pour la commande, si applicable.                                 |



### Dépendances du projet

Voici la liste des dépendances utilisées dans le projet, avec une brève description pour chaque bibliothèque :

#### 1. **express**
**Description** : 
Express est un framework web minimal et flexible pour Node.js, utilisé pour créer des applications web et des API. Il simplifie la gestion des requêtes HTTP, les middlewares, les routes et la gestion des sessions.

**Lien** : [express](https://expressjs.com/)

#### 2. **bcrypt**
**Description** : 
bcrypt est une bibliothèque pour le hachage des mots de passe. Elle permet de sécuriser les mots de passe des utilisateurs en les hachant, ce qui les rend difficiles à récupérer même en cas de fuite de la base de données.

**Lien** : [bcrypt](https://www.npmjs.com/package/bcrypt)

#### 3. **dotenv**
**Description** : 
dotenv charge les variables d'environnement depuis un fichier `.env` dans `process.env`. Cela permet de stocker des informations sensibles (comme les clés API ou les mots de passe) en dehors du code source, pour une meilleure sécurité.

**Lien** : [dotenv](https://www.npmjs.com/package/dotenv)

#### 4. **jsonwebtoken**
**Description** : 
jsonwebtoken (JWT) permet de créer et de vérifier des tokens d'authentification. Il est largement utilisé pour sécuriser les API REST en permettant la validation d'une session sans avoir à stocker de session côté serveur.

**Lien** : [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

#### 5. **nodemon**
**Description** : 
Nodemon est un utilitaire de développement qui surveille les modifications de fichiers dans un projet Node.js et redémarre automatiquement l'application. Cela permet de gagner du temps pendant le développement, en évitant d'avoir à redémarrer manuellement le serveur après chaque modification.

**Lien** : [nodemon](https://www.npmjs.com/package/nodemon)

#### 6. **nodemailer**
**Description** : 
Nodemailer est une bibliothèque qui permet d'envoyer des e-mails depuis une application Node.js. Elle offre des fonctionnalités telles que l'envoi d'e-mails via différents services SMTP, la gestion des pièces jointes et le rendu HTML des messages.

**Lien** : [nodemailer](https://www.npmjs.com/package/nodemailer)

#### 7. **express-validator**
**Description** : 
express-validator est une bibliothèque de validation des entrées de formulaire dans les applications Express. Elle permet de valider et de nettoyer les données envoyées dans les requêtes HTTP (par exemple, dans les corps de requêtes POST) pour garantir leur conformité avant de les traiter.

**Lien** : [express-validator](https://www.npmjs.com/package/express-validator)
