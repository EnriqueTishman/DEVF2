const express = require('express');
const app = express();

const port = 3000; // Para express lo comun es el purto 3000


const songs = [
    {id: 1, name:'Kilometros', artist: 'Caligaris', year: 2007 },
    {id: 2, names: 'Umbrella', artist: 'Rihanna', year: 2000},
    {id: 3, name: 'Back in black', artist: 'AC/DC', year: 1980},
    {id: 4, name: 'Gasolina', artist: 'Daddy Yankee', year: 2002}
];

// / = Regresar un saludo en html
app.  get('/', (req, res) =>{
    res.send('Hola morros !');
});

// /songs = lista de conciones 

//URl - endpoint


app.get('/songs', (req, res) =>{
    res.json(songs)
});

// npm i nodemon -D = 

app.listen(port, () => {
    console.log('Servidor de express esta corriendo', port);
});



// npmi nodemon -g   +    nodemon (nombre del archivo) 
// control+c para deterner el servidor 
