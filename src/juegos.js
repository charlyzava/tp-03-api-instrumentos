function formatearJuego(juego) {
    const disponible = juego.disponible ? "Si" : "No";
    
    return `
    =========================================
    Juego: ${juego.titulo}
    =========================================
    Editorial: ${juego.editorial} 
    Año: ${juego.anio}
    Jugadores mínimo: ${juego.jugadoresMin} Máximo: ${juego.jugadoresMax}
    Categorías: ${juego.categorias}
    Disponible: ${disponible}`;
   }
   

   function crearJuego(juegos) {
    const lineas = juegos.map(formatearJuego);
    return `CATÁLOGO DE JUEGOS DE MESA
==========================
    ${lineas.join("\n")}

   ####################################
    Cantidad de juegos: ${juegos.length}
   ####################################
   `;
   }

   module.exports = { crearJuego };