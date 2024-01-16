const UserCreateService = require('./UserCreateService');
const UserRepositoryInMemory = require("../repositories/UserRepositoryInMemory");

 it("user should be create", async () => {
    const user = {
        name: "user teste",
        email: "user.teste@teste.com",
        password: "123"
    };
    const userRepositoryInMemory = new UserRepositoryInMemory(); // meu banco em memoria para teste
    const userCreateService = new UserCreateService(userRepositoryInMemory);// usamos a regra de negocio
    const userCreated = await userCreateService.execute(user)

    console.log(userCreated)
    expect(userCreated).toHaveProperty("id") // expect = minha expectativa / to equal / 
})
// it recebe 2 paramretros um deles é a descrição e depois a função
