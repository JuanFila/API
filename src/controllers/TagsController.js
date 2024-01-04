const knex = require("../database/kenx");

class TagsController {
    async index(req, res) {
        const user_id = req.user.id;
       
        const tags = await knex("tags")
        .where({ user_id }) 
        .groupBy("name") // Para evitar de repetir a mesma informação na tela

        return res.json(tags);
    }
}

module.exports = TagsController