const express = require("express");

const router = express.Router();

const User = require("../models/user");

router.post("/create", (req, res) => {
    const data = {
        email,
        password,
        created_at,
        updated_at,
        surname,
        forename,
        description,
        adresse_facturation,
        adresse_livraison,
        newsletter,
        user_statut_compte,
        id_role
    } = req.body;

    console.log(data)
    try {
        const user = new User({...data});
        user.save();
        res.status(201).json(`L'utilisateur ${user.user_surname} ${user.user_forename} a été créé avec succès !`)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;