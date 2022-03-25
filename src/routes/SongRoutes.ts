import { Router } from 'express';
import SongController from '../controllers/SongController';


class SongRoutes {
    router = Router();
 

    constructor(){
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.route('/').get(SongController.getAllSongs);
        this.router.route('/:id').get(SongController.getSongById);
        this.router.route('/add').post(SongController.createSong);
        this.router.route('/update/:id').put(SongController.updateSong);
        this.router.route('/delete/:id').delete(SongController.deleteSong);
    }
}
export default new SongRoutes().router;