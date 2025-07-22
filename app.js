// Importar las dependencias
import express from "express";
import {conexion} from "./mysql/mysql.js";

// Obtener el puerto de escucha del servidor,  si no lo encuentra en el fichero .env utilizara el 5000
process.loadEnvFile();
const PORT = process.env.PORT || 5000;

// Creo la aplicación
const app = express();

// Indico la ruta de los ficheros estaticos (css, js, index.html)
app.use(express.static(process.cwd() + "/public"));

// Creo las diferentes rutas
// Ruta inicial
app.get("/", (req, res) => {
    res.sendFile("index.html") // Muestra la pagina principal
});

// Ruta /api/eoi
app.get("/api/eoi", (req, res) => {
    // Creo la consulta
    const consulta = `SELECT c.id_curs, c.Nom, i.nom_idioma,i.nombre_idioma, c.Nivell, c.Tipus, c.Any, c.Hores, c.Preu, c.Places
                      FROM cursos c 
                      NATURAL JOIN idiomes i`;

    
    // Lanzo la consulta
    conexion.query(consulta, (err, result) => {
        // Si hay un error
        if(err) throw err;

        // Muestra los datos
        res.json(result);
    });
});

// Ruta /api/eoi/year/:any
app.get("/api/eoi/year/:any", (req, res) => {
    // Creo la consulta
    const consulta = `SELECT c.Nom, i.nom_idioma,i.nombre_idioma, c.Nivell, c.Tipus, c.Any, c.Hores, c.Preu, c.Places
                      FROM cursos c 
                      NATURAL JOIN idiomes i
                      WHERE c.Any = ${req.params.any}`;

    // Lanzo la consulta
    conexion.query(consulta, (err, result) => {
        // Si hay un error
        if (err) throw err;

        // Si la consulta no devuelve ningún dato
        if (result == 0) {
            return res.status(404).json({"mensaje" : "No hay datos para este año, tiene que ser 2016 ó 2017"});
        };
        
        // Si la consulta devuelve datos
        res.json(result);
    });


});

// Ruta /api/eoi/year/:any/type/:tipo
app.get("/api/eoi/year/:any/type/:tipo", (req, res) => {
    // Creo la consulta
    const consulta = `SELECT c.Nom, i.nom_idioma,i.nombre_idioma, c.Nivell, c.Tipus, c.Any, c.Hores, c.Preu, c.Places
                      FROM cursos c 
                      NATURAL JOIN idiomes i
                      WHERE c.Any = ${req.params.any} AND c.tipus = ${req.paramn.tipo}`;

    // Lanzo la consulta
    conexion.query(consulta, (err, result) => {
        // Si hay un error
        if (err) throw err;

        // Si la consulta no devuelve ningún dato
        if (result == 0) {
            return res.status(404).json({"mensaje" : "No hay datos para esta consulta"});
        };
        
        // Si la consulta devuelve datos
        res.json(result);
    });

});


// ruta 404, cuando no encuentre la ruta
app.use((req, res) => {
    res.status(404).send("<h1>Página no encontrada</h1>");
});

// Abro el servidor y lo pongo en escucha en el puerto correspondiente
app.listen(PORT, () => console.log(`Servidor abierto en http://localhost:${PORT}`));



