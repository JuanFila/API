const sqliteConnection = require("../database/sqlite")

class UserRepository { // separa a resposabilidade do banco dedados
    async findByEmail(email){ // procurar o email
        const database = await sqliteConnection();

        const user = await database.get("SELECT * FROM users WHERE email = (?)", [email])

        return user
    }

    async createByEmail(name, email, password){ //criar usuario
        const database = await sqliteConnection();

        const userId = await database.run(
            "INSERT INTO users (name, email, password) VALUES (? , ?, ?)",
             [name, email, password]
            );

        return {id: userId}
    }
}

module.exports = UserRepository