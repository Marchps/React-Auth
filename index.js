const express = require('express');

const app = express();
//Declaration des chemins vers les fichiers static
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

//lancement du serveur
app.listen(3000, () => {
	console.log('Le serveur tourne sur le port 3000, à l\'adresse 127.0.0.1:3000.');
});