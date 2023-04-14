import { IGetUserControllers, IGetUserRepository } from "./protocols";

export class GetUserControllers implements IGetUserControllers {
  constructor(private readonly getUserRepository: IGetUserRepository) {}
  async handle() {
    try {
     //Valiade Requisição
      //Redirecionar a chamada...
      const user = await this.getUserRepository.getUsers();
      return{
        statusCode:200,
        body: user 
      }
      
    } catch (e) {
     console.log(e);
        return{
            statusCode:500,
            body: "Ops! Algo deu errado !"
          }
          
    }
  }
}
