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

app.get('/explorers/:explorer', (req, res) => {
    res.send(req.params)
});
app.get('/node', (req, res) => {
    const explorer = {id:1, name:"Explorer 1"}
    const explorer2 = {id:2, name:"Explorer 2"}
    const explorer3 = {id:3, name:"Explorer 3"}

    res.send([explorer, explorer2, explorer3])
});

app.listen(port, () => {
    console.log("server escuchando")
} )