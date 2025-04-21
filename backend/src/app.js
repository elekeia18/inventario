import express from "express";
import cors from "cors"
import CategoriasRoutes from "./routes/categorias.routes.js";

/*asignamos a app todas las fumciones de express*/
const app = express();

/* seteamos un puerto a mi web server*/
app.set("port",5000)

app.use(express.json());
app.use(cors());

/*Routes*/
app.use("/api/categorias/",CategoriasRoutes)

/* hacemos disponible a toda mi app*/
export default app;