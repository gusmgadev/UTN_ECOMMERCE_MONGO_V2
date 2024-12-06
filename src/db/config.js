
import mongoose from "mongoose";
import ENVIROMENT from "../config/enviroment.config.js";

const connectDB = mongoose.connect(ENVIROMENT.DB_URL)
.then(
    () => {
        console.log('La Conexion con la bd fue exitosa')
    }
)
.catch(
    (error) => {
        console.error('Error de conexion con la BD')
    }
)

export default connectDB