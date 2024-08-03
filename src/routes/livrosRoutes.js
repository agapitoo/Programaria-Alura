import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();


/**
 * @swagger
 * components:
 *   schemas:
 *     Livro:
 *       type: object
 *       required:
 *         - titulo
 *         - autor
 *         - editora
 *       properties:
 *         id:
 *           type: string
 *           description: ID do livro
 *         titulo:
 *           type: string
 *           description: Título do livro
 *         autor:
 *           type: string
 *           description: Autor do livro
 *         editora:
 *           type: string
 *           description: Editora do livro
 *       example:
 *         id: 1
 *         titulo: "O Senhor dos Anéis"
 *         autor: "J.R.R. Tolkien"
 *         editora: "HarperCollins"
 */

/**
 * @swagger
 * tags:
 *   name: Livros
 *   description: API para gerenciamento de livros
 */

/**
 * @swagger
 * /livros:
 *   get:
 *     summary: Lista todos os livros
 *     tags: [Livros]
 *     responses:
 *       200:
 *         description: Lista de livros
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Livro'
 */

routes.get("/livros", LivroController.listarLivros);

/**
 * @swagger
 * /livros/busca:
 *   get:
 *     summary: Busca livros por editora
 *     tags: [Livros]
 *     parameters:
 *       - in: query
 *         name: editora
 *         schema:
 *           type: string
 *         required: true
 *         description: Nome da editora
 *     responses:
 *       200:
 *         description: Lista de livros da editora
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Livro'
 */

routes.get("/livros/busca", LivroController.listarLivrosPorEditora);

/**
 * @swagger
 * /livros/{id}:
 *   get:
 *     summary: Busca livro por ID
 *     tags: [Livros]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do livro
 *     responses:
 *       200:
 *         description: Livro encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Livro'
 *       404:
 *         description: Livro não encontrado
 */


routes.get("/livros/:id", LivroController.listarLivrosPorId);


/**
 * @swagger
 * /livros:
 *   post:
 *     summary: Cadastra um novo livro
 *     tags: [Livros]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Livro'
 *     responses:
 *       201:
 *         description: Livro criado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Livro'
 */

routes.post("/livros", LivroController.cadastarLivro);

/**
 * @swagger
 * /livros/{id}:
 *   put:
 *     summary: Atualiza um livro por ID
 *     tags: [Livros]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do livro
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Livro'
 *     responses:
 *       200:
 *         description: Livro atualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Livro'
 *       404:
 *         description: Livro não encontrado
 */

routes.put("/livros/:id", LivroController.atualizarLivrosPorId);

/**
 * @swagger
 * /livros/{id}:
 *   delete:
 *     summary: Deleta um livro por ID
 *     tags: [Livros]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do livro
 *     responses:
 *       200:
 *         description: Livro deletado
 *       404:
 *         description: Livro não encontrado
 */

routes.delete("/livros/:id", LivroController.deletarLivrosPorId);





export default routes;



