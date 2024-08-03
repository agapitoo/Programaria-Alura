import mongoose from "mongoose";

async function conectaNaDatabase() {
    mongoose.connect(process.env.Conecta_banco);

    return mongoose.connection;
};

export default conectaNaDatabase;



