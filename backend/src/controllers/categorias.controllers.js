import getConnection from "./../DB/database.js"

const getcategorias = async (req, res) => {

    try {
        const connection = await getConnection();

        const result = await connection.query("SELECT CategoriaID,CategoriaNombre,Descripcion,Imagen FROM categorias");

        res.json(result);

    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error retrieving categories" });
    }
    
}

const postCategorias = async (req, res)=>{
    try {
    const {CategoriaNombre,Descripcion,Imagen} = req.body;
        
        const category= {
            CategoriaNombre,
            Descripcion,
            Imagen
        }
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO categorias SET ?", [category]);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving categories" });
    }
}

const getcategory= async (req, res) => {

    try {
        console.log(req.params);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT CategoriaID,CategoriaNombre,Descripcion,Imagen FROM categorias WHERE CategoriaID = ?", [id]);
        res.json(result);

    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error retrieving categories" });
    }
    
}
const deletecategory= async (req, res) => {

    try {
        console.log("Id a borrar", req.params);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE   FROM  categorias WHERE CategoriaID = ?", id)
        res.json(result);

    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error retrieving categories" });
    }
    
}
const updatecategory = async (req, res)=>{
    try {

        const {id} = req.params;
    
        const {CategoriaNombre,Descripcion,Imagen} = req.body;
        
        const category= {
            CategoriaNombre,
            Descripcion,
            Imagen
        }
        const connection = await getConnection();
        const result = await connection.query("UPDATE categorias SET ? WHERE CategoriaID = ?", [category, id]);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving categories" });
    }
}

//Parcial Endpoints

/*const getEmpleados = async (req, res) => {
    try {
        const connection = await getConnection();

        const result = await connection.query("SELECT * FROM empleados");

        res.json(result);
    } 
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error retrieving employees" });
    }
}*/






export const methodHTTP = {
getcategorias,
    postCategorias,
    getcategory,
    deletecategory,
    updatecategory,

   // getEmpleados*/
}
