const UserCreateService = require('./UserCreateService');
const UserRepositoryInMemory = require("../repositories/UserRepositoryInMemory");
const AppError = require('../utils/AppError');

describe("UserCreateService", () => { // describe cria grupos de teste especifico para um mesmo assunto
    it("user should be create", async () => {
       const user = {
           name: "user teste",
           email: "user.teste@teste.com",
           password: "123"
       };
       const userRepositoryInMemory = new UserRepositoryInMemory(); // meu banco em memoria para teste
       const userCreateService = new UserCreateService(userRepositoryInMemory);// usamos a regra de negocio
       const userCreated = await userCreateService.execute(user)
    
       //console.log(userCreated)
       expect(userCreated).toHaveProperty("id") // expect = minha expectativa / to equal / 
    })
    // it recebe 2 paramretros um deles é a descrição e depois a função
    
    it("user not should be create with exists email", async () => {
        const user1 = {
            name: "Userteste1",
            email: "user@teste.com",
            password: "123"
        }
        const user2 = {
            name: "Userteste2",
            email: "user@teste.com",
            password: "456"
        };

        const userRepository = new UserRepositoryInMemory();
        const userCreateService = new UserCreateService(userRepository);

        await userCreateService.execute(user1);
        await expect(userCreateService.execute(user1)).rejects.toEqual(new AppError("Este e-mail já está em uso"))
        
    })
})


