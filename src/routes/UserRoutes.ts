import { Router } from 'express';
import controller from '../controllers/UserController';
import extractJWT from '../middlewares/auth';

class UserRoutes {
    router = Router();

    constructor(){
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.route('/validate').get(extractJWT,controller.validateToken);
        this.router.route('/register').post(controller.register);
        this.router.route('/login').post(controller.login);
        this.router.route('/get/all').get(controller.getAllUsers);
   
    }
}
export default new UserRoutes().router;

