import { Router } from 'express';
import { GetUserControllers } from './Controllers/get-users/get-user';
import { MongoGetUserRepository } from './repositories/get-users/mongo-get-users';

const routes = Router()


routes.get('/', async (request, response) => {
    response.send("Esta operacional");
})
routes.get('/user', async (req, res) => {
    const mongoGetUserRepository = new MongoGetUserRepository();
    const getUserControllers = new GetUserControllers(mongoGetUserRepository);
    const {body,statusCode } = await getUserControllers.handle();

    res.send(body).status(statusCode);

})

export {routes};