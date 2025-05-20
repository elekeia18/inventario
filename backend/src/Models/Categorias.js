import mongoose, { Schema, SchemaTypes } from "mongoose";

const categoriasSchema = mongoose.Schema
(
{ 
    Imagen: {
        type: String,
        required: true,
        trim: true
    },
    categoriaNombre: {
        type: String,
        required: true,
        trim: true
    },
    Descripcion: {
        type: Date,
        default: Date.now()
    }
}
, {
    timestamps: true
}
);
const Categorias = mongoose.model("Categorias", categoriasSchema);

export default Categorias;

/*MongoDb --> no usa SchemaTypes
mongoose--> usa SchemaTypes*/