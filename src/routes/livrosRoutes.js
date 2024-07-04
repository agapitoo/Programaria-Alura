import express from "express";
import LivroController from "../controllers/livroController.js";



const routes = express.Router();

routes.get("/livros", LivroController.listarLivros);

routes.get("/livros/busca", LivroController.listarLivrosPorEditora);

routes.get("/livros/:id", LivroController.listarLivrosPorId);

routes.post("/livros", LivroController.cadastarLivro);

routes.put("/livros/:id", LivroController.atualizarLivrosPorId);

routes.delete("/livros/:id", LivroController.deletarLivrosPorId);





export default routes;



