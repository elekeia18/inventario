import express from "express";
import cors from "cors"
import dotenv from "dotenv";
import conectarDB from "./DB/database.js";

/*MONGOODB*/
import CategoriasRoutes from "./routes/categorias.routes.js";



dotenv.config();

conectarDB();



/*asignamos a app todas las fumciones de express*/
const app = express();

/* seteamos un puerto a mi web server*/

app.use(express.json());
app.use(cors());

/*MONGOODB */

// Rutas
app.use("/categorias", CategoriasRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API funcionando');
});

// Escuchar servidor (si no tienes un archivo server.js separado)


















/*Routes*/
/*app.use("/api/categorias/",CategoriasRoutes)
app.use("/api/empleados/",CategoriasEmpleados)
app.use("/api/clientes/",CategoriasClientes)
app.use("/api/productos/",CategoriasProductos)

app.get('/', (req, res) => {
    res.send('REST API EN RENDER WITHOUT DATABASE ENDPOINTS');
  });
*/

/* hacemos disponible a toda mi app*/
export default app;