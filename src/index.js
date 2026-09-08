const path = require("node:path");
const express = require('express');



const { leerJson, escribirTexto } = require("./archivos.js");
const { crearJuego } = require("./juegos.js");


const rutaDatos = path.join(__dirname, "..", "datos", "instrumentos.json");
const rutaSalida = path.join(__dirname, "..", "salida", "catalogo_instrumentos.txt");


async function main() {
    try {
        console.log("Leyendo juegos... ");
        const juegos = await leerJson(rutaDatos);
        const juego = crearJuego(juegos);
        await escribirTexto(rutaSalida, juego);
        console.log(juegos);
        console.log(`Juego generado exitosamente en: ${rutaSalida}`);

// Verificar si están los datos seguir



const app = express();
const PORT = 3000;


app.get("/", (req,res) => {
    //res.send("API disponible");
    res.json({ mensaje: "API de series disponible" });
});





app.get('/instrumentos', async (req, res) => {

    const instrumentos = await leerJson(rutaDatos);

    const nombre = req.query.nombre;

    if (nombre) {
        const resultado = instrumentos.filter(
            instrumento => instrumento.nombre.toLowerCase() === nombre.toLowerCase()
        );

        return res.json(resultado);
    }

    res.json(instrumentos);
});



//Buscar por id

app.get('/instrumentos/:id', async (req, res) => {

    const instrumentos = await leerJson(rutaDatos);

    const id = Number(req.params.id);

    const instrumento = instrumentos.find(
        instrumento => instrumento.id === id
    );

    if (!instrumento) {
        return res.status(404).json({
            error: 'Instrumento no encontrado'
        });
    }

    res.json(instrumento);
});

// fin buscar por id




app.listen(PORT, ()=>{
    console.log(`Servidor disponible en http://localhost:${PORT}`);
});







    } catch (error) {
        console.error(`Error al generar el juego : ${error.message}`);
        process.exitCode = 1;
    }
}

main();