const express = require('express');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT|| 8080;
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine','hbs');

app.get('/', (req, res) => {
    res.render('inicio');
});
app.get('/muro', (req, res) => {
    res.render('muro');
});
app.get('/costos', (req, res) => {
    res.render('costos');
});
app.get('/salidas', (req, res) => {
    res.render('salidas');
});
app.get('/registro', (req, res) => {
    res.render('registro');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});