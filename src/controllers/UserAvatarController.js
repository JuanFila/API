const knex = require("../database/kenx");
const AppError = require("../utils/AppError");
const DiskStorage = require("../Providers/DisckStorage");

class UserAvatarController {
    async update(req, res) {
        const user_id = req.user.id;
        const avatarFileName = req.file.filename;

        const disckStorage = new DiskStorage();

        const user = await knex("users")
        .where({ id: user_id }).first();

        if(!user){
            throw new AppError("Somente usuários autenticados podem mudar a foto do perfil", 401)
        } // testa a autenticação
        if(user.avatar){
            await disckStorage.deleteFile(user.avatar)
        } // deleta a imagem atualmente utilizada como avatar.

        const filename = await disckStorage.saveFile(avatarFileName);
        user.avatar = filename;

        await knex("users").update(user).where({ id: user_id });

        return res.json(user);
    }
}

module.exports = UserAvatarController