const express = require('express');
const app = express();

const port = 3000; // Para express lo comun es el purto 3000


const songs = [
    {id: 1, name:'Kilometros', artist: 'Caligaris', year: 2007 },
    {id: 2, names: 'Umbrella', artist: 'Rihanna', year: 2000},
    {id: 3, name: 'Back in black', artist: 'AC/DC', year: 1980},
    {id: 4, name: 'Gasolina', artist: 'Daddy Yankee', year: 2002}
];

//URl - endpoint
app.get('/', (req, res) =>{
    res.json(songs)

});



app.listen(port, () => {
    console.log('Servidor de express esta corriendo', port);
});
