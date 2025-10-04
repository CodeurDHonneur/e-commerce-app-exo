
const { loadData, saveData } = require("../repos/dataManager");

const filename = "users";

class User {

    constructor({
        id = new Date().getTime(),
        email,
        password,
        created_at,
        updated_at,
        surname,
        forename,
        description = null,
        adresse_facturation,
        adresse_livraison,
        newsletter = false,
        user_statut_compte = "actif",
        id_role
    }) {
        this.user_id = id;
        this.user_email = email;
        this.user_password = password;
        this.user_created_at = created_at;
        this.user_updated_at = updated_at;
        this.user_surname = surname;
        this.user_forename = forename;
        this.user_description = description;
        this.user_adresse_facturation = adresse_facturation;
        this.user_adresse_livraison = adresse_livraison;
        this.user_newsletter = newsletter;
        this.user_statut_compte = user_statut_compte;
        this.id_role = id_role;
    }

    // ---------------------
    // Utilitaires
    // ---------------------
    static _readFile() {
        return loadData(filename);
    }

    static _writeFile(data) {
        return saveData(filename, data);
    }

    static getAll() {
        const users = User._readFile();
        return users.map(u => new User(...u));
    }

    //Méthode de récupération d'un utilisateur suivant son id
    static getById(id) {
        const users = User._readFile();

        if (users.length === 0) {
            throw new Error(`Aucune donnée disponible pour la recherche.`);
        }

        const user = users.find(item => item.id === id);

        if (!user) {
            throw new Error(`Aucun utilisateur avec l'id ${id}. Merci de réessayer.`);
        }

        return user;
    }
    
    //Méthode d'insertion d'un utilisateur
    save() {
        const users = User._readFile();
        if (users.length > 0) {
            users.push(this);
            User._writeFile(users);
        } else {
            User._writeFile(this);
        }
        return this.user_surname + this.user_forename;
    }

    //Modification d'un élément
    update() {
        const users = User._readFile();
        const index = users.findIndex(u => u.id === this.id);
        if (index === -1) return false;
        users[index] = this;
        User._writeFile(users);
        return true;
    }


    //Méthode de suppression d'un utilisateur
    delete() {
        const users = User._readFile();
        users = users.filter(u => u.id !== this.id);
        User._writeFile(users);
        return true;
    }

}

module.exports = User;