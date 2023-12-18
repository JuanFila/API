const { response } = require("express");
const knex = require("../database/kenx");

class TagsController {
    async index(req, res) {
        const {user_id} = req.params;
       
        const tags = await knex("tags")
        .where({ user_id })

        return res.json(tags);
    }
}

module.exports = TagsController