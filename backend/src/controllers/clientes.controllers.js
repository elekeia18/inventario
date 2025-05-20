/*import getConnection from "./../DB/database.js"

const postClientes = async (req, res) => {
    try {
        const { Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax } = req.body;
        
        const cliente = {
            Compania,
            Contacto,
            Titulo,
            Direccion,
            Ciudad,
            Regiones,
            CodigoPostal,
            Pais,
            Telefono,
            Fax
        };

        const connection = await getConnection();
        const result = await connection.query("INSERT INTO clientes SET ?", [cliente]);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error inserting client" });
    }
};


export const methodHTTP3 = {
    postClientes

    }*/