
// Cargamos el objeto express

const express = require("express");

// Instancio Express dentro de la constante app para desde app tener todos los metodos
// y propiedades de Express

const app = express ();

// A partir de esta linea vamos a poder ejecutar archivos JSON en nuestro backend de express
app.use(express.json());



const PORT = 5000;

// ENDPOINT DE INICIO
app.get('/',(req,res) => {
    res.send ("Hola don jose")

})

app.get('/search/:bike', (req,res) => {

    let criterio = req.params.bike;

    res.send(`Te has comprado una ${criterio}`);
})

// ENDPOINT /ABOUT
app.post('/about',(req,res) => {

    let alumno1 = req.body.alumno1;
    let alumno3 = req.body.alumno3;

    res.send ({
        "Hola" : alumno1,
        "Te odio" : alumno3
    })

})
// ESTO SERIA UNA RESPUESTA CON LA RESPUESTA EN JSON
// app.post('/about',(req,res) => {

//     let alumno1 = req.body.alumno1;
//     let alumno3 = req.body.alumno3;

//     res.json ({
//         "Hola" : alumno1,
//         "Te odio" : alumno3
//     })

// })








// ESTO SIEMPRE AL FINAL
app.listen(PORT,
    () => {
        console.log ("Servidor levantado y funcionando en el puerto", PORT)
    }
)