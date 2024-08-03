import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

import swaggerUi from 'swagger-ui-express';

import swaggerFile from '../swagger-output.json' assert { type: 'json' }; // Ajuste o caminho conforme necessário

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("erro de conexao", erro);
});
conexao.once("open", () => {
    console.log("conexao com o banco feita com sucesso");
})


const app = express();
routes (app);
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile, {
    explorer: true,}));

export default app;