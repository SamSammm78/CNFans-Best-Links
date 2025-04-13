const express = require('express');
const axios = require('axios');
const app = express();

require('dotenv').config();

app.set('view engine', 'ejs');
app.use(express.static('public'));

const spreadsheetId = process.env.spreadsheetId;
const apiKey = process.env.API_KEY;
const range = 'A2:F';
const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

async function getDataFromSheet() {
    try {
        const res = await axios.get(url);
        return res.data.values;
    } catch (err) {
        console.error("Erreur de récupération des données:", err);
        return [];
    }
}

app.get('/', async (req, res) => {
    const liens = await getDataFromSheet();
    res.render('index', { liens });
});

// Route pour afficher un type d'articles spécifique
app.get('/category/:type', async (req, res) => {
    const type = req.params.type;  // Récupérer le type d'article depuis l'URL
    const liens = await getDataFromSheet();

    // Filtrer les articles par type (lien[6] contient le type)
    const filteredLiens = liens.filter(lien => lien[5] === type ); // lien[6] : type d'article
    res.render('index', { liens: filteredLiens });
});

app.listen(3000, () => {
    console.log('Serveur lancé sur http://localhost:3000');
});
