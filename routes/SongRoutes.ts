import { Router } from 'express';
import SongController from '../controllers/SongController';

class SongRoutes {
    router = Router();
    songController = new SongController();

    constructor(){
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.route('/').get(this.songController.getAllSongs);
        this.router.route('/:id').get(this.songController.getSongById)
    }
}
export default new SongRoutes().router;