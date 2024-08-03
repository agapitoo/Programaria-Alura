import "dotenv/config";

import app from "./src/app.js"
import './swagger-autogen.js'; // Gera o arquivo swagger-output.json e inicia o servidor
const PORT = 3000;   



app.listen(PORT, () => {
    console.log("servidor escutando");
});

