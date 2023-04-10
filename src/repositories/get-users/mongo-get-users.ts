import { IGetUserRepository } from "../../Controllers/get-users/protocols";
import { User } from "../../models/User";

export class MongoGetUserRepository implements IGetUserRepository{
  async  getUsers(): Promise<User[]> {
        return[{
            nome:"Isaac Bunga",
            email:"Isaac@gmail.com",
            senha:"123456"

        }]
    }
    
}