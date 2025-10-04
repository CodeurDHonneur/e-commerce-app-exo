const fs = require("fs");
const path = require("path");


const dataDirectory = "data";

const loadData = (filename) => {
    const filePath = path.join(dataDirectory, `${filename}.json`);

    try {
        // Vérifier si le fichier existe
        if (!fs.existsSync(filePath)) {
            throw new Error(`⚠️ Aucune donnée disponible.`);
        }

        const datas = fs.readFileSync(filePath, "utf8");

        if (!datas || datas.trim() === "") {
            return [];
        } 
        
        return JSON.parse(datas);

    } catch (error) {
         throw new Error(`❌ L'erreur suivante '${error.message}' s'est produite lors du chargement des données` );
         
    }
}

const saveData = (filename, data) => {
    const filePath = path.join(dataDirectory, `${filename}.json`);

    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
    } catch (error) {
         throw new Error(`❌ L'erreur suivante '${error.message}' s'est produite lors de l'insertion des données` );
    }
}


module.exports = {
    loadData,
    saveData
}