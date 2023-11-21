const express = require('express');

const app = express();
// ao usar /estamos passando um caminho
// /: estamos usando um paramentro
// parametro para dados simples
app.get("/message/:id/:user", (request, response) => {

    const {id, user } = request.params; //desestruturação 

    response.send(
        `
        Mensagem ID: ${id}
        Para o usaurio: ${user}
        `
    )
})

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
