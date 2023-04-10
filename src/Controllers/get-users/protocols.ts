import {User} from '../../models/User'
export interface IGetUserControllers {
    handle():any;

}
export interface IGetUserRepository {
    getUsers():Promise<User[]>;

}