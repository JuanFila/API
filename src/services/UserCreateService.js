const { hash } = require("bcryptjs");
const AppError = require("../utils/AppError");

class UserCreateService {
    constructor(userRepository){ // ao instanciar precisa informar esse parametro
    // construtor deve ficar no nível da classe e fora da função
    this.userRepository = userRepository // o this.useRepository o this siginifica que é o scopo global da classe e atribuindo a variavel com o mesmo nome para estar diponível para a classe como um todo
  }
  async execute({ name, email, password }) {

    const checkUserExist = await this.userRepository.findByEmail(email);

    if (checkUserExist) {
      throw new AppError("Este e-mail já está em uso");
    }

    const hashedPassword = await hash(password, 8);

    await this.userRepository.createByEmail(name, email, hashedPassword);

}
}
module.exports = UserCreateService;
