import { Router } from 'express';
 
const routes = Router();

import UserController from './controllers/UserControllers';

routes.get('/users', UserController.index);

export default routes;