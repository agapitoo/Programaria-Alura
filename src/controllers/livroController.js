import livro from "../models/livros.js";


//criação de metodos 


class LivroController {

    static async listarLivros (req, res) {
        try{
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);

        } catch (erro) {
            res.status(500).json({ message:`${erro.message} - falha na requisiçao ` });
        }
     
    }

    static async listarLivrosPorId (req, res) {
        try{
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);

        } catch (erro) {
            res.status(500).json({ message:`${erro.message} - falha na requisiçao do livro ` });
        }
     
    }

    static async cadastarLivro (req, res){
        try{
            const novoLivro = await livro.create(req.body);
            res.status(201).json({message:"criado com sucesso", livro: novoLivro})
        } catch (erro) {
            res.status(500).json({ message:`${erro.message} - falha ao cadastrar livro` });

        }
    }

    static async atualizarLivrosPorId (req, res) {
        try{

            const id = req.params.id;

            await livro.findByIdAndUpdate(id, req.body);

            const livroAtualizado = await livro.findByIdAndUpdate(id);

            res.status(200).json({message: "livro atualizado", livro: livroAtualizado});

        } catch (erro) {
            res.status(500).json({ message:`${erro.message} - falha na atualização ` });
        }
     
    }

    static async deletarLivrosPorId (req, res) {
        try{
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({message: "livro deletado com sucesso !!!"});

        } catch (erro) {
            res.status(500).json({ message:`${erro.message} - falha ao deletar` });
        }
     
    }






};



export default LivroController;

