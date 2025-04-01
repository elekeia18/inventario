import express from "express";

/*asignamos a app todas las fumciones de express*/
const app = express();

/* seteamos un puerto a mi web server*/
app.set("port",5000)


/* hacemos disponible a toda mi app*/
export default app;