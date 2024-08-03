// swagger-autogen.js
import swaggerAutogen from 'swagger-autogen';

const doc = {
  swagger: "2.0",
  info: {
    title: 'Livros API',
    description: 'API para gerenciamento de livros',
    version: "1.0.0",
  },
  host: 'localhost:3000',
  schemes: ['http'],
  paths: {
    // Adicione suas rotas aqui
  },
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./src/routes/index.js'];

swaggerAutogen()(outputFile, endpointsFiles, doc).then(() => {
  import('./server.js'); // Inicie seu servidor aqui
});
