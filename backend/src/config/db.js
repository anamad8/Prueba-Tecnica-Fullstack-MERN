import mongoose from "mongoose";

export const connectDB = async () => {
    
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Base de datos conextada - ${conn.connection.host}`)
    } catch (error) {
        console.log("Error al conectarse a la base de datos", error);
        process.exit(1);
    }
}