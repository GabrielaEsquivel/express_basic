const express = require('express');
const app = express();
const port = 3000; // localhost:3000

//localhost:300
app.get('/', (req, res) => {
    res.send("Hola a todos los explorers! los admiro mucho!")
});

app.get('/bienvenida', (req, res) => {
    res.send("Bienvenidos a todos! Este es mi primer server")
});

app.listen(port, () => {
    console.log("server escuchando")
} )