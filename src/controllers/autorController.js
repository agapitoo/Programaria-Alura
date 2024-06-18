import { autor } from "../models/autores.js";



//criação de metodos 


class AutorController {

    static async listarAutores (req, res) {
        try{
            const listaAutor = await autor.find({});
            res.status(200).json(listaAutor);

        } catch (erro) {
            res.status(500).json({ message:`${erro.message} - falha na requisiçao ` });
        }
     
    }

    static async listarAutorPorId (req, res) {
        try{
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);

        } catch (erro) {
            res.status(500).json({ message:`${erro.message} - falha na requisiçao do livro ` });
        }
     
    }

    static async cadastarAutor (req, res){
        try{
            const novoAutor = await autor.create(req.body);
            res.status(201).json({message:"criado com sucesso", autor: novoAutor})
        } catch (erro) {
            res.status(500).json({ message:`${erro.message} - falha ao cadastrar autor` });

        }
    }

    static async atualizarAutorPorId (req, res) {
        try{

            const id = req.params.id;

            await autor.findByIdAndUpdate(id, req.body);

            const autorAtualizado = await autor.findByIdAndUpdate(id);

            res.status(200).json({message: "autor atualizado", autor: autorAtualizado});

        } catch (erro) {
            res.status(500).json({ message:`${erro.message} - falha na atualização ` });
        }
     
    }

    static async deletarAutorPorId (req, res) {
        try{
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({message: "autor deletado com sucesso !!!"});

        } catch (erro) {
            res.status(500).json({ message:`${erro.message} - falha ao deletar` });
        }
     
    }






};



export default AutorController;

