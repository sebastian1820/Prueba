const express = require ('express');
const conectarBD = require('../config/db');
const cors = require('cors');

// creamos nuestro servidor
const app = express();

//enlazar la base datos

conectarBD ();
app.use(cors());

app.use(express.json())
//app.use('/api/clientes',require ('../routes/rutas'));
app.use('/api/Proveedor',require ('../routes/rutasProveedor'));

// CONSTANTE PARA EWL PURTO QUE TENDRA LA CONFIGURACOIN EN LA NUDEB DEL PUERTO

const port = process.env.PORT || 3000 ;

app.listen (port,()=>{

    console.log('el servidor esta conectado http://localhost:3000/')
})





/// definir unarutaprincipal

app.get ('/',(req,res) => {
    res.send ("Hola mundo");
})
