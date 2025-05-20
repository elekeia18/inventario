/*import getConnection from "./../DB/database.js"

const updateProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const { ProductoNombre, PrecioUnitario } = req.body;

        const producto = {
            ProductoNombre,
            PrecioUnitario
        };

        const connection = await getConnection();
        const result = await connection.query("UPDATE productos SET ? WHERE ProductoID = ?", [producto, id]);

        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error updating product" });
    }
};


export const methodHTTP4 = {
    updateProducto,

    }
    */