const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.join(__dirname, './public');
app.use(express.static(publicPath));

app.listen( process.env.PORT || 3000, () => {
    console.log('Escuchando en el puerto 3000');
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
})

app.get('/registro', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
})

app.post('/login.html', (req, res) => {
    console.log('Te registraste correctamente');
    res.redirect('/');
})

app.post('/registro', (req, res) => {
    console.log('Te registraste correctamente');
    res.redirect('/');
})
