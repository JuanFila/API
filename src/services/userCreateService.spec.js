const UserCreateService = require('./UserCreateService');
const UserRepositoryInMemory = require("../repositories/UserRepositoryInMemory");
const AppError = require('../utils/AppError');

describe("UserCreateService", () => { // describe cria grupos de teste especifico para um mesmo assunto
    
    let userRepositoryInMemory = null;
    let userCreateService = null;

    beforeEach(() => { // beforeEach é uma função do jest que executa antes de cada teste ser rodados 
         userRepositoryInMemory = new UserRepositoryInMemory(); // estamos utilizando essas 2 instancias aqui dentro para não precisar repetir essas duas linhas dentro de cada teste
         userCreateService = new UserCreateService(userRepositoryInMemory);
    });

    it("user should be create", async () => {
       const user = {
           name: "user teste",
           email: "user.teste@teste.com",
           password: "123"
       };
       
       const userCreated = await userCreateService.execute(user)
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

        await userCreateService.execute(user1);
        await expect(userCreateService.execute(user2)).rejects.toEqual(new AppError("Este e-mail já está em uso"))
        
    })
})


