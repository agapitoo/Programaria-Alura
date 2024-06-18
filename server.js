/*Importe o módulo http.
Defina uma constante PORT com o valor 3000.
Crie um servidor HTTP utilizando a função createServer.
Dentro da função de callback de createServer, defina as variáveis req e res.
Escreva o cabeçalho da resposta utilizando o método writeHead de res. O status deve ser 200 e o tipo de conteúdo deve ser text/plain.
Termine a resposta utilizando o método end de res. O conteúdo deve ser "Curso de Node.js".
No final do arquivo, chame o método listen de server passando a constante PORT como argumento e uma função de callback que imprime servidor escutando! no console.*/


//import http from "http";
import "dotenv/config";

import app from "./src/app.js"

const PORT = 3000;   

// const rotas = {
//     "/" : "Node.js",
//     "/livros": "entrei na rota livros",
//     "/autores": "autores",
// }

// const server = http.createServer((req, res) =>{
//     res.writeHead(200, {"content-Type": "text/plain"});
//     res.end(rotas [req.url]);
// });

app.listen(PORT, () => {
    console.log("servidor escutando");
});

