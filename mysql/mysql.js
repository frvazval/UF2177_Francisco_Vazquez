// Importar el modulo mysql
import mysql from "mysql2";

// Cargar los datos del fichero .env
process.loadEnvFile();

// Configuración de la conexión
const configConexion = {
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    port : process.env.DB_PORT,
    database : process.env.DB_NAME
}

// Exporto la conexión
export const conexion = mysql.createConnection(configConexion);
