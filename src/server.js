const express = require('express');

const app = express();


//ROTAS

// ao usar /estamos passando um caminho
// /: estamos usando um paramentro
// parametro para dados simples
// a ? no link indica um query parms
// mais de um query parms eu passo um & apos usar a ?

//Route params são dados onrigatorios - query parms não necessariamente são obrigatorios
app.get("/message/:id/:user", (request, response) => {

    const {id, user } = request.params; //desestruturação 

    response.send(
        `
        Mensagem ID: ${id}
        Para o usaurio: ${user}
        `
    )
})
//localhost:3333/users?page=12&limit=200
app.get("/users", (req, res) => {
    const {page, limit} = req.query;

    res.send(`Página: ${page}. Mostrar: ${limit}`)
})

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
