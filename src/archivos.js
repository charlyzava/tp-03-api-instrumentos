const fs = require("node:fs/promises");
const path = require("node:path");

async function leerJson(ruta) {
try {
 const texto = await fs.readFile(ruta, "utf8");
 return JSON.parse(texto);
}
catch (error) {
 throw new Error(`Error al leer el archivo JSON: ${error.message}`);
 }
}


module.exports = {leerJson};
