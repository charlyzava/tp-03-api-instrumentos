const path = require("node:path");
const express = require('express');

const { leerJson, escribirTexto } = require("./archivos.js");

const rutaDatos = path.join(__dirname, "..", "datos", "instrumentos.json");

async function main() {
    try {
        console.log("Leyendo instrumentos... ");
        const instrumentos = await leerJson(rutaDatos);
        console.log(instrumentos);
        
// Verificar si están los datos y seguir

const app = express();
const PORT = 3000;



app.get("/", (req, res) => {
    res.status(200).json({
        mensaje: "API de instrumentos disponible"
    });
});


app.get("/api/instrumentos", (req, res) => {
    const familia = req.query.familia;

    // Sin consulta: devolver todos
    if (!familia) {
        return res.json(instrumentos);
    }

    // Con familia: filtrar sin distinguir mayúsculas/minúsculas
    const resultado = instrumentos.filter(instrumento =>
        instrumento.familia.toLowerCase() === familia.toLowerCase()
    );

    res.json(resultado);
});


//Buscar por id
app.get('/api/instrumentos/:id', async (req, res) => {
    const instrumentos = await leerJson(rutaDatos)
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



app.listen(PORT, ()=>{
    console.log(`Servidor disponible en http://localhost:${PORT}`);
});


    } catch (error) {
        console.error(`Error al intentar leer el json : ${error.message}`);
        process.exitCode = 1;
    }
}

main();